  
import React from 'react'
import {connect} from 'react-redux'

function Footer (props) {
  return <div className="footer">
    <p>this site and its content, and its creators are not associated, nor affiliated, with the LegendMUD immortal staff. Additionally, since this is an open-access project, all of the information posted and listed may be incorrect.</p>
  </div>
}

export default connect()(Footer)