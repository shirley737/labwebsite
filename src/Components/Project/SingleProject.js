import React from "react";
import data from "./data";
import "./Project.scss";

function SingleProject(props) {
  return (
    <div className="singleproject">
      <div className="singleproject-title">{props.title}</div>

      <img className="singleproject-image" src={props.image} />
      <div className="singleproject-description">{props.intro}</div>
      <div
        className="singleproject-button"
        onClick={() => {
          window.open(props.link);
        }}
      >
        See More
      </div>
    </div>
  );
}

export default SingleProject;
