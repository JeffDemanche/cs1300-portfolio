import React, { useState } from "react";
import "./Home.css";

import { PersonalInfo } from "../components/PersonalInfo";
import { PortfolioProjects } from "../components/PortfolioProjects";

const HomeView = () => {
  const [enlargedProject, setEnlargedProject] = useState(null);

  return (
    <div
      className="home-view-background"
      style={{
        backgroundImage: `url(${require("../img/prov-background.jpg")})`
      }}
      onClick={e => {
        setEnlargedProject(null);
      }}
    >
      <div className="home-content">
        <PersonalInfo></PersonalInfo>
        <PortfolioProjects
          enlargedProject={enlargedProject}
          setEnlargedProject={setEnlargedProject}
        ></PortfolioProjects>
      </div>
    </div>
  );
};

export { HomeView };
