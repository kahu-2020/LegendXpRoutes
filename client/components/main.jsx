import React from 'react'
import { connect } from 'react-redux'
import Splash from "./Splash";
import Choose from "./Choose"
import Login from './Login';

function Main({ auth }) {
    return (
        <div>
            {!auth.isAuthenticated && <Login />}
            {auth.isAuthenticated &&  <Choose />}
        </div>
    )
}
const mapStateToProps = ({ auth }) => {
    return {
      auth
    };
  };
export default connect(mapStateToProps)(Main)