import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="amber-500">Erdenebulgan Sainkhishig </span>
            from <span className="amber-500"> Mongolia.</span>
            <br />
            I am currently employed as a software engineer at Mobicom Corporation LLC.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ski
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking, Climbing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p className="amber-500">
            "When you really want something, all the universe conspires to help you achieve it!"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
