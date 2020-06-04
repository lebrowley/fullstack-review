import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux/reducer';


function Profile(props) {
    const logout = () => {
        axios.delete('/auth/logout')
        .then(() => {
            props.logoutUser()
            props.history.push('/')     //props.history comes from react-router-dom
        })
        .catch(err => alert('Could not logout'))
    }
    return (
        <div>
            <p>Welcome {props.user.email}</p>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {logoutUser})(Profile);
