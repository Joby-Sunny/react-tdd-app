import React, {useState} from 'react';
import PropTypes from 'prop-types';
import STATE from './index.state';
import Input from '../Input';
import Button from '../Button';
import HomeConst from '../../Routes/HomePage/index.constants';

EditPost.propTypes = {
    savePost: PropTypes.func.isRequired,
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
    return (
        <div className='w-full' data-test={props.dataTest}>
            {state.postInputs.map((input, id) => (
                <Input key={id} {...input} change={updateInput} />
            ))}
            <Button
                classList={['bg-green-400']}
                click={savePost}
                dataTest={HomeConst.savePostButton}>
        Save Post
            </Button>
        </div>
    );
}

export default EditPost;
