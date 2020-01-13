import React, {useState} from 'react';
import CONST from './index.constants';
import STATE from './index.state';
import NewPostBar from './children/NewPostBar';
import PopUpWrap from './children/PopUpWrap';
import Icon from '../../components/Icon';
import EditPost from '../../components/EditPost';
import {timeFromNow} from '../../utils';

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
            <div className='max-w-5xl mx-auto flex justify-between mt-5'>
                <div className='w-9/12'>
                    <NewPostBar
                        openWindow={openWindow}
                        addPostDisabled={state.window}
                    />
                    <ul
                        className='flex flex-col rounded-lg overflow-hidded'
                        data-test={CONST.postList}>
                        {state.posts.map(post => (
                            <li
                                className='bg-white w-full mx-0 my-2 flex shadow-md rounded py-2 px-0'
                                key={post.id}>
                                <div className='flex flex-wrap flex-grow justify-center w-1/12 text-gray-600 pl-2'>
                                    <Icon icon='fas fa-arrow-up p-1 w-full text-center' />
                                    <p className='px-1 font-hairline w-full text-center'>5</p>
                                    <Icon icon='fas fa-arrow-down p-1 w-full text-center' />
                                </div>
                                <div className='flex flex-col w-9/12'>
                                    <div className='flex justify-end text-xs font-light font-hairline'>
                                        <span className='text-gray-600'>Posted:</span>
                                        <span className='text-gray-700 pl-1'>
                                            {timeFromNow(post.posted_at)}
                                        </span>
                                    </div>
                                    <h3 className='font-sans font-bold text-gray-800 text-lg cursor-pointer pb-2'>
                                        {post.title}
                                    </h3>
                                    <p className='font-serif font-thin text-gray-700 text-md'>
                                        {post.description}
                                    </p>
                                </div>
                                <div className='flex justify-center w-2/12 pr-2'>
                                    <img
                                        className=' w-5/6 rounded-full'
                                        src='https://picsum.photos/200'
                                        alt='post_image'
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-3/12 bg-white ml-3 rounded-lg overflow-hidden shadow-md'></div>
            </div>
            <PopUpWrap
                closeWindow={closeWindow}
                windowOpen={state.window}>
                <EditPost
                    dataTest={CONST.addPostWindow}
                    savePost={savePost}
                    cancel={closeWindow}
                />
            </PopUpWrap>
        </>
    );
}

export default HomePage;
