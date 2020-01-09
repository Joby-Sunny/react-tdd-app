import {useEffect} from 'react';
import Params from './index.constants';

function validateParams(incomingParams) {
    Params.forEach(paramItem => {
        if (!incomingParams[paramItem.props]) {
            console.error(paramItem.message);
        }
    });
}

function OutsideClick({ref, click}) {
    validateParams({ref, click});
    function clicked(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            click(event);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', clicked);
        return () => {
            document.removeEventListener('mousedown', clicked);
        };
    }, []);
}

export default OutsideClick;
