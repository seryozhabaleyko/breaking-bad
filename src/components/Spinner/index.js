import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Box from 'ui-box';

import { ReactComponent as Puff } from './puff.svg';

import './spinner.scss';

const loadingKeyframes = css.keyframes('loading', {
    '0%': {
        transform: 'rotate(0)',
    },
    '100%': {
        transform: 'rotate(360deg)',
    },
});

const loadingCircleKeyframes = css.keyframes('loading-circle', {
    '0%': {
        strokeDashoffset: 600,
    },
    '100%': {
        strokeDashoffset: 0,
    }
});

const outerClass = css({
    animation: `${loadingKeyframes} 2s linear infinite`,
}).toString();

const innerClass = (color) => css({
    strokeDashoffset: 600,
    strokeDasharray: 300,
    strokeWidth: 12,
    strokeMiterlimit: 10,
    strokeLinecap: 'round',
    animation: `${loadingCircleKeyframes} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite`,
    stroke: color,
    fill: 'transparent',
}).toString();

function Spinner({ size = 40, delay = 0, ...rest }) {

    return (
        <Puff />
    );
}

Spinner.propTypes = {

};

export default memo(Spinner);