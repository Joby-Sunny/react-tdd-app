import React from 'react';
import PropTypes from 'prop-types';
import PopUp from '../../../../components/PopUp';
import EditPost from '../../../../components/EditPost';
import CONST from '../../index.constants';

PopUpWrap.porpTypes = {
    windowOpen: PropTypes.bool.isRequired,
    closeWindow: PropTypes.func.isRequired,
    savePost: PropTypes.func.isRequired
};

function PopUpWrap(props) {
    if (props.windowOpen) {
        return (
            <PopUp close={props.closeWindow}>
                <EditPost dataTest={CONST.addPostWindow} savePost={props.savePost} />
            </PopUp>
        );
    } else {
        return null;
    }
}

export default PopUpWrap;
