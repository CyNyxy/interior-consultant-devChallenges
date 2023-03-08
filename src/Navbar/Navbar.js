import React, { useRef, useState, useEffect } from 'react';
import "./navbar.css";

const Menu = () => {

  return (
    <div className="navbar-container">
      <div className="nav-item">
        <p className="nav"><a href="#home">Home</a></p>
      </div>
      <div className="nav-item">
        <p className="nav"><a href="#home">Collection</a></p>
      </div>
      <div className="nav-item">
        <p className="nav"><a href="#home">About</a></p>
      </div>
      <div className="nav-item">
        <p className="nav"><a href="#home">Contact</a></p>
      </div>
    </div>
    );
  };

const Navbar = () => {
  const ref = useRef();
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (toggleMenu && ref.current && !ref.current.contains(e.target)) {
        setToggleMenu(false);
      }
    };
    
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () =>  { 
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [toggleMenu]);

    return (
      <>
      <div className="navbar-links_container">
        <Menu />
      </div>
      <div className="navbar-menu">
    {toggleMenu ? (
      <span className="material-icons" onClick={() => setToggleMenu(false)}>
        close
      </span>
    ) : (
      <span className="material-icons" onClick={() => setToggleMenu(true)}>
        menu
      </span>
    )}
    {toggleMenu && (
        <div className="navbar-menu_container">
      <span className="material-icons close" onClick={() => setToggleMenu(false)}>
        close
      </span>
          <div className="navbar-menu_container-links" ref={ref}>
            <Menu />
          </div>
        </div>
    )}
      </div>
      </>
  )
}

export default Navbar;