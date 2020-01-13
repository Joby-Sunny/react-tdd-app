import React from 'react';
import PropTypes from 'prop-types';
import PopUp from '../../../../components/PopUp';

PopUpWrap.porpTypes = {
    closeWindow: PropTypes.func.isRequired,
    windowOpen: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired
};

function PopUpWrap(props) {
    if (props.windowOpen) {
        return <PopUp close={props.closeWindow}>{props.children}</PopUp>;
    } else {
        return null;
    }
}

export default PopUpWrap;
