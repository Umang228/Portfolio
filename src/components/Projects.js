import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1.png";
import projImg2 from "../assets/img/project-2.png";
import projImg3 from "../assets/img/project-3.jpg";
import projImg4 from "../assets/img/project-4.png";
import projImg5 from "../assets/img/project-5.png";
import projImg6 from "../assets/img/project-6.png";
import projImg7 from "../assets/img/project-7.png";
import projImg8 from "../assets/img/project-8.png";
import projImg9 from "../assets/img/project-9.png";
import projImg10 from "../assets/img/project-10.png";
import projImg11 from "../assets/img/project-11.png";
import projImg12 from "../assets/img/project-12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Email Validator",
      description: "A tool to validate email addresses, ensuring legitimate communications and reducing bounce rates.",
      imgUrl: projImg1,
      demoLink: "https://github.com/Umang228/Email-Validator",
    },
    {
      title: "WeatherNow",
      description: "A real-time weather application providing accurate weather updates using OpenWeatherMap API.",
      imgUrl: projImg2,
      demoLink: "https://github.com/Umang228/-WeatherNow--Real-time-Weather-Information-App",
    },
    {
      title: "Todo",
      description: "A simple task management application for organizing and tracking daily to-dos with a clean, user-friendly interface",
      imgUrl: projImg3,
      demoLink: "https://github.com/Umang228/Todo",
    },
    {
      title: "Music Player",
      description: "A responsive and customizable music player application, supporting various audio formats for seamless playback",
      imgUrl: projImg4,
      demoLink: "https://github.com/Umang228/music-player",
    },
    {
      title: "Cart-Zone",
      description: "An e-commerce shopping cart system that allows users to browse, add items, and complete transactions smoothly",
      imgUrl: projImg5,
      demoLink: "https://github.com/Umang228/Cart-Zone",
    },
    {
      title: "Product Page",
      description: "A fully functional product detail page for showcasing products with interactive features and a dynamic UI",
      imgUrl: projImg6,
      demoLink: "https://github.com/Umang228/next-js-template",
    },
    {
      title: "Admin Panel in Next.js",
      description: "A responsive admin dashboard built with Next.js for efficient management and monitoring of web applications",
      imgUrl: projImg7,
      demoLink: "https://github.com/Umang228/Admin-panel",
    },
    {
      title: "RBAC in React.js",
      description: "An implementation of Role-Based Access Control (RBAC) in React.js, allowing for secure and personalized user access.",
      imgUrl: projImg8,
      demoLink: "https://github.com/Umang228/RBAC-in-React",
    },
    {
      title: "Admin Panel Template",
      description: "A versatile admin panel template offering easy customization for various applications, with intuitive navigation and data visualization",
      imgUrl: projImg9,
      demoLink: "https://github.com/Umang228/Nextjs-Admin-template",
    },
    {
      title: "Raindrop Pattern",
      description: "A creative visual effect using CSS, simulating raindrop patterns on the screen for a dynamic and engaging design",
      imgUrl: projImg10,
      demoLink: "https://github.com/Umang228/raindrop-grid",
    },
    {
      title: "Google Authentication",
      description: "A secure authentication system integrated with Google sign-in, enabling users to log in using their Google credentials",
      imgUrl: projImg11,
      demoLink: "https://github.com/Umang228/Login-with-google",
    },
    {
      title: "User Management",
      description: "A user management system for handling user profiles, roles, and permissions, providing a streamlined admin experience.",
      imgUrl: projImg12,
      demoLink: "https://github.com/Umang228/User-Management",
    },
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
                <p>Showcasing a diverse range of projects that highlight my technical expertise in web development, problem-solving, and innovative solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0, 6).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.slice(6, 12).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
