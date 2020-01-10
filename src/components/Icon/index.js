import React from 'react';
const Icon = props => {
    if (props.icon) {
        return <i data-test={props.dataTest} className={props.icon} />;
    } else {
        return null;
    }
};
export default Icon;
