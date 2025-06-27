import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Header.css';
function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
};
  // Function to close drawer when a link is clicked
  const closeDrawer = () => {
    setIsDrawerOpen(false);
};
return(
    <header className="header" >
        <div className="clg-name"><b>Vivekanand College </b></div> 
        <nav className="menubar-dekstop">    
                    <Link to="/home" className="link">
                    Home
                    </Link>{" "}
                    <Link to="/about" className="link">
                    About
                    </Link>{" "}
                    <Link to="/courses" className="link">
                    Courses
                    </Link>{" "}
                    <Link to="/contact" className="link">
                    Contact
                    </Link>{" "}
                    <Link to="/admission" className="link">
                        <button className="link my-button">Apply Now!</button>
                    </Link> 
        </nav>
        {/* Mobile Hamburger Button */}
        <button className="hamburger-menu" onClick={toggleDrawer}>
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
        </button>
        {/* Mobile Drawer Navigation */}
        <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
                <button className="close-drawer-btn" onClick={toggleDrawer}>
                  ✕
                </button>
                <Link to="/" className="link" onClick={closeDrawer}>
                  Home
                </Link>
                <Link to="/about" className="link" onClick={closeDrawer}>
                  About
                </Link>
                <Link to="/courses" className="link" onClick={closeDrawer}>
                  Courses
                </Link>
                <Link to="/contact" className="link" onClick={closeDrawer}>
                  Contact
                </Link>
                {" "}
                <Link
                  to="/admissions"
                  className="link my-button"
                  onClick={closeDrawer}
                >
                  Apply Now!
                </Link>
        </nav>
        {/* Overlay when drawer is open */}
        {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
        )}
    </header>
    )
}
export default Header;