import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {loginUser, loginError} from '../actions/login'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(loginError(''))
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    let {user_name, password} = this.state
    this.props.dispatch(loginUser({user_name, password}))
  }
  render() {
    const {auth} = this.props
    return (
      <div className="logincontainer panel vertical-center">
      <form className="" onSubmit={this.submit}>
          <h1 className="">Login</h1>
          <br />
        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
        <label className="">Username &nbsp;&nbsp;
          <input required className="" placeholder="User Name" type="text" name="user_name" onChange={this.updateDetails}/>
        </label><br />
        <label className="">Password &nbsp;&nbsp;
          <input required className="" placeholder="Password" type="password" name="password" onChange={this.updateDetails}/>
        </label><br /><br/>
        <input className="loginbutton" value='Login' type="submit" /><br />
        <Link className="link" to="/register" >
              Register?
            </Link>
        </form>
        
        </div>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)
