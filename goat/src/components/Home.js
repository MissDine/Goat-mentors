import React from 'react'
import About from "./About"
import Services from "./Services"
import Header from "./Header"
import Contact from "./Contact"
import Footer from "./Footer"
 function Home() {
  return (
    <div>
        <Header/>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}
export default Home
