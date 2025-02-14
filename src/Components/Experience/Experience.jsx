import React from "react";
import "./Experience.css";
import timelineElements from "../../Components/Experience/timelineElement"; // Import timeline data

import kat from "../../images/kat.jpeg";
import stadium from "../../images/stadium.jpeg";
import WorkIcon from "../../images/work.svg";
import youtube from "../../images/youtube.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
  let workIconStyles = { background: "#06D6A0" };

  return (
    <div id="experience">
      <h1 className="exp">Experience</h1>
    <div className="experience-page">
      {/* Container for images and timeline */}
      <div className="experience-content">
        {/* Left side: Images */}
        <div className="image-section">
          <img src={kat} alt="Person at laptop" className="timeline-image" />
          <img src={stadium} alt="Event venue" className="timeline-image" />
        </div>

        {/* Right side: Timeline */}
        <div className="timeline-section">
          <VerticalTimeline>
          {timelineElements
  .filter((element) => element.icon === "work")
  .map((element) => {
    let showButton =
      element.buttonText !== undefined &&
      element.buttonText !== null &&
      element.buttonText !== "";

    return (
      <VerticalTimelineElement
        key={element.id}
        date={element.date}
        dateClassName="date"
        iconStyle={workIconStyles}
        icon={
          <img
            src={WorkIcon}
            alt="Work Icon"
            style={{
              width: "auto",
              height: "80%",
              marginLeft: "7px",
              marginTop: "8px",
            }}
          />
        }
      >
        <div className="descExp">
          <h3 className="vertical-timeline-element-title">{element.title}</h3>
          <p id="description">{element.description}</p>

          {/* Show YouTube Logo only for the Content Creator section */}
          {element.title === "Content Creator" && (
            <a 
              href={element.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-link"
              style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
            >
              <img 
                src={youtube} 
                alt="YouTube" 
                className="ytube"
                style={{ width: "30px", height: "30px", marginRight: "8px" }}
              />
              <span style={{ color: "blue" }}>{element.buttonText}</span>
            </a>
          )}

          {/* Show Button for other sections */}
          {showButton && element.title !== "Content Creator" && (
            <a
              href={element.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              style={{
                display: "inline-block",
                marginTop: "10px",
                color: "blue",
                textDecoration: "none",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              {element.buttonText}
            </a>
          )}
        </div>
      </VerticalTimelineElement>
    );
  })}

          </VerticalTimeline>
        </div>
      </div>
    </div>
    </div>
  );
};
