import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiCanva,
} from "react-icons/si";
import "../css/Techstack.css";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiCanva />, name: "Canva" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="icon-wrapper">
            {tool.icon}
            <span className="hover-text">{tool.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
