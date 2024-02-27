import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pankaj Behera </span>
            from <span className="purple"> Balesore, India.</span>
            <br />
            I have completed my B.Tech in COMPUTER SCIENCE in 2024.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!!!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket & Vollyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Poster Making
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pankaj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
