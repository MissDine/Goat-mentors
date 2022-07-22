import "../App.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <h1>Enid's Blog</h1> */}
            <div className="links">
                <img src="/goat/Color logo - no background (3).png" alt="logo" />
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar;