import React from "react";

/**
 * I'm trying to fit all project data into this file, so I can just edit this
 * whenever I want to add a new project.
 */

export const sections = ["DEVELOPMENT", "DESIGN"];

const imageStyle = {
  borderRadius: "0px",
  width: "150px"
};

export const projects = [
  {
    section: "DEVELOPMENT",
    title: "Post- Magazine Redesign",
    context: "Professional",
    thumbnail: "post.png",
    description: (
      <div>
        <span style={{ fontWeight: "bold" }}>Context</span>
        <p>
          I was approached to develop the 2019 redesign of{" "}
          <a
            href="https://www.post.browndailyherald.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Post-
          </a>
          , a weekly culture magazine from Brown University. A designer from
          RISD provided a minimal, editorial-style redesign mockup to work from,
          and I was happy to work with both them and the Post- editorial team to
          complete the project.
        </p>
        <span style={{ fontWeight: "bold" }}>Development Process</span>
        <p>
          Most of the development involved creating a custom WordPress theme,
          which had the benefit of making content migration painless. This was
          done using PHP and a mobile-first CSS styling workflow.
        </p>
        <br></br>
        <br></br>
      </div>
    )
  },
  {
    section: "DEVELOPMENT",
    title: "TV Show Finder",
    context: "School Project",
    thumbnail: "tvfinder.PNG",
    description: (
      <div>
        <span style={{ fontWeight: "bold" }}>Context</span>
        <p>
          The goal of this assignment was to develop a React website that
          updates based on some user input.
        </p>
        <span style={{ fontWeight: "bold" }}>Development Process</span>
        <p>
          I started with the idea of filtering TV show titles in mind, and then
          began developing the site to do so. In this case, I chose a small set
          of titles to use as a sample.
        </p>
        <br></br>
        <br></br>
      </div>
    )
  },
  {
    section: "DESIGN",
    title: "Mylk Guys Mock Redesign",
    context: "School Project",
    thumbnail: "mylk.png",
    description: (
      <div>
        <span style={{ fontWeight: "bold" }}>Context</span>
        <p>
          The point of this assignment was to design an interface for a startup.
          A team of three other Brown students and me chose <i>Mylk Guys</i>, a
          company that ships vegan foods to customers using a e-commerce
          storefront interface. We aimed to design a mobile app for the company,
          who currently only operates a web interface.
        </p>
        <span style={{ fontWeight: "bold" }}>The Design</span>
        <p>
          The end product for this project was an interactive mockup created
          using Figma. The goal of our process was to condense the core
          functionality of the <i>Mylk Guys</i> website into a mobile frame. We
          laid out the design with considerations for simplicity and usability.
        </p>
        <br></br>
        <br></br>
      </div>
    )
  },
  {
    section: "DESIGN",
    title: "CS1300 Website Redesign",
    context: "School Project",
    thumbnail: "uiux.PNG",
    description: (
      <div>
        <span style={{ fontWeight: "bold" }}>Context</span>
        <p>
          This assignment was to redesign some interface by improving various
          criteria like usabilty and affordances. I chose to redesign{" "}
          <a
            href="https://cs.brown.edu/courses/csci1300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            the course website
          </a>
          , since I experienced some of its shortcomings firsthand. My redesign
          focused mostly on layout, and used the same aesthetic elements as the
          original site.
        </p>
        <span style={{ fontWeight: "bold" }}>The Design</span>
        <p>
          My major concern with the existing site's design was how difficult it
          was to find specific information due to all content being located on
          the same page.
        </p>
        <br></br>
        <br></br>
      </div>
    )
  }
];
