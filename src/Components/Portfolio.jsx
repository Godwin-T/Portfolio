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
    title: "Customer Retention System",
    description:
      "Built an AI system that leverages machine learning to predict customer churn and automatically sends personalized emails to retain at-risk customers. ",
    url: "https://github.com/Godwin-T/Customer-retention",
  },
  {
    title: "Employee Attrition Prediction",
    description:
      "Contributed to building a sytem to predict predict employee attrition, enabling proactive measures to retain talent and reduce turnover costs.",
    url: "https://github.com/Godwin-T/Attrition-Prediction",
  },
  {
    title: "Weather Forecast System",
    description:
      "Developed a weather forecast project using machine learning algorithms and deployed it using flask api. Demonstrates my expertise in data analysis and model deployment.",
    url: "https://github.com/Godwin-T/Weather-Forecast",
  },
  {
    title: "Kitchenware Classifier",
    description:
      "Created a kitchen utensils image classification system using Convolutional Neural Networks (CNNs) and deployed it with Docker and Kubernetes (K8s). Showcases my skills in machine learning, containerization, and scalable deployment.",
    url: "https://github.com/Godwin-T/Kitchen-Ware-Project",
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
