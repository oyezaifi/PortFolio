import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/projectImage.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "DonoShare",
      description: "DonoShare is my Final Year Project built with the MERN stack. It’s a donation platform that helps connect donors with those in need. The system includes user authentication, real-time updates, and a smooth donation process for secure contributions.",
      imgUrl: projImg1,
      linkUrl: "https://dono-shareproject.vercel.app/"
    },
    {
      title: "Huzaifa's Fitness",
      description: "This is a simple fitness website that i built for my practice in web development. It includes a home page, about page, services page and a contact page. The website is built using HTML, CSS.",
      imgUrl: projImg2,
      linkUrl: "https://huzaifafitness.netlify.app/"
    },
    {
      title: "ToDo Website",
      description: "This is a simple ToDo website, it includes Todo Task and Description, you can Edit, Delete and Complete the task. The website is built using React, CSS.",
      imgUrl: projImg3,
      linkUrl: "https://huzaifatodoapp.vercel.app/"
    },
    {
      title: "Blood Donation Bank",
      description: "Blood Donation Bank is a web-based system developed using HTML, CSS, and PHP, designed to facilitate blood donation and management efficiently. The platform connects donors with recipients and enables hospitals or blood banks to manage their inventory",
      imgUrl: projImg4,
      linkUrl: "https://github.com/oyezaifi/Blood-Bank-nd-Donation-Website"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In this section, you'll find a collection of my work, showcasing my skills in web development. These projects include both personal and academic projects where I’ve applied technologies like React, JavaScript, and the MERN stack to build functional, user-friendly applications.</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      );
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
