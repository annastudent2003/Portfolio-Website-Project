import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectImg1 from "../assets/project1.png";
import projectImg2 from "../assets/project2.png";
import projectImg3 from "../assets/project3.png";
import projectImg4 from "../assets/project4.png";
import projectImg5 from "../assets/project5.png";
import projectImg6 from "../assets/project6.png";
import projectImg7 from "../assets/project7.png";
import projectImg8 from "../assets/project8.png";
import '../App.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Food Blog",
      description: "Used: HTML & CSS.",
      imgUrl: projectImg1,
      url: "https://github.com/annastudent2003/Food-Blog",
    },
    {
      title: "Persona - Perfume Shopping Site",
      description: "Used: HTML, CSS & JavaScript.",
      imgUrl: projectImg2,
      url: "https://spectacular-pie-23cd76.netlify.app/",
    },
    {
      title: "Urban Garden- Plant Shopping Site",
      description: "Used: HTML, CSS & JavaScript.",
      imgUrl: projectImg3,
      url: "https://67cb551e32a61402442cfbfd--peppy-nougat-957ccf.netlify.app",
    },
    {
      title: "Enhancing Beauty - Cosmetic Recommendation",
      description: "Used: EJS, HTML, CSS, JavaScript.",
      imgUrl: projectImg4,
      url: "https://makeup-product-recommendation.onrender.com/",
    },
    {
      title: "Weather App",
      description: "Used: HTML, CSS, JavaScript & API.",
      imgUrl: projectImg5,
      url: "https://elegant-figolla-8b0c9b.netlify.app/",
    },
    {
      title: "Basic Website",
      description: "Used: HTML, CSS & JavaScript.",
      imgUrl: projectImg6,
      url: "https://dancing-pie-4edd12.netlify.app/",
    },
    {
      title: "Happy Learning - Education Site",
      description: "Used: HTML, CSS, JavaScript & API.",
      imgUrl: projectImg7,
      url: "https://rainbow-horse-072db7.netlify.app/",
    },
    {
      title: "Portfolio",
      description: "Used: HTML, CSS & JavaScript.",
      imgUrl: projectImg8,
      url: "https://684ce2f9b24b59d2c6aa61ae--verdant-smakager-89b757.netlify.app/",
    },
    {
      title: "Portfolio (React)",
      description: "Used: CSS,ReactJS, Bootstrap.",
      imgUrl: projectImg8,
      url: "https://github.com/annastudent2003/Portfolio-Website-Project",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Projects</h2>
                  <p>Here are some of the projects I’ve worked on. Click to view them live!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Coming Soon</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>More projects coming soon. Stay tuned!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
