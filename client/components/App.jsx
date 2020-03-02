import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Register from "./Register";
import Main from "./Main"
import View from "./View"
import Modify from "./Modify"
import Title from "./Title";
import Logout from "./Logout";



export function App({ auth }) {
  return (
   
    <Router>
      {auth.isAuthenticated && (
      <Logout />
      )}
      {/* <Footer /> */}
      <Title/>
      <Route exact path="/" component={Main} />
      <Route path="/register" component={Register} />
      <Route path="/signin" component={Login} />
      <Route path="/viewroute/:era" component={View} />
      <Route path="/modifyroute/:era" component={Modify} />
    </Router>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
