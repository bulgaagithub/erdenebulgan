import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="amber-500">Code</strong>
      </h1>
      <GitHubCalendar
        username="bulgaagithub"
        blockSize={15}
        color="#f59e0b"
        blockMargin={5}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
