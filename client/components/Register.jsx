import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'
import {loginError} from '../actions/login'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      first_name: '',
      last_name: '',
      password: '',
      confirm_password: ''
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
    e.target.reset()
    let {user_name, password, confirm_password, first_name, last_name} = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    this.props.dispatch(registerUserRequest(this.state))
  }
  render() {
    const {auth} = this.props
    return (
      <form className="" onSubmit={this.submit}>
        <h1 className="">Register</h1>
        <hr />
        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
        <label >Username
          <input onChange={this.updateDetails}/>
        </label>
        <div className="">
          <label className="">First Name
            <input required className="" placeholder="First Name" type="text" name="first_name" onChange={this.updateDetails}/>
          </label>
          <label className="">Last Name
            <input required className="" placeholder="Last Name" type="text" name="last_name" onChange={this.updateDetails}/>
          </label>
        </div>
        <br />
        <div className="columns">
          <label className="">Password
            <input required className="" placeholder="Password" type="password" name="password" onChange={this.updateDetails}/>
          </label>
          <label className="">Confirm Password
            <input required className="" placeholder="Confirm Password" type="password" name="confirm_password" onChange={this.updateDetails}/>
          </label>
        </div>
        <input className="" value="Register" type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)
