import "../App.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <>
            <div className="links">
                <img className = "logo" src="/goat/Color logo - no background (3).png" alt="logo" />
                <Link className = "link" to="/">Home</Link>
                <Link className = "link" to="/about">About</Link>
                <Link className = "link" to="/services">Services</Link>
                <Link className = "link" to="/contact">Contact</Link>
                <Link className = "link" to="/login">Login</Link>
                {/* <button className = "btn">Login</button> */}
            </div>
            </>
            
        </nav>
    )
}

export default Navbar;