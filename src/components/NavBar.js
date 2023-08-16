import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logoCHS.png';
import linkedin from '../assets/img/nav-icon1.svg';
import twitter from '../assets/img/twitter.png';
import instagram from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <a href="/">
              <img src={logo} alt="Logo" className="logo-img" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Treinadores</Nav.Link>
              <Nav.Link href="#modulos" className={activeLink === 'modulos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('modulos')}>Modulos</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/company/chs-cei-jo%C3%A3o-paulo-ii/" target="_blank"><img src={linkedin} alt=""/></a>
                <a href="https://twitter.com/ChsJoaopauloii" target="_blank"><img src={twitter} alt="" /></a>
                <a href="https://www.instagram.com/chsassociacaojoaopaulo2/" target="_blank"><img src={instagram} alt="" /></a>
              </div>
              <HashLink to='#modulos'>
                <button className="vvd"><span>Video Aulas</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
