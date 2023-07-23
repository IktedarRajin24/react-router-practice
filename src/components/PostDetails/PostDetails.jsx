/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const postDetails = useLoaderData();
    
    return (
        <div className='post-details'>
            <h4>{postDetails.data.title}</h4>
            <p>{postDetails.data.body}</p>
        </div>
    );
};

export default PostDetails;