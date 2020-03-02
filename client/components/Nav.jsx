import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRouteMobs } from "../actions";
import { logoutUser } from "../actions/logout";
import { loginUser } from "../actions/login";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBurger: true
    };
    this.toggleBurger = this.toggleBurger.bind(this);
  }
  toggleBurger() {
    this.setState({ showBurger: !this.state.showBurger });
  }

  handClick = obj => {};

  render() {
    const { auth, logout } = this.props;
    const { showBurger } = this.state;
    return (
      <nav className="navbar">
        <div className=" ">
          <div className="navicon glow">
            <Link className="link-white" to="/">
   
              <i className="fas fa-arrow-circle-left"></i>
            </Link>
          </div>
          {/* <div className="navicon glow">
       
            <Link className="link-white" to="/viewroute/ancient " replace>
        
              <h1>A</h1>
            </Link>
          </div>
          <div className="navicon glow">
            <Link className="link-white" to="/viewroute/medieval" replace>
           
              <h1>M</h1>
            </Link>
          </div>
          <div className="navicon glow">
            <Link className="link-white" to="/viewroute/industrial" replace>
            
              <h1>I </h1>
            </Link>
          </div>
          <div className="navicon glow">
            <i className="fas fa-arrow-circle-left"></i>
          </div> */}

          {/* {!auth.isAuthenticated && (
            <Link className="link" to="/signin">
              Login
            </Link>
          )}
          {auth.isAuthenticated && (
            <Link className="link" onClick={logout} to="/#">
              Logout
            </Link>
          )} */}
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
