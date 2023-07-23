/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
        </div>
    );
};

export default Header;