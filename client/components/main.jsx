import React from 'react'
import { connect } from 'react-redux'
import Splash from "./Splash";
import Choose from "./Choose"

function Main({ auth }) {
    return (
        <div>
            {!auth.isAuthenticated && <Splash />}
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