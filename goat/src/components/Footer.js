import React from 'react'
import face from "../images/icons8-facebook-48.png"
import twi from "../images/icons8-twitter-48.png"
import linke from "../images/icons8-linkedin-48.png"
// import logo from "../images/logo.png"

function Footer() {
  return (
    <div className='footer'>
      {/* <img src={logo} alt="logo" /> */}
      <div className="soc">
        <img src={face} alt="facebook" />
        <img src={linke} alt="linkedin" />
        <img src={twi} alt="twitter" />
      </div>
    </div>
  )
}

export default Footer