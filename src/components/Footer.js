import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/huzaifa-ali22/"  target="_blank"><TbBrandLinkedin size={30} color="blue"/></a>
                <a href="https://wa.me/923062199708" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp size={30} color="green" />
</a>

<a href="https://mail.google.com/mail/?view=cm&fs=1&to=huzaifaaaa18@gmail.com" target="_blank" rel="noopener noreferrer">
  <SiGmail size={30} color="red"/>
</a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
