import React from "react";
import { connect } from "react-redux";

function Title(props) {
  return (
    <div className="title ">
      <h1>XP Route Calculater </h1>
    </div>
  );
}

export default connect()(Title);
