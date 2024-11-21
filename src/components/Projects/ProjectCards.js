import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view d-flex flex-column"
      style={{
        backgroundImage: `url(${require("../../Assets/project-bg.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        color: "white",
        padding: "50px 0",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          borderRadius: "10px", // Round the corners of the image and border
          border: "2px solid #be6adf", // Thin white border
          marginBottom: "15px", // Spacing below the image
          objectFit: "cover",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            color: "#be6adf",
            textAlign: "center",
            marginBottom: "15px",
            letterSpacing: "1px",
            borderBottom: "2px solid #be6adf", // Add underline
            display: "inline-block", // Keeps underline from stretching
            paddingBottom: "5px",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Main content goes here, flexbox ensures buttons are at the bottom */}
        <div className="mt-auto">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
