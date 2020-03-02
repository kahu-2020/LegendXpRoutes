import React from "react";
import { connect } from "react-redux";
import { fetchmobs, addtoRoute, fetchRouteMobs, removeFromRoute } from "../actions"; 
import DragonDrop from "drag-on-drop";
import Nav from "./Nav"
class Modify extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let obj = {
      userid: 1,
      era: this.props.match.params.era
    };
    this.props.dispatch(fetchmobs(obj));
    this.props.dispatch(fetchRouteMobs(obj));
  }
  handleAddClick = (mobs, id) => {
    console.log("id is"+ id)
    const addmob = {
      mobid: mobs,
      userid: 1,
      era: this.props.match.params.era
    };
    let remove = this.props.mobs.splice(id, 1);
    this.props.dispatch(addtoRoute(addmob));
  };
  handleRemoveClick = (mobs, id) => {  
    let obj = {
      userid: 1,
      era: this.props.match.params.era
    };

    const revMob = {
      mobid: mobs,
      userid: 1,
      era: this.props.match.params.era
    };
    // this.props.mobs.push()
    this.props.dispatch(removeFromRoute(revMob));
    this.props.dispatch(fetchRouteMobs(obj))
  };

  render() {

    const mobslis = [];
    for (let i = 0; i < this.props.mobs.length; i++) {
      mobslis.push(
        <li key={i} className="view-item">
          <button className="fa fa-bars" aria-label="Reorder" />
          <span className="view-item-title">
            {this.props.mobs[i].mob_name}
          </span>
          <span className="view-item-zone">{this.props.mobs[i].zone}</span>
          <span>{this.props.mobs[i].xp}</span>

          <span className="view-item-button" onClick={() => this.handleAddClick(this.props.mobs[i].id, [i])}>
            <p class="fas fa-check-circle" ></p>
          </span>
        </li>
      );
    }
    const routelis = [];
    for (let i = 0; i < this.props.route.length; i++) {
      routelis.push(
        <li key={i} className="view-item">
          <button className="fa fa-bars" aria-label="Reorder" />
          <span className="view-item-title">
            {this.props.route[i].mob_name}
          </span>
          <span className="view-item-zone">{this.props.route[i].zone}</span>
          <span>{this.props.route[i].xp}</span>
          <span className="view-item-button"  onClick={() => this.handleRemoveClick(this.props.route[i].id,[i])}>
            <p class="fas fa-times-circle" ></p>
          </span>

        </li>
      )
    }
    let era = this.props.match.params.era;
    return (
      <React.Fragment>
        <div className="mod-container">
          <div className="mod-route">
            <ol
              aria-labelledby="help"
              className="dragon"
              ref={el => (this.dragon = el)}            >
                {mobslis}

            </ol>
          </div>
          <div className="mod-route">
            <ol
              aria-labelledby="help"
              className="dragon"
              ref={el => (this.dragon = el)}
            >
                {routelis}
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
    mobs: state.mobs,
    route: state.routemobs
  };
}
export default connect(mapStateToProps)(Modify);



// <React.Fragment>
// <div className="panel">
//   <h1>Legendmud Xp Routes</h1>
//   <table>
//     <tr>
//       <th>Name</th>
//       <th>Zone</th>
//       <th>Era</th>
//       <th>Xp</th>
//     </tr>
//     {this.props.mobs.map(mob => (
//       <tr>
//         <td>{mob.mob_name}</td>
//         <td> {mob.zone}</td>
//         <td>{mob.era}</td>
//         <td>{mob.xp}</td>
//         <td onClick={() => this.handleAddClick(mob.id)}>&#x2705;</td>
//         <td onClick={() => this.handleRemoveClick(mob.id)}>&#10060;</td>
//       </tr>
//     ))}
//   </table>
// </div>
// <div className="panel">
//   <h1>Mysanthropes Xroute</h1>
//   <table>
//     <tr>
//       <th>Name</th>
//       <th>Zone</th>
//       <th>Era</th>
//       <th>Xp</th>
//     </tr>
//     {this.props.route.map(mob => (
//       <tr>
//         <td>{mob.mob_name}</td>
//         <td> {mob.zone}</td>
//         <td>{mob.era}</td>
//         <td>{mob.xp}</td>
//         <td onClick={() => this.handleAddClick(mob.id)}>&#x2705;</td>
//         <td onClick={() => this.handleRemoveClick(mob.id)}>&#10060;</td>
//       </tr>
//     ))}
//   </table>
// </div>
// </React.Fragment>