/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserInfo = () => {
    const userInfo = useLoaderData();
    return (
        <div>
            <h3>{userInfo.name}</h3>
            <p>Email: {userInfo.email}</p>
            <p>Phone: {userInfo.phone}</p>
        </div>
    );
};

export default UserInfo;