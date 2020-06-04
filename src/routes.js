import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';


export default (
    <Switch>
        <Route component={Landing} exact path='/'/>
        <Route component={Register} path='/register'/>
        <Route component={Dashboard} path='/dashboard'/>
        <Route component={Profile} path='/profile'/>
    </Switch>
)