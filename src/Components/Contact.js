import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/contactImg.JPG";
import '../App.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <p><strong>Email:</strong> <a href="mailto:ananya14saikia@gmail.com">ananya14saikia@gmail.com</a></p>
                  <p><strong>Phone:</strong> +91-7086571678</p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
