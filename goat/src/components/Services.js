import React from 'react'
import web from "../web-design.jpg"
import mark from "../marketing.jpg"
import des from "../ui_ux.png"
import gra from "../graph.jpg"

function Services() {
  return (
    <div>
        <h1>Our Service</h1>
        <img className='web' src={web} alt="web design"/>
        <h3>Web Design</h3>
        <img className='Dig' src={mark} alt="marketing" />
        <h3>Digital marketing</h3>
        <img className='Des' src={des} alt="ui-ux design" />
        <h3>Ui-Ux Design</h3>
        <img className='Gra' src={gra} alt="Graphical design" />
        <h3>Graphic Design</h3>
    </div>
  )
}

export default Services