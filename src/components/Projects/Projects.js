import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crazzzyTube from "../../Assets/Projects/CrazzyTube.png";
import EcommerceTable from "../../Assets/Projects/EcommerceTable.png";
import MealRecipe from "../../Assets/Projects/MealRecipes.png";
import Timeline from "../../Assets/Projects/TimelineTable.png";
import WebBlog from "../../Assets/Projects/Web-Blog.png";
import WeddingSparks from "../../Assets/Projects/weddingSparks.png";

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
              imgPath={crazzzyTube}
              isBlog={false}
              title="CrazzzyTube"
              description="CrazzzyTube is a full-stack web application inspired by YouTube. It allows users to upload, stream, and interact with videos. The project is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and incorporates video streaming capabilities using FFmpeg and Cloudinary for video storage."
              ghLink="https://github.com/githubRahuld/Crazzzy-Tube"
              demoLink="https://crazzzy-tube.vercel.app/users/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MealRecipe}
              isBlog={false}
              title="Meal Recipes"
              description="A Food Recipe Website built with React.js allows users to discover and access a variety of quick recipes with just one click. The platform offers a user-friendly interface, categorized recipes, and instant search functionality. Perfect for food enthusiasts looking for hassle-free cooking ideas!"
              ghLink="https://github.com/githubRahuld/MealRecipes"
              demoLink="https://meal-recipes-delta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebBlog}
              isBlog={false}
              title="WebBlog"
              description="This is a simple blog website built using React.js and powered by Appwrite. It enables users to create, read, and manage blog posts effortlessly. With a clean design and responsive layout, it’s perfect for sharing your thoughts and stories!"
              ghLink="https://github.com/githubRahuld/Web-Blog-Apprite"
              demoLink="https://web-blog-apprite-githubrahuld.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EcommerceTable}
              isBlog={false}
              title=" E-commerce Cart"
              description="Advanced React Table is a feature-rich, customizable table component built with React.js. It provides advanced functionalities like sorting, filtering, pagination, and dynamic data handling. Ideal for displaying and managing large datasets with ease and flexibility."
              ghLink="https://github.com/githubRahuld/Advanced-React-Table"
              demoLink="https://advanced-react-table.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Timeline}
              isBlog={false}
              title="Timeline Chart "
              description="This application visualizes schedules and timelines in an interactive, customizable chart using React and the `react-calendar-timeline` library. It is designed for efficient time management and scheduling, providing features like zooming, filtering, and responsive design."
              ghLink="https://github.com/githubRahuld/Timeline-Chart-"
              demoLink="https://timeline-chart-iota.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeddingSparks}
              isBlog={false}
              title="Wedding Sparks"
              description="Wedding Sparks is a stunning wedding planning website built with React.js, designed to simplify the journey to your big day. From inspirational ideas to seamless event management tools, it’s your one-stop solution for making your dream wedding a reality. Celebrate love with a spark!"
              ghLink="https://github.com/githubRahuld/weddingSpark-frontend"
              demoLink="https://wedding-spark-frontend.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
