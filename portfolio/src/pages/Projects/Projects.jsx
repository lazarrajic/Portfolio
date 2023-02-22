import React, { useState } from "react";
import "./Projects.css";
import project1 from "../../images/project1.png";
import { FaGithubSquare } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="container">
      <h1 className="title">Projects</h1>
      <div className="grid">
        <div className="box">
          <a href="https://salesmagnet.co.nz/" target="_blank">
            <img src={project1} alt="project-1" />
          </a>
        </div>
        <div className="box">
          <img />
          <h2>Project2</h2>
        </div>
        <div className="box">
          <img />
          <h2>Project3</h2>
        </div>
        <div className="box">
          <a
            href="https://github.com/lazarrajic?tab=repositories"
            target="_blank"
          >
            <FaGithubSquare style={{ fontSize: "75px", color: "white" }} />
          </a>
        </div>
        {/* <div className="box">
          <img />
          <h2>Project5</h2>
        </div>
        <div className="box">
          <img />
          <h2>Project6</h2>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
