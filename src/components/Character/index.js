import React from 'react';
import Tilt from 'react-tilt';
import PropTypes from 'prop-types';

import styled from './character.module.scss';

function Character({ name, nickname, img, status, appearance: seasons = [] }) {

    return (
        <Tilt options={{ scale: 1 }}>
            <div className={styled.character}>
                <div className={styled.image}>
                    <img src={img} alt={name} />
                </div>
                <div className={styled.body}>
                    <h3 className={styled.title}>{name}</h3>
                    <div className={styled.details}>
                        <div>
                            <strong>Breaking Bad Seasons</strong>
                            <p>{seasons?.join(', ')}</p>
                        </div>
                        <div>
                            <strong>Status</strong>
                            <p>{status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
}

Character.propTypes = {
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    appearance: PropTypes.array.isRequired,
};

export default Character;