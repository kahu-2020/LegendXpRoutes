import React from "react";
import { connect } from "react-redux";
import { calculatexp } from "../actions";
import { Link } from "react-router-dom";

class Choose extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(calculatexp());
  }

  render() {
    return (
      <div className="eracontainer vertical-center">
        <div className="eratitle">
          <h2> Choose your xp route </h2>
        </div>
        <div className="flip-card-container">
          <div className="flip-card">
            <div className="flip-card-front flip-card-one">
              <span>Ancient</span>
            </div>
            <div className="flip-card-back">
              <p>
                <span> Ancient </span>
                {new Intl.NumberFormat("en-GB", {
                  notation: "compact",
                  compactDisplay: "long"
                }).format(this.props.xp.ancxp)}
                                <br />
                <br />
                <Link className="link-white" to="/viewroute/ancient">
                  View
                </Link>
                &nbsp;&nbsp;
                <Link className="link-white" to="">
                  Modify
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card-container">
          <div className="flip-card">
            <div className="flip-card-front flip-card-two">
              <span>Medevil</span>
            </div>
            <div className="flip-card-back">
              <p>
                <span>Medevil</span>
                {new Intl.NumberFormat("en-GB", {
                  notation: "compact",
                  compactDisplay: "long"
                }).format(this.props.xp.medxp)}
                                <br />
                <br />
                <Link className="link-white" to="/viewroute/medieval">
                  View
                </Link>
                &nbsp;&nbsp;
                <Link className="link-white" to="/register">
                  Modify
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card-container">
          <div className="flip-card">
            <div className="flip-card-front flip-card-three">
              <span>Industrial</span>
            </div>
            <div className="flip-card-back">
              <p>
                <span>Industrial</span>
                {new Intl.NumberFormat("en-GB", {
                  notation: "compact",
                  compactDisplay: "long"
                }).format(this.props.xp.indusxp)}
                <br />
                <br />
                <Link className="link-white" to="/viewroute/industrial">
                  View
                </Link>
                &nbsp;&nbsp;
                <Link className="link-white" to="/register">
                  Modify
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    xp: state.xp
  };
}
export default connect(mapStateToProps)(Choose);