import React from "react";
import { connect } from "react-redux";
import { calculatexp, fetchRouteMobs, setgained } from "../actions";
import { Link } from "react-router-dom";



class Choose extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(calculatexp())
    this.props.dispatch(setgained(0))
  }

  handClick = obj => {
    this.props.dispatch(fetchRouteMobs(obj));
  }
  
  render() {
    return (
      <React.Fragment>>
      <div className="eracontainer vertical-center">
      <div className="flip-card-container">
          <div className="flip-card ">
            <div className="flip-card-front flip-card-one">
              <span>Ancient</span>
            </div>
            <div className="flip-card-back">
              <p>
                <span> Ancient </span>
                {new Intl.NumberFormat("en-GB", {
                  notation: "compact",
                  compactDisplay: "long"
                }).format(this.props.xp.ancient)}
                <br />
                <br />
                <Link className="link-white" to="/viewroute/ancient" onClick={this.handClick({userid: 1,era: "ancient"})}>
                  View
                </Link>
                &nbsp;&nbsp;
                <Link className="link-white" to="/modifyroute/ancient">
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
                }).format(this.props.xp.medieval)}
                                <br />
                <br />
                <Link className="link-white" to="/viewroute/medieval" onClick={this.handClick({userid: 1,era: "medieval"})}>
                  View
                </Link>
                &nbsp;&nbsp;
                <Link className="link-white" to="/modifyroute/medieval">
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
                }).format(this.props.xp.industrial)}
                <br />
                <br />
                <Link className="link-white" to="/viewroute/industrial" onClick={this.handClick({userid: 1,era: "industrial"})}>
                  View
                </Link>
                &nbsp;&nbsp;
                <Link className="link-white" to="/modifyroute/industrial">
                  Modify
                </Link>
              </p>
            </div>
          </div>
        </div>
        </div>
        </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    xp: state.xp
  };
}
export default connect(mapStateToProps)(Choose);
