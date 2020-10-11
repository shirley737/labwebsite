import React from "react";
import data from "./data";
import "./Project.scss";
import SingleProject from "./SingleProject";

function Project() {
  return (
    <div className="project">
      <div className="project-title"> Current Projects</div>
      <div className="project-card">
        {data.map((item) => {
          return (
            <SingleProject
              title={item.title}
              intro={item.intro}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Project;
