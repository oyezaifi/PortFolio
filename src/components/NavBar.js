import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.jpg';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.png';
// import navIcon3 from '../assets/img/nav-icon3.png';
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
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
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/huzaifa-ali22/"  target="_blank"><TbBrandLinkedin size={30} color="blue"/></a>
                <a href="https://wa.me/923062199708" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp size={30} color="green" />
</a>

<a href="https://mail.google.com/mail/?view=cm&fs=1&to=huzaifaaaa18@gmail.com" target="_blank" rel="noopener noreferrer">
  <SiGmail size={30} color="red"/>
</a>
              </div>
              <a href="/huzaifa_CV.pdf" download>
  <button className="vvd"><span>Download my CV</span></button>
</a>


            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
