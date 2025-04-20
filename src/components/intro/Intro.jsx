import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Profile.jpeg'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Lalit Choudhary" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Internship</h5>
              <small>4 month</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
          "4+ months experienced Backend Java Developer with hands-on experience
           in designing and developing robust RESTful APIs and scalable backend 
           systems using Spring Boot and Java. Skilled in managing relational databases like MySQL 
           and PostgreSQL, and adept at integrating backend services with frontend interfaces.
            Proficient in building CRUD applications and handling end-to-end backend development workflows.
             Demonstrated ability to troubleshoot issues, optimize application performance, and contribute to 
             real-world projects like Telecom Salesforce Management and Customer Management Systems. 
             Passionate about writing clean, efficient, and maintainable code with a focus on 
             backend reliability and performance." — Lalit Kr Choudhary
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
