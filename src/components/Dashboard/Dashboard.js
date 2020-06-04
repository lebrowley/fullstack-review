import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer';


class Dashboard extends Component {
  
    componentDidMount() {
        this.props.getUser()
        .catch(() => {
            this.props.history.push('/')
        })
    }   //this might be better placed in App.js so it applies to every page see link in notes

    render() {
        return <div>Dashboard Component</div>
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {getUser})(Dashboard);