import React from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    change: PropTypes.func,
    disabled: PropTypes.bool,
    classList: PropTypes.array,
    dataTest: PropTypes.string
};

function Input(props) {
    const classList = [
        'border',
        'border-gray-300',
        'shadow-md',
        'focus:border-blue-700'
    ];
    return (
        <input
            data-test={props.dataTest}
            className={classList.join(' ')}
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.change}
            disabled={props.disabled}
        />
    );
}

export default Input;
