import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const classList = [
        'rounded',
        'shadow-md',
        'px-3',
        'py-2',
        ...props.classList
    ];
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
