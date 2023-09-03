import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/img/Logo_branco.png";

export const Banner = () => {
  const toRotate = ["Hospitalar", "Humanizado", "CHS"];
  const period = 2000;

  const [state, setState] = useState({
    loopNum: 0,
    isDeleting: false,
    text: "",
    delta: 300 - Math.random() * 100,
    index: 1,
  });

  useEffect(() => {
    let ticker = setInterval(tick, state.delta);

    return () => {
      clearInterval(ticker);
    };
  }, [state.text]);

  const updateState = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const tick = () => {
    let i = state.loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = state.isDeleting
      ? fullText.substring(0, state.text.length - 1)
      : fullText.substring(0, state.text.length + 1);

    updateState({ text: updatedText });

    if (state.isDeleting) {
      updateState({ delta: state.delta / 2 });
    }

    if (!state.isDeleting && updatedText === fullText) {
      updateState({ isDeleting: true, index: state.index - 1, delta: period });
    } else if (state.isDeleting && updatedText === "") {
      updateState({
        isDeleting: false,
        loopNum: state.loopNum + 1,
        index: 1,
        delta: 500,
      });
    } else {
      updateState({ index: state.index + 1 });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">
                    Treinamento - Associação Beneficente João Paulo II
                  </span>
                  <h1>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Hospitalar", "Humanizado", "CHS" ]'
                    >
                      <span className="wrap">{state.text}</span>
                    </span>
                  </h1>
                  <p>
                    Bem-vindos à plataforma de videoaulas Wareline - seu portal
                    completo para dominar a excelência no ambiente hospitalar
                    moderno. Nossa missão é proporcionar a você uma experiência
                    educativa única, permitindo que profissionais de saúde e
                    administradores hospitalares desbravem os recursos e
                    funcionalidades do sistema Wareline de maneira eficaz e
                    envolvente.
                  </p>
                  <button onClick={() => console.log("conectar")}>
                    Video - Aulas <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Imagem de Cabeçalho" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
