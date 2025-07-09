import { Container, Row, Col, Card } from "react-bootstrap";
import '../App.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  <p>Here are a few roles I've worked on recently.</p>
                  <Row className="mt-4">
                    <Col md={6} className="mb-4">
                      <Card className="exp-card shadow">
                        <Card.Body>
                          <Card.Title>Data Science & Artificial Intelligence Intern</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Indian Institute of Technology, Guwahati</Card.Subtitle>
                          <Card.Text>
                          <ul><li>Working on a research project based on Depth Anything, focusing on monocular depth estimation using 
                                   large-scale unlabeled data and pre-trained vision models. </li>
                                   <li>Using Python and PyTorch to run and fine-tune training scripts, handle data preprocessing, and visualize 
                                   depth predictions for model evaluation.</li></ul>
                          </Card.Text>
                          <Card.Text className="text-muted small">May 2025 – July 2025</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                      <Card className="exp-card shadow">
                        <Card.Body>
                          <Card.Title>AI & CLOUD Virtual Internship</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Edunet Foundation</Card.Subtitle>
                          <Card.Text>
                          <ul><li>Developed a basic chatbot application using IBM Cloud and Watson Assistant through IBM SkillsBuild, 
                                  integrating simple conversational AI features to simulate user interactions. </li>
                                  <li>Gained hands-on experience in Data analytics by working with real datasets, performing data cleaning, 
                                        exploration, and visualization using Excel.</li></ul>
                          </Card.Text>
                          <Card.Text className="text-muted small">Jan 2024 – March 2024</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
