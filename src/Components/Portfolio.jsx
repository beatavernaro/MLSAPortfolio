/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Por onde e como EU estudo C#",
    description:
      "An article on 'Where and How do I study C#' for those who are starting in the journey of learning .NET Framework.",
    url: "https://dev.to/monokai_dev/por-onde-e-como-eu-estudo-c-cpp",
  },
  {
    title: "Tipos de dados primitivos com Java",
    description:
      "A study-based article for a bootcamp on primitive data types in Java. I also posted the same article, but in C#, for another platform.",
    url: "https://dev.to/monokai_dev/tipos-de-dados-primitivos-com-java-3o4g",
  },
  {
    title: "RetroFlix",
    description:
      "Full Stack project simulating a movie rental service using .NET, Angular and MySQL",
    url: "https://github.com/beatavernaro/Retroflix",
  },
  {
    title: "Memoteca",
    description:
      "Small CRUD project using Angular 14. The user can add thoughts and memos to see it later. The main goal was to study about Github Actions to deploy the website through a script",
    url: "https://github.com/beatavernaro/Memoteca",
  },
  {
    title: "HomeLib",
    description:
      "Creation and consumption of an API for registering a personal library. The user can register a book using the ISBN code and consult its data.",
    url: "https://github.com/beatavernaro/HomeLib",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
