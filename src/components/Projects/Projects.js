import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import suicide from "../../Assets/Projects/p1.png";
import emotion from "../../Assets/Projects/p2.png";
import editor from "../../Assets/Projects/p3.png";
import chatify from "../../Assets/Projects/academia.png";
import leaf from "../../Assets/Projects/p4.png";
import bitsOfCode from "../../Assets/Projects/p5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ACADEMIA"
              description="Academia Online is an innovative educational platform designed to provide high-quality learning experiences accessible to anyone with an internet connection. Offering a diverse array of courses, Academia Online caters to learners of all ages and backgrounds, from students seeking supplemental education to professionals looking to enhance their skills or pursue new career paths."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://academia-1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Python Data Analysis"
              description="A flood prediction project involves the development and implementation of systems or models to forecast the occurrence and severity of floods in specific regions or areas. The primary goal is to provide early warnings and mitigate potential damage to lives, property, and infrastructure. "
              ghLink="https://github.com/PankajBehera-1/shapeAI_python_ML"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SAMS Admin Portal"
              description="Creating an admin portal in React involves building a web application that serves as a centralized platform for administrators to manage various aspects of a system or application. Below is a general project description outline for creating an admin portal in React:
              1.Authentication and Authorization
              2.Dashboard
              3.Responsive Design"
              ghLink="https://github.com/PankajBehera-1/SAMS_ADMIN"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Online Education Website"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="My Portfolio Website"
              description="Project Description:
              The goal of this project is to design and develop a personal portfolio website using React, a popular JavaScript library for building user interfaces. This portfolio website will serve as a platform to showcase your professional background, skills, projects, and contact information."
              ghLink="https://github.com/PankajBehera-1/My_Portfolio_website" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Demo Website"
              description="Description:

              Reactify is a modern and responsive website built entirely using React.js, a popular JavaScript library for building user interfaces. This project aims to showcase the power and flexibility of React in creating dynamic and interactive web experiences."
              ghLink="https://github.com/PankajBehera-1/radiant-onepage"
              demoLink="https://radiant-pankaj.netlify.app/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
