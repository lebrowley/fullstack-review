import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../redux/reducer';


class Register extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault()
        const { email, password } = this.state

        axios.post('/auth/register', { email, password })
            .then(res => {
                this.props.loginUser(res.data)   //basically setting state, but the reduxState
                this.props.history.push('/dashboard')
            })
            .catch(err => alert('Could not register'))
    }

    render() {
        const { email, password } = this.state

        return (
            <div>
                <form
                    onSubmit={(e) => this.register(e)}>
                    <input
                        type='text'
                        placeholder='email...'
                        name='email'
                        onChange={e => this.handleChange(e)} />
                    <input
                        type='password'
                        placeholder='password...'
                        name='password'
                        onChange={e => this.handleChange(e)} />
                    <input
                        type='submit'
                        value='Register' />
                </form>
                <span>Already have an account? Login here:</span>
                <Link to='/'>
                    Login
                </Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = {loginUser} 
export default connect(mapStateToProps, mapDispatchToProps)(Register);

