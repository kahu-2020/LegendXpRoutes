import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showBurger: true
    }
    this.toggleBurger = this.toggleBurger.bind(this)
  }
  toggleBurger() {
    this.setState({showBurger: !this.state.showBurger})
  }
  render() {
    const {auth, logout} = this.props
    const {showBurger} = this.state
    return <nav className="navbar">
      <div className="navcontainer">
      <h1 className="">Legendmud XP Routes</h1>
        </div>
    </nav>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
