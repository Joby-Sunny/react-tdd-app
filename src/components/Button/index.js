import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Button(props) {
    const classList = ['button-common',...props.classList];
    return (
        <button
            className={classList.join(' ')}
            onClick={props.click}
            disabled={props.disabled}
            data-test={props.dataTest}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    dataTest: PropTypes.string,
    classList: PropTypes.array.isRequired,
    click: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
        .isRequired,
    disabled: PropTypes.bool
};

export default Button;
