import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Projects() {
    const projects = [
        {
            title: "Business Strategy",
            description: "Design and Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Strategy",
            description: "Design and Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Strategy",
            description: "Design and Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Strategy",
            description: "Design and Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Strategy",
            description: "Design and Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Strategy",
            description: "Design and Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Strategy",
            description: "Design and Development",
            imgUrl: projImg1,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__slideInUp"
                                            : ""
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book.
                                    </p>
                                </div>
                            )}
                        </TrackVisibility>
                        <Tab.Container
                            id="project-tabs"
                            defaultActiveKey="first"
                        >
                            <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content align-items-center"
                                id="pills-tab"
                            >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Web Development
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        UI Designs
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Web Designs
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Will be posted Soon....
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    );
}

export default Projects;
