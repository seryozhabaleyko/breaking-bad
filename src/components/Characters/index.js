import React from 'react';
import PropTypes from 'prop-types';

import Character from '../Character';

import styled from './characters.module.scss';

function Characters({ isLoading, characters, error }) {

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <section className={styled.characters}>
            {characters?.map((character) => (
                <Character key={character.char_id} {...character} />
            ))}
        </section>
    );
}

Characters.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    characters: PropTypes.array.isRequired,
    error: PropTypes.string,
};

export default Characters;