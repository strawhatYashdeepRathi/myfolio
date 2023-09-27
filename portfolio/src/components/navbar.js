import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [colored, setcolored] = useState(false);

  let openMenuClicked = () => {
    setOpenMenu(!openMenu);
  };

  const changecolor = () =>{
    if(window.scrollY >= 1){
      setcolored(true);
    }
    else{
      setcolored(false)
    }
  }

  window.addEventListener("scroll", changecolor)

  return (
    <div className={!colored ? "port-header" : "port-header port-header-bg"}>
      <div className="port-head-text">
        <div>
          <Link to="/">
            <h1>PORTFOLIO.</h1>
          </Link>
        </div>
        <div className="port-hamburger" onClick={openMenuClicked}>
          {openMenu ? (
            <FaTimes size={20} style={{color: "white"}} />
          ) : (
            <GiHamburgerMenu size={20} color="white" />
          )}
        </div>
      </div>
      <div className="port-list-container">
        <ul className={`port-nav-list-container ${openMenu && 'port-closed-menu'}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
