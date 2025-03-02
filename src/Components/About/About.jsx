import React from "react";
import "./About.css";
import kathirImage from "../../images/kathir.jpg";

export const About = () => {
  return (
    <div id="home">
      <div className="about">
        <div className="text">
          <h1 className="name">HI IT'S <span>KATHIR</span></h1>
          <h1 className="job">VIDEO EDITOR AND CONTENT CREATOR</h1>
          <br></br>
          <p className="para">
          I’m Kathir, a professional video editor with three years of experience specializing in post-production. With a keen eye for detail and a passion for storytelling, I collaborate closely with clients to transform raw footage into visually compelling content that aligns with their vision. My expertise spans various styles and formats, including YouTube videos, short films, music videos, podcasts, promotional content, corporate advertisements, and sports events. I ensure that each project is crafted to effectively engage and impact audiences.
          </p>
        </div>
        <div className="image">
          <img src={kathirImage} alt="Kathir" />
        </div>
      </div>
    </div>
  );
};
