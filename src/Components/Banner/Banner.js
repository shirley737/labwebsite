import React from "react";
import "./Banner.scss";
import BannerImage from "./banner.jpg";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-title">We prepare for the future</div>
        <div
          className="banner-button"
          onClick={() => {
            window.scrollTo({ top: 900, behavior: "smooth" });
          }}
        >
          View Projects
        </div>
      </div>
    </div>
  );
}

export default Banner;
