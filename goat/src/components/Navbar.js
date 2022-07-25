import "../App.css"
import {Link} from "react-router-dom"
import image from "../images/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <>
            <div className="links">
                <img className = "logo" src={image} alt="logo" />
                <Link className = "link" to="/">Home</Link>
                <a className="link" href="#about">About</a>
                <a className="link" href="#services">Services</a>
                <a className="link" href="#team">Team</a>
                <a className="link" href="#contact">Contact</a>
            </div>
            </>
            
        </nav>
    )
}

export default Navbar;