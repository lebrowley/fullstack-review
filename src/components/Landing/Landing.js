import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //subscribe to the store
import { loginUser } from '../../redux/reducer';

class Landing extends Component {
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

    login = (e) => {
        e.preventDefault()
        const { email, password } = this.state

        axios.post('/auth/login', { email, password })
            .then(res => {
                this.props.loginUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch(err => alert('Could not login'))
    }

    render() {
        const { email, password } = this.state

        return (
            <div>
                <form
                    onSubmit={(e) => this.login(e)}>
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
                        value='Login' />
                </form>
                <span>Don't already have an account? Register here:</span>
                <Link to='/register'>
                    Register
                </Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = { loginUser }                 //put all your action creators here, so then you can just pass the two variables into connect
export default connect(mapStateToProps, mapDispatchToProps)(Landing);