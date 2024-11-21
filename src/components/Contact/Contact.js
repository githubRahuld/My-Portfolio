import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import contactImage from "../../Assets/contact.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Here you can integrate the form submission with an API or backend service.
    console.log("Form submitted with:", formData);
  };

  return (
    <Container>
      <Row>
        {/* Left Side - Contact Form */}
        <Col md={6}>
          <h2 className="text-center mb-4 text-white mt-4">Contact Us</h2>
          <p className="text-start text-white mb-4">
            We would love to hear from you! Please fill out the form below to
            get in touch with us.
          </p>

          <Form
            onSubmit={handleSubmit}
            className="text-center"
            style={{
              margin: "10px",
              borderRadius: "15px", // Slightly more rounded corners
              border: "2px solid #be6adf", // Light purple border
              padding: "20px", // Add some padding inside the form
              marginBottom: "15px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow for depth
            }}
          >
            {/* Name Field */}
            <Form.Group controlId="formName">
              <Form.Label
                style={{ color: "white", textAlign: "left", width: "100%" }}
              >
                Your Name
              </Form.Label>
              <div className="d-flex align-items-center mb-3">
                <FaUser
                  className="mr-3"
                  style={{
                    fontSize: "20px",
                    color: "purple",
                    marginRight: "10px",
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "80%",
                    borderRadius: "25px",
                    paddingLeft: "15px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
            </Form.Group>

            {/* Email Field */}
            <Form.Group controlId="formEmail">
              <Form.Label
                style={{ color: "white", textAlign: "left", width: "100%" }}
              >
                Email Address
              </Form.Label>
              <div className="d-flex align-items-center mb-3">
                <FaEnvelope
                  className="mr-3"
                  style={{
                    fontSize: "20px",
                    color: "purple",
                    marginRight: "10px",
                  }}
                />
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "80%",
                    borderRadius: "25px",
                    paddingLeft: "15px",
                    marginLeft: "2px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
            </Form.Group>

            {/* Message Field */}
            <Form.Group controlId="formMessage">
              <Form.Label
                style={{ color: "white", textAlign: "left", width: "100%" }}
              >
                Message
              </Form.Label>
              <div className="d-flex align-items-center mb-3">
                <FaPaperPlane
                  className="mr-3"
                  style={{
                    fontSize: "20px",
                    color: "purple",
                    marginRight: "10px",
                  }}
                />
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message here"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: "80%",
                    borderRadius: "25px",
                    paddingLeft: "15px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
            </Form.Group>

            {/* Submit Button */}
            <Button
              variant="primary"
              type="submit"
              className="d-flex align-items-center mx-auto"
              style={{
                borderRadius: "25px",
                padding: "10px 20px",
                fontSize: "18px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <FaPaperPlane className="mr-2" style={{ marginLeft: "2px" }} />
              Submit
            </Button>
          </Form>

          {/* Success Message */}
          {formSubmitted && (
            <div className="mt-4 alert alert-success" role="alert">
              Thank you for contacting us! We will get back to you soon.
            </div>
          )}
        </Col>

        {/* Right Side - Contact Image */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center d-none d-md-block"
          style={{
            height: "100vh",
          }}
        >
          <img
            src={contactImage}
            alt="Contact"
            style={{
              maxWidth: "80%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              marginTop: "15%",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
