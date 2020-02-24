import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Main from './main'

export function App({auth}) {
  return (
    <Router>
      <div className="">
            <Link to='/' className="">
              <h1 className=""></h1>
            </Link>
            <Nav />
          </div>

        {/* <div className=''>
          {!auth.isAuthenticated &&
            <Route exact path="/" component={Login} />
          }
          {auth.isAuthenticated && <Main />}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div> */}
    </Router>
  )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
