import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../components/Icon';
import {timeFromNow} from '../../../../utils';

PostItem.propTypes = {
    id: PropTypes.number.isRequired,
    posted_at: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

function PostItem(props) {
    return (
        <li className='bg-white w-full mx-0 my-2 flex shadow-md rounded py-2 px-0'>
            <PostRating />
            <PostContent
                posted_at={props.posted_at}
                title={props.title}
                description={props.description}
            />
            <PostImage id={props.id} image_url={props.image_url} />
        </li>
    );
}

export default PostItem;

function PostRating() {
    return (
        <div className='flex flex-wrap flex-grow justify-center w-1/12 text-gray-600 pl-2'>
            <Icon icon='fas fa-arrow-up p-1 w-full text-center' />
            <p className='px-1 font-hairline w-full text-center'>5</p>
            <Icon icon='fas fa-arrow-down p-1 w-full text-center' />
        </div>
    );
}

PostContent.propTypes = {
    posted_at: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

function PostContent(props) {
    return (
        <div className='flex flex-col w-9/12'>
            <div className='flex justify-end text-xs font-light font-hairline'>
                <span className='text-gray-600'>Posted:</span>
                <span className='text-gray-700 pl-1'>
                    {timeFromNow(props.posted_at)}
                </span>
            </div>
            <h3 className='font-sans font-bold text-gray-800 text-lg cursor-pointer pb-2'>
                {props.title}
            </h3>
            <p className='font-serif font-thin text-gray-700 text-md'>
                {props.description}
            </p>
        </div>
    );
}

PostImage.propTypes = {
    id: PropTypes.string.isRequired
};

function PostImage(props) {
    return (
        <div className='flex justify-center w-2/12 pr-2'>
            <img
                className=' w-5/6 rounded-full'
                src='https://picsum.photos/200'
                alt={props.id}
            />
        </div>
    );
}
