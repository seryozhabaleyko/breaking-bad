import React from 'react';

import logo from '../../assets/logo.png';
import styled from './logo.module.scss';

function Logo() {

    return (
        <a href="/" className={styled.logo}>
            <img src={logo} alt="The Breaking Bad"/>
        </a>
    );
}

export default Logo;