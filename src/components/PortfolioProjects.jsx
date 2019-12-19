import React, {useState} from "react";
import "./PortfolioProjects.css";

import { ProjectThumbnail } from "./ProjectThumbnail";

import { sections, projects } from "../projects.jsx";

export const PortfolioProjects = props => {
  const colors = ["orange", "red", "purple"];


  let thumbnailsMarkup = [];
  let colorIndex = 0;
  let key = 0;

  sections.forEach(section => {
    thumbnailsMarkup.push(
      <h2 style={{ color: colors[colorIndex] }} key={key}>
        {section}
      </h2>
    );
    key++;

    let sectionThumbs = [];
    let sectionThumbsIndex = 0;

    const sectionProjects = projects.filter(p => p.section === section);
    sectionProjects.forEach(project => {
      const enlarged = project.title === props.enlargedProject;

      sectionThumbs.push(
        <ProjectThumbnail
          key={sectionThumbsIndex}
          project={project}
          color={colors[colorIndex]}
          enlarged={enlarged}
          setEnlargedProject={props.setEnlargedProject}
        ></ProjectThumbnail>
      );
      sectionThumbsIndex++;
    });
    thumbnailsMarkup.push(
      <div key={key} className="section-thumbnails-container">{sectionThumbs}</div>
    );
    key++;
    colorIndex++;
  });

  return (
    <div className="projects-container">
      <h1>What do I do?</h1>
      {thumbnailsMarkup}
    </div>
  );
};
