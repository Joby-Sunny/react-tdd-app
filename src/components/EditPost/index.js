import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import Icon from '../Icon';
import TextArea from '../TextArea';
import STATE from './index.state';
import CONST from './index.constants';
import HomeConst from '../../Routes/HomePage/index.constants';

EditPost.propTypes = {
    savePost: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    dataTest: PropTypes.string
};

function EditPost(props) {
    const [state, setState] = useState(STATE);
    const savePost = () => {
        let newPost = {};
        for (let input of state.postInputs) {
            newPost[input.name] = input.value;
        }
        props.savePost(newPost);
    };
    const updateInput = event => {
        const newInputs = state.postInputs.map(input => {
            if (event.target.name === input.name) {
                input.value = event.target.value;
            }
            return {...input};
        });
        setState({...state, postInputs: newInputs});
    };
    const resetPost = () => {
        setState({...state, postInputs: STATE.postInputs});
    };
    const closeModal = () => {
        resetPost();
        props.cancel();
    };
    return (
        <div className='w-full' data-test={props.dataTest}>
            <div className='border-b border-gray-300 p-2 flex justify-between'>
                <h3 className='text-gray-700 font-sans text-2xl'>Add New Post</h3>
                <span
                    onClick={closeModal}
                    data-test={CONST.closeButton}
                    className='text-3xl text-gray-400 cursor-pointer'>
                    <Icon icon='fas fa-times' />
                </span>
            </div>
            <div className='border-b border-gray-300 p-2'>
                <InputsList postInputs={state.postInputs} updateInput={updateInput} />
            </div>
            <div className='p-2 flex justify-end'>
                <Button
                    classList={[
                        'bg-green-400 hover:bg-green-700',
                        'p-2 text-lg rounded',
                        'text-grey-500 hover:text-grey-700'
                    ]}
                    click={savePost}
                    dataTest={HomeConst.savePostButton}>
          Save Post
                </Button>
            </div>
        </div>
    );
}

export default EditPost;

InputsList.propTypes = {
    postInputs: PropTypes.array.isRequired,
    updateInput: PropTypes.func.isRequired
};

function InputsList(props) {
    const [input, textArea] = props.postInputs;
    const classList = [
        'flex flex-1',
        'w-full border border-white',
        'px-3 py-2 my-3',
        'outline-none rounded',
        'hover:border-indigo-400',
        'focus:border-indigo-400'
    ];
    return (
        <>
            <Input classList={classList} {...input} change={props.updateInput} />
            <TextArea
                classList={classList}
                {...textArea}
                change={props.updateInput}
            />
        </>
    );
}
