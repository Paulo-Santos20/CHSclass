import { Container, Row, Col } from "react-bootstrap";
import linkedin from '../assets/img/nav-icon1.svg';
import twitter from '../assets/img/twitter.png';
import instagram from '../assets/img/nav-icon3.svg';
import Newsletter from "./Newsletter";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6}>
            <p>Entre em Contato</p>
            <p>(81) 9.9423 - 2513</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/chs-cei-jo%C3%A3o-paulo-ii/" target="_blank"><img src={linkedin} alt="Icon" /></a>
              <a href="https://twitter.com/ChsJoaopauloii" target="_blank"><img src={twitter} alt="Icon" /></a>
              <a href="https://www.instagram.com/chsassociacaojoaopaulo2/" target="_blank"><img src={instagram} alt="Icon" /></a>
            </div>
            <p>© CHS Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
