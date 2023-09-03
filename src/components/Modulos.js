import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ReactPlayer from "react-player";

export const Projects = () => {
  const atendimento = [
    {
      title: "Atendimento Urgência",
      description: "Em breve",
      imgUrl: projImg2,
    },
  ];

  const pep = [
    {
      title: "Evolução Médica",
      description: "Consultório",
      imgUrl: projImg2,
    },
  ];

  const sadt = [
    {
      title: "Requisição",
      description: "Técnico",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="modulos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Modulos</h2>
                  <p>Listagem de todos os modulos do Wareline.</p>
                  <p>Caso sinta falta de algo, por favor, nos comunique.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Recepção</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Enfermagem
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Cirurgico</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="four">Médico</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="five">Radiologia</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="six">Estoque</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="seven">Compras</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="eight">Médico</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="nine">Regulação</Nav.Link>
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
                          <ReactPlayer
                            url="<https://www.youtube.com/watch?v=EZ0PjxkDZiY&ab_channel=PhonkByte>"
                            controls  style={{ marginBottom: '20px' }}
                          />
                          <ReactPlayer
                            url="<https://www.youtube.com/watch?v=ZaYvwn9nBD4&ab_channel=Alura>"
                            controls style={{ marginBottom: '20px' }}
                          />
                          <ReactPlayer
                            url="<https://www.youtube.com/watch?v=1_27GyASuRg>"
                            controls style={{ marginBottom: '20px' }}
                          />
                          {atendimento.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {pep.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {sadt.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
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
