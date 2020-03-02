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
      <div className="register" >
        <div className="register-panel vertical-center">
      <form className="" onSubmit={this.submit}>
        <h1 className="">Register</h1>
        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
        <label >Username &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input onChange={this.updateDetails}/>
        </label>
        <br />

          <label className="">Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input required className="" placeholder="Password" type="password" name="password" onChange={this.updateDetails}/>
              </label>
              <br />
          <label className="">Confirm Password &nbsp;&nbsp;
            <input required className="" placeholder="Confirm Password" type="password" name="confirm_password" onChange={this.updateDetails}/>
          </label>
            <br />
            <br />
        <input className="" value="Register" type="submit" />
          </form>

          </div>
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)
