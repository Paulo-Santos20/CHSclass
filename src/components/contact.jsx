import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";
import {Row, Col } from "react-bootstrap";
import React, { useRef, useState, useEffect } from "react";


// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState(""); // New state to track email status
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_smgmwvg",
        "template_fxcj0bl",
        form.current,
        "VN7l4JdeSMDzGexk8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Mensagem enviada");
          setEmailStatus("success");
          setShowSuccessMessage(true);
        },
        (error) => {
          console.log(error.text);
          setEmailStatus("error");
          setShowSuccessMessage(false);
        }
      );
  };

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000); // Hide after 3 seconds
    }
  }, [showSuccessMessage]);

  return (
    <div className="contact" id="connect">
      <form ref={form} onSubmit={sendEmail} className="form-contact">
        <h3>Solicite seu treinamento Ao Vivo</h3>
        <Row>
          <label></label>
          <input type="text" placeholder="Nome" name="user_name" />
        </Row>

        <Row>
          <label></label>
          <input type="text" placeholder="Telefone" name="user_telefone" />
        </Row>

        <Row>
          <label></label>
          <input type="email" placeholder="Email" name="user_email" />
        </Row>

        <Row>
          <label></label>          
            <textarea rows="6" name="message" placeholder="Mensagem" />          
        </Row>
        
        <input type="submit" value="Enviar" />
      </form>
      {showSuccessMessage && (
        <div className="overlay">
          <p className="success-message">Email enviado com sucesso!</p>
        </div>
        )}
        </div>
  );
};

export default Contact;
