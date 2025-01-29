import React from "react";
import "./Experience.css";
import timelineElements from "../../Components/Experience/timelineElement"; // Import timeline data

import kat from "../../images/kat.jpeg";
import stadium from "../../images/stadium.jpeg";
import WorkIcon from "../../images/work.svg";

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
                        style={{ width: "auto", height: "80%" ,marginLeft:"7px",marginTop:"8px"}}
                      />
                    }
                  >
                    <div className="descExp">
                    <h3 className="vertical-timeline-element-title">
                      {element.title}
                    </h3>
                  
                    <p id="description">{element.description}</p>
                    {/* {showButton && (
                      <a className="button workButton" href="/">
                        {element.buttonText}
                      </a>
                    )} */}
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
