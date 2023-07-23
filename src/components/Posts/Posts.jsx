/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts.data)
    return (
        <div>
            All posts here: {posts.data.length}
            {
                posts.data.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;