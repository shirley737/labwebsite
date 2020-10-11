import React from "react";
import "./WebsiteFooter.scss";
import logo from "./logo.png";

function Footer() {
  return (
    <div className="websitefooter">
      <div className="left">
        <img className="left-image" src={logo}></img>
        <div className="left-content">
          © 2020 REGENTS OF THE UNIVERSITY OF CALIFORNIA
        </div>
      </div>
      <div className="right">
        <div className="right-title"> Contant Infomation:</div>
        <div className="right-content"> Email: abc@ucsd.edu</div>
        <div className="right-content"> Phone Number: 123-456-7890</div>
        <div className="right-content"> Address: put address here</div>
      </div>
    </div>
  );
}

export default Footer;
