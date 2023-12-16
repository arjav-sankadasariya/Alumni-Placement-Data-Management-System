import React from 'react';
import logo from '../../images/logo.png';
import "./styles.moduel.css";

const NavBar = () => {
  return (
    <>
    <div className="navbar">
      <img src={logo} alt="APDMS NU Logo" className="navbar-logo" />
      <div className="navbar-title">Alumini Placement Data Management System</div>
    </div>
    </>
  );
};

export default NavBar;
