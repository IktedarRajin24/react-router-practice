/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, id, email, phone } = user;
    return (
        <div className='user'>
            <h3>{name}</h3>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
            <button><Link to= {`/user/${id}`}>Show More</Link></button>
        </div>
    );
};

export default User;