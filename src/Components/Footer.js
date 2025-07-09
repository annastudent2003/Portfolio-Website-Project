import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/github_icon.png";
import navIcon2 from "../assets/linkedin_icon.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col xs={12} className="text-center">

            <div className="social-icon">
              <a href="https://github.com/annastudent2003"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/ananya-saikia-257729257/"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Designed by Ananya Saikia. Personal portfolio of Ananya saikia.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}