import React from 'react'
import web from "../images/web-design.jpg"
import mark from "../images/marketing.jpg"
import des from "../images/ui_ux.png"
import gra from "../images/graph.jpg"
// import gra from "../graph.jpg"

function Services() {
  return (
    <div>
    <h1>Our Service</h1>
    <div className="serv">
        <img className='web' src={web} alt="web design"/>
        <h3>Web Design</h3>
        <img className='Dig' src={mark} alt="marketing" />
        <h3>Digital marketing</h3>
        <img className='Des' src={des} alt="ui-ux design" />
        <h3>Ui-Ux Design</h3>
        <img className='Gra' src={gra} alt="Graphical design" />
        <h3>Graphic Design</h3>
    </div>
    </div>
  )
}

export default Services