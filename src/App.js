import React from 'react';
import routes from './routes';
import {connect} from 'react-redux'; 
import Header from './components/Header/Header';
import AuthHeader from './components/AuthHeader/AuthHeader';  
import './App.css';

function App(props) {                  
  return (
    <div className="App">
      {props.isLoggedIn ? <Header/> : <AuthHeader/>}   {/*isLoggedIn is on reduxState */}
      {routes}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App);                    //this should look like closures??
//props for App.js (and all of it's dependencies, are now coming from the store)
