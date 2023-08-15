import React from 'react'
import './Main.css'
import { NavLink } from "react-router-dom";
function Navebuttom() {
  return (
    <ul className="main">
      <NavLink className="Profile" ActiveClassName='active'  to="/fihry-profile/.">
        Profile
      </NavLink>
      <NavLink className="Profile" to="/fihry-profile/Skills">
        Skills
      </NavLink>
      <NavLink className="Profile"  to="/fihry-profile/Projects">
        Projects
      </NavLink>
    </ul>
  );
}

export default Navebuttom