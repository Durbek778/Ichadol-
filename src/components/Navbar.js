import React, { useState } from "react";
import Logo from "../assets/stm_logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">집</Link>
          <Link to="/menu"> 메뉴 </Link>
          <Link to="/about"> 에 대한 </Link>
          <Link to="/contact"> 연락하다</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">집 </Link>
        <Link to="/menu"> 메뉴 </Link>
        <Link to="/about"> 에 대한 </Link>
        <Link to="/contact"> 연락하다 </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
