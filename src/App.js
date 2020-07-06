import React, { useState } from 'react';
import useFetch from 'use-http';
import { useDebouncedCallback } from 'use-debounce';

import Header from './components/Header';
import Search from './components/Search';
import Characters from './components/Characters';
import Footer from './components/Footer';
import { baseUrl } from './constants';
import Spinner from './components/Spinner';

function App() {
    const [query, setQuery] = useState('');
    const [debouncedCallback] = useDebouncedCallback((q) => {
        setQuery(q);
    }, 1000);

    const { loading, data = [], error } = useFetch(`${baseUrl}/characters?name=${query}`, [query]);

    return (
        <>
            <Header />
            <Spinner />
            <main>
                <div className="container">
                    <Search getQuery={(q) => debouncedCallback(q)} />
                    <Characters isLoading={loading} characters={data} error={error} />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;