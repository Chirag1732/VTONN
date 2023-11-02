import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <>
      <nav class="nav">
        <input type="checkbox" id="nav-check"></input>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <ul class="nav-list">
          <li>
            <Link style={{ textDecoration: "none" }} to="/home">
              <p className="text">Home</p>
            </Link>
            {/* <Link to="/home"> Home </Link> */}
            {/* <a href="/home">Home</a> */}
          </li>
          <li>
            {/* <Link to="/about"> About </Link> */}
            {/* <a href="/about">About</a> */}
          </li>
          <li>
            {/* <Link to="/Team"> Team Members </Link> */}
            {/* <a href="/team">Team Members</a> */}
          </li>
        </ul>
        <div class="nav-header">
          <div class="nav-title">
            <Link style={{ textDecoration: "none" }} to="/vton">
              <p className="text">VTON</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
