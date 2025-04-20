import "./portfolio.css";

import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project3.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/project2.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Curd Website with React.js and Spring boot",
      img: IMG1,
      description:
        "Developed and deployed a full-stack CRUD application with React and Spring Boot .",
      technologies: "Html | Bootstrap | Spring | React Js | Mysql " ,
      link: "https://ltcurdoperation.netlify.app/",
      github: "https://github.com/lalitkrchoudhary/Backend___Spring",
    },
    {
      id: 2,
      title: "Email Generator",
      img: IMG2,
      description:
        "AI Email Generator Based on the Email Reply",
      technologies: "HTML | MaterialUI | JavaScript | Spring | Vite ",
      link: "https://automaticemailgenerator.netlify.app/",
      github: "https://github.com/lalitkrchoudhary/Email_Generator_Backend___Spring",
    },
    {
      id: 3,
      title: "AI Bot",
      img: IMG4,
      description: "AI Bot application where you can ask anything by using gemini api",
      technologies: "HTML | CSS | JavaScript | Spring | Vite ",
      link: "",
      github: "https://github.com/lalitkrchoudhary/Chat_Bot_Application_Backend___Spring",
      
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://alpha-agency-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    },
    {
      id: 5,
      title: "Jokes Project with Typescript",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Styled-components | Typescript",
      link: "https://jokes-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Joke-App",
    },
    {
      id: 6,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://fs-poster-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
