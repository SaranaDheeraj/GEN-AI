// React component
import React from 'react';
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand" style={{width:"100%"}}><p style={{textAlign:"center"}}>GEN AI</p></div>
      <div className="profile" style={{width:"20%"}}>
        <span style={{margin:"10px"}}>AKHIL</span>
        <CgProfile style={{fontSize:"30px"}}/>
      </div>
    </nav>
  );
};

export default NavBar;


