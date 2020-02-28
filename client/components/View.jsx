import React from "react";
import { connect } from "react-redux";
import { fetchmobs, addtoRoute, fetchRouteMobs } from "../actions";

class Select extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.match.params.era);
    let obj = {
      userid: 1,
      era: this.props.match.params.era
    };
    this.props.dispatch(fetchmobs(obj));
    this.props.dispatch(fetchRouteMobs(obj));
  }
  handleAddClick = id => {
    const addmob = {
      mobid: id,
      userid: 1,
      era: this.props.match.params.era
    };
    this.props.dispatch(addtoRoute(addmob));
  };
  handleRemoveClick = id => {
    console.log(id);
  };

  render() {
    return (
      <React.Fragment>
        <div className="panel">
          <h1>Mysanthropes Xroute</h1>
          <table>
            <tr>
              <th>Name</th>
              <th>Zone</th>
              <th>Era</th>
              <th>Xp</th>
            </tr>
            {this.props.route.map(mob => (
              <tr>
                <td>{mob.mob_name}</td>
                <td> {mob.zone}</td>
                <td>{mob.era}</td>
                <td>{mob.xp}</td>
                <td onClick={() => this.handleAddClick(mob.id)}>&#x2705;</td>
                <td onClick={() => this.handleRemoveClick(mob.id)}>&#10060;</td>
              </tr>
            ))}
          </table>
        </div>
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
export default connect(mapStateToProps)(Select);

