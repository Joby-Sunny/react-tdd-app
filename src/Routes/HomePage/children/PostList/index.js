import React from 'react';
import PropTypes from 'prop-types';
import CONST from '../../index.constants';
import PostItem from '../PostItem';

PostList.propTypes = {
    postList: PropTypes.array.isRequired
};

function PostList({postList}) {
    return (
        <ul
            className='flex flex-col rounded-lg overflow-hidded'
            data-test={CONST.postList}>
            <PostListWrap postList={postList} />
        </ul>
    );
}

export default PostList;

PostList.propTypes = {
    postList: PropTypes.array.isRequired
};

function PostListWrap({postList}) {
    return postList.map(post => <PostItem {...post} key={post.id} />);
}
