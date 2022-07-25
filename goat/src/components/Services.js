import React from 'react'
import web from "../images/web-design.jpg"
import mark from "../images/marketing.jpg"
import des from "../images/ui_ux.png"
import gra from "../images/graph.jpg"
// import gra from "../graph.jpg"

function Services() {
  return (
    <div className='serv' id='services'>
    <h1>Our Service</h1>
    <div className="column">
    <div className="row">
      <img className='web' src={web} alt="web design"/>
      <h3>Web Design</h3>
    </div>
    <div className="row">
      <img className='Dig' src={mark} alt="marketing" />
        <h3>Digital marketing</h3>
    </div>
    <div className="row">
      <img className='Des' src={des} alt="ui-ux design" />
        <h3>Ui-Ux Design</h3>
    </div>
    <div className="row">
      <img className='Gra' src={gra} alt="Graphical design" />
        <h3>Graphic Design</h3>
    </div>
    </div>
    </div>
  )
}

export default Services