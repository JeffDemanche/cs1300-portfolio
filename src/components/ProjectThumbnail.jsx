import React from "react";
import "./ProjectThumbnail.css";

/**
 * @param {*} project Comes from projects.js.
 */
export const ProjectThumbnail = props => {
  const project = props.project;
  const color = props.color;

  // True if the user clicks on the thumb for more info.
  const enlarged = props.enlarged || false;

  const backgroundImg = `url(${require("../img/projects/" +
    project.thumbnail)})`;

  const topOverlay = project.title;
  const bottomOverlay = project.context;

  const thumbnailBackdropColorClassnames = enlarged
    ? "thumbnail-backdrop-color thumbnail-backdrop-color-enlarged"
    : "thumbnail-backdrop-color";
  const thumbnailContainerClassnames = enlarged
    ? "thumbnail-container thumbnail-container-enlarged"
    : "thumbnail-container";
  const topOverlayClassnames = enlarged
    ? "top-overlay top-overlay-enlarged"
    : "top-overlay";
  const bottomOverlayClassnames = enlarged
    ? "bottom-overlay bottom-overlay-enlarged"
    : "bottom-overlay";

  const desciptionElement = enlarged ? (
    <div className="description">{project.description}</div>
  ) : (
    ""
  );

  return (
    <div
      className={thumbnailBackdropColorClassnames}
      style={{ backgroundColor: color }}
      onClick={e => {
        props.setEnlargedProject(project.title);
        e.stopPropagation();
      }}
    >
      <div
        className="thumbnail-backdrop-black"
        style={{
          backgroundColor: enlarged ? `${color}` : "black",
          borderColor: color
        }}
      >
        <div
          className={thumbnailContainerClassnames}
          style={{ backgroundImage: backgroundImg }}
        ></div>
        <div className={topOverlayClassnames} style={{ color: color }}>
          {topOverlay}
        </div>
        {desciptionElement}
        <div className={bottomOverlayClassnames}>{bottomOverlay}</div>
      </div>
    </div>
  );
};
