/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserInfo = () => {
    const userInfo = useLoaderData();
    const navigate = useNavigate();

    const backBtn = () =>{
        navigate(-1)
    }

    return (
        <div>
            <h3>{userInfo.name}</h3>
            <p>Email: {userInfo.email}</p>
            <p>Phone: {userInfo.phone}</p>
            <button onClick={backBtn}>Go Back</button>
        </div>
    );
};

export default UserInfo;