// React component
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand" style={{width:"90%"}}><p style={{textAlign:"center"}}>GEN AI</p></div>
      <div className="profile" style={{width:"10%"}}>
        <img src="./profile.jpeg" alt="Profile" />
        <span>Dhoni</span>
      </div>
    </nav>
  );
};

export default NavBar;


