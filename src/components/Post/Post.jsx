/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();

    const seeDetailsbtn = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>See details</Link>
            <button onClick={seeDetailsbtn}>See Details</button>
            
        </div>
    );
};

export default Post;