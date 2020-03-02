import React from "react";
import { connect } from "react-redux";
import DragonDrop from "drag-on-drop";
import Nav from "./Nav";

import {
  fetchRouteMobs,
  calculatexp,
  setRouteMobs,
  setgained
} from "../actions";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: 3 };
  }

  componentDidMount() {
    const dragonDrop = new DragonDrop(this.dragon);
    this.setState({ dragonDrop });
    this.props.dispatch(calculatexp());
    let obj = {
      userid: 1,
      era: this.props.match.params.era
    };
    this.props.dispatch(fetchRouteMobs(obj))
    this.props.dispatch(calculatexp());
  }

  componentDidUpdate() {
    const { dragonDrop } = this.state;
    dragonDrop.initElements(this.dragon);
    this.forceUpdate;
  }

  handleAddClick = id => {
    console.log(id)
    let addxp = this.props.gained + this.props.route[id].xp;
  
    console.log(addxp);
    this.props.dispatch(setgained(addxp));
    let remove = this.props.route.splice(id, 1);
    console.log(this.props.route)
    this.props.dispatch(setRouteMobs(this.props.route));
  };
  handleRemoveClick = id => {
    let remove = this.props.route.splice(id , 1);
    this.props.dispatch(setRouteMobs(this.props.route));
    this.forceUpdate();
  };

  render() {
    const lis = [];
    for (let i = 0; i < this.props.route.length; i++) {
      lis.push(
        <li key={i} className="view-item">
          <button className="fa fa-bars" aria-label="Reorder" />
          <span className="view-item-title">
            {this.props.route[i].mob_name}
          </span>
          <span className="view-item-zone">{this.props.route[i].zone}</span>
          <span>{this.props.route[i].xp}</span>
          <span className="view-item-button" onClick={() => this.handleRemoveClick([i])}>
            <p class="fas fa-times-circle"></p>
          </span>
          <span className="view-item-button" className="view-item-button" onClick={() => this.handleAddClick([i])}>
            <p class="fas fa-check-circle"></p>
          </span>
        </li>
      );
    }
    let era = this.props.match.params.era;
    return (
      <React.Fragment>
        
        <Nav />
        <div className=" vertical-center container">
          <div className="info view-panel ">
            <ul>
              <li>Total Xp: {this.props.xp[era]} </li>
              <li> Xp Gained: {this.props.gained}</li>
              <li> Xp Average: </li>
              <li> Number of Mobs {this.props.mobs.length}</li>
              <li>Nmber Remaining </li>
            </ul>
          </div>
          <div className="view-route">
            <ol
              aria-labelledby="help"
              className="dragon"
              ref={el => (this.dragon = el)}
            >
              {/* <CSSTransitionGroup>
                transitionName="example" transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={300}
                transitionLeave={300}> */}
                {lis}
              {/* </CSSTransitionGroup> */}
            </ol>
          </div>
        </div>
        <Nav />
        </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    mobs: state.routemobs,
    route: state.routemobs,
    xp: state.xp,
    gained: state.xpgained
  };
}
export default connect(mapStateToProps)(Select);
{
  {
    /* <div onClick={() => this.handleAddClick(mob.id)}>

                    </div>
       
                    <div onClick={() => this.handleRemoveClick(index)}>
                    
                    </div> */
  }
}
