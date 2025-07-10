import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/arrow1.svg";
import arrow2 from "../assets/arrow2.svg";
import  '../App.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Custom Arrows
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button className="custom-arrow left-arrow" onClick={onClick}>
        <img src={arrow1} alt="Left Arrow" />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button className="custom-arrow right-arrow" onClick={onClick}>
        <img src={arrow2} alt="Right Arrow" />
      </button>
    );
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here's a breakdown of my key skills across different areas.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
              >
                {/* Technical Skills */}
                <div className="item">
                  <h5>Technical Skills</h5>
                  <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React.js, Node.js, Express.js</li>
                    <li>SQL, MySQL</li>
                    <li>Java</li>
                    <li>Git & GitHub</li>
                    <li>Restful APIs, Bootstrap</li>
                    <li>Python</li>
                    <li>C programming</li>
                  </ul>
                </div>

                {/* Non-Technical Skills */}
                <div className="item">
                  <h5>Non-Technical Skills</h5>
                  <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <li>Tableau, Power Bi</li>
                    <li>MS Excel, Power Point, Google Sheets</li>
                    <li>Figma, Canva</li>
                  </ul>
                </div>

                {/* Other Skills */}
                <div className="item">
                  <h5>Other Skills</h5>
                  <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <li>Communication</li>
                    <li>Project Management</li>
                    <li>Problem Solving</li>
                    <li>Data structure & Algorithms</li>
                    <li>Object Oriented Programming</li>
                    <li>AI/ML</li>
                    <li>Data Analytics</li>
                    <li>UI/UX Design</li>
                  </ul>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
