import React from "react";
import { connect } from "react-redux";
import { fetchmobs, addtoRoute} from "../actions";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(fetchmobs());
    console.log(Array.isArray(this.props.mobs));
  }
  handleAddClick = id => {
    const addmob = {
      mobid: id,
      userid: 1
    }
    this.props.dispatch(addtoRoute(addmob))
  };
  handleRemoveClick = id => {
    console.log(id)
      };

  render() {
    return (
      <div className="panel">
        <h1>Legendmud Xp Routes</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Zone</th>
            <th>Era</th>
            <th>Xp</th>
          </tr>
          {this.props.mobs.map(mob => (
            <tr>
              <td>{mob.mob_name}</td>
              <td> {mob.zone}</td>
              <td>{mob.era}</td>
              <td>{mob.xp}</td>
              <td onClick={()=>this.handleAddClick(mob.id)}>&#x2705;</td>
              <td onClick={()=>this.handleRemoveClick(mob.id)}>&#10060;</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mobs: state.mobs
  };
}
export default connect(mapStateToProps)(Main);
