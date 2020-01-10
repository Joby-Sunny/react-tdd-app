import React, {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import OutsideClick from '../../Hooks/OutsideClick';
import './style.css';

PopUp.propTypes = {
    close: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
};

function PopUp(props) {
    const modalRoot = document.getElementById('modal-root');
    const wrap = document.createElement('div');
    wrap.classList = ['popup-overlay'].join(
        ' '
    );

    useEffect(() => {
        modalRoot.appendChild(wrap);
        return () => {
            modalRoot.removeChild(wrap);
        };
    });

    return ReactDOM.createPortal(<PopUpContent {...props} />, wrap);
}

export default PopUp;

PopUpContent.propTypes = {
    close: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
};

function PopUpContent(props) {
    const wrapperRef = useRef(null);
    OutsideClick({
        ref: wrapperRef,
        click: event => {
            props.close(event);
        }
    });

    return (
        <div
            className='max-w-2xl mx-auto rounded-lg overflow-hidden bg-white  border-grey-400 border-solid  border popup-window'
            ref={wrapperRef}>
            {props.children}
        </div>
    );
}
