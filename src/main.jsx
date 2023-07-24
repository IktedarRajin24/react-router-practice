/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import User from './components/User/User.jsx';
import UserInfo from './components/UserInfo/UserInfo.jsx';
import Posts from './components/Posts/Posts.jsx';
import axios from 'axios';
import Post from './components/Post/Post.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />,
    children : [
      {
        path : 'about',
        element : <About></About>
      },
      {
        path : 'contact',
        element : <Contact></Contact>
      },
      {
        path : 'users',
        element : <Users></Users>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path : 'user/:userId',
        element : <UserInfo></UserInfo>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: 'posts',
        element : <Posts></Posts>,
        loader: () => axios.get('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element: <PostDetails></PostDetails>,
        loader: ({params}) => axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

      },
      {
        path: "*",
        element: <div>404 not found</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
