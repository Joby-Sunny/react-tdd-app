import React from 'react';
import PropTypes from 'prop-types';

TextArea.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    change: PropTypes.func,
    disabled: PropTypes.bool,
    classList: PropTypes.array,
    dataTest: PropTypes.string
};

function TextArea(props) {
    const classList = [...props.classList];
    return (
        <textarea
            data-test={props.dataTest}
            className={classList.join(' ')}
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.change}
            disabled={props.disabled}></textarea>
    );
}

export default TextArea;
