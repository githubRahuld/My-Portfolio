import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { MdConnectWithoutContact } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import Typewriter from "typewriter-effect";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                <MdConnectWithoutContact style={{ marginBottom: "2px" }} />{" "}
                Contact Me
              </ScrollLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
