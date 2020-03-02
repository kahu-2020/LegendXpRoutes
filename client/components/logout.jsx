import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRouteMobs } from "../actions";
import { logoutUser } from "../actions/logout";
import { loginUser } from "../actions/login";

class Logout extends React.Component {
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
      <nav className="logout">
        <div className=" ">
          <div className="logout-icon glow">
            <Link className="link-white" to="/" onClick={() => logout()}>
              <i className="fas fa-sign-out-alt"></i>
            </Link>
          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
