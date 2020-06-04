import React, { Component } from 'react';
import axios from 'axios';


export default function Profile(props) {
    const logout = () => {
        axios.delete('/auth/logout')
        .then(() => {
            props.history.push('/')     //props.history comes from react-router-dom
        })
        .catch(err => alert('Could not logout'))
    }
    return (
        <div>
            <p>Profile Component</p>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}
