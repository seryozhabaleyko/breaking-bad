import React from 'react';
import classNames from 'classnames';

import Logo from '../Logo';

import styled from './header.module.scss';

function Header() {

    return (
        <header className={styled.header}>
            <div className={classNames('container', styled.container)}>
                <Logo />
            </div>
        </header>
    );
}

export default Header;