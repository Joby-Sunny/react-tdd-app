import React, {useState} from 'react';
import Button from '../../components/Button';
import EditPost from '../../components/EditPost';
import CONST from './index.constants';
import PopUp from '../../components/PopUp';
import STATE from './index.state';

function HomePage() {
    const [state, setState] = useState(STATE);
    const openWindow = () => {
        setState({...state, window: true});
    };
    const closeWindow = () => {
        setState({...state, window: false});
    };
    const savePost = newPost => {
        const post = {id: state.posts.length, ...newPost};
        setState({...state, posts: [...state.posts, post], window: false});
    };

    return (
        <>
            <Button
                classList={[]}
                click={openWindow}
                disabled={state.window}
                dataTest={CONST.addPostButton}>
                <span>Add Post</span>
            </Button>
            {state.window ? (
                <PopUp close={closeWindow}>
                    <EditPost dataTest={CONST.addPostWindow} savePost={savePost} />
                </PopUp>
            ) : null}
            <ul data-test={CONST.postList}>
                {state.posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <br />
                        <p>{post.description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default HomePage;
