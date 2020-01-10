import React from 'react';
import PropTypes from 'prop-types';
import CONST from '../../index.constants';
import Icon from '../../../../components/Icon';
import Button from '../../../../components/Button';

NewPostBar.propTypes = {
    openWindow: PropTypes.func.isRequired,
    addPostDisabled: PropTypes.bool.isRequired
};

function NewPostBar(props) {
    return (
        <div className='flex flex-grow justify-end items-center px-3 py-2 h-14 bg-white shadow-md rounded-lg mb-2'>
            <p
                className='text-gray-500 ml-2 flex-1 border border-white hover:border-gray-400 rounded-sm p-3'
                onClick={props.openWindow}
                children='Type something to post.'
            />
            <Button
                classList={[
                    'p-3',
                    'flex',
                    'text-xl',
                    'rounded-sm',
                    'items-center',
                    'justify-center',
                    'text-gray-500',
                ]}
                click={props.openWindow}
                disabled={props.addPostDisabled}
                dataTest={CONST.addPostButton}>
                <Icon icon='fas fa-plus-circle text-2xl pr-1' />
                <span>Add Post</span>
            </Button>
        </div>
    );
}

export default NewPostBar;
