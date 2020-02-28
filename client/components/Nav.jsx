import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
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
  render() {
    const { auth, logout } = this.props;
    const { showBurger } = this.state;
    return (
      <nav className="navbar">
        <div className="navcontainer">
          <h1 className="">Legendmud XP Routes</h1>
          <div className="bar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
  <polygon points="100 0 100 10 0 10" />
                  </svg>
          </div>
              
          {!auth.isAuthenticated && (
            <Link className="link" to="/signin" >
              Login
            </Link>
          )}
          {auth.isAuthenticated && (
            <Link className="link" onClick={logout} to="/#" >
              Logout
            </Link>
          )}
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
