import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/homeLogo.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
import Contact from "../Contact/Contact";
import About from "../About/About";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RAHUL DHAKAD</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div>
        <Home2 />
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="resume">
        <ResumeNew />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </section>
  );
}

export default Home;
