/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to="/users">Users</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
        </nav>
    );
};

export default Header;