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
                <Link className = "link" to="/about">About</Link>
                <Link className = "link" to="/services">Services</Link>
                <Link className = "link" to="/team">Team</Link>
                <Link className = "link" to="/contact">Contact</Link>
            </div>
            </>
            
        </nav>
    )
}

export default Navbar;