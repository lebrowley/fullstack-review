import axios from 'axios';

const initialState = {
    user: {},              //the user session info here; all of our methods in authControl are returning req.session.user
    isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER',
    LOGOUT_USER = 'LOGOUT_USER',
    GET_USER = 'GET_USER'

//an action is an object with a type and payload
export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function getUser() {
    const user = axios.get('/auth/user')   //don't need async or anything because of redux-promise-middleware in store
    return {
        type: GET_USER,
        payload: user
    }
}

//this is where the reducing happens
export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, user:action.payload, isLoggedIn: true}
        case LOGOUT_USER:
            return {...state, ...action.payload}
        case GET_USER + '_PENDING':
            return state                            // so what's the diff between state, {...state, etc} and initialState? why would we want each of those in these cases? 
        case GET_USER + '_FULFILLED':
            return {...state, user: action.payload.data, isLoggedIn: true}
        case GET_USER + '_REJECTED':
            return initialState
        default:
            return state
    }
}