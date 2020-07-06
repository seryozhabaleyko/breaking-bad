import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Marketing } from './search.svg';

import styled from './search.module.scss';

function Search({ getQuery }) {

    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    };

    return (
        <section className={styled.section}>
            <div className={styled.search}>
                <div className={styled.icon}>
                    <Marketing className={styled.svg} />
                </div>
                <input
                    type='text'
                    className={styled.control}
                    placeholder='Search characters'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </div>
        </section>
    );
}

Search.propTypes = {
    getQuery: PropTypes.func.isRequired,
};

export default React.memo(Search);