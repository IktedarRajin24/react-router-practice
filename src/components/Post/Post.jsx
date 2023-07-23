/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className='post'>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>See details</Link>
            
        </div>
    );
};

export default Post;