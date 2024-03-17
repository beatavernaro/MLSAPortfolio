import React from "react";

import image from "../images/desk-notebook.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const articleList = [
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
    title: "Tipos de dados primitivos com Java",
    description:
      "A study-based article for a bootcamp on primitive data types in Java. I also posted the same article, but in C#, for another platform.",
    url: "https://dev.to/monokai_dev/tipos-de-dados-primitivos-com-java-3o4g",
  },
];

const Article = () => {
  return (
    <section className="padding" id="article">
      <h2 style={{ textAlign: "center" }}>Articles</h2>
      <div style={{ display: "flex", flexDirection: "row-reverse", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {articleList.map((article) => (
            <div className="box" key={article.title}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{article.title}</h3>
                <p className="small">{article.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;
