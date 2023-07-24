/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const navigate = useNavigate();

    const backBtn = () =>{
        navigate(-1);
    }
    
    return (
        <div className='post-details'>
            <h4>{postDetails.data.title}</h4>
            <p>{postDetails.data.body}</p>
            <button onClick={backBtn}>Go Back</button>
        </div>
    );
};

export default PostDetails;