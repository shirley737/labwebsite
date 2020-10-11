import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="header">
      <div className="left-title">Karcher's Lab</div>
      <div className="right-nav">
        <ul>
          <li>
            <a href={props.footer}>Contact</a>
          </li>
          <li>
            <a href={props.project}>Projects</a>
          </li>
          <li>
            <a href={props.about}>About</a>
          </li>
          <li>
            <a href={props.header}>Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
