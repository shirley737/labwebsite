import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="header">
      <div className="left-title">Karcher's Lab</div>
      <div className="right-nav">
        <ul>
          <li
            onClick={() => {
              window.scrollTo({ top: 1500, behavior: "smooth" });
            }}
          >
            <a>Contact</a>
          </li>
          <li
            onClick={() => {
              window.scrollTo({ top: 900, behavior: "smooth" });
            }}
          >
            <a>Projects</a>
          </li>
          <li
            onClick={() => {
              window.scrollTo({ top: 600, behavior: "smooth" });
            }}
          >
            <a>About</a>
          </li>
          <li
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <a>Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
