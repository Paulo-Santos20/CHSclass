import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";
import { Row, Col } from "react-bootstrap";
import React, { useRef, useState, useEffect } from "react";

const Contact = () => {
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_smgmwvg",
        "template_fxcj0bl",
        form.current,
        "VN7l4JdeSMDzGexk8"
      );
      
      console.log(result.text);
      setEmailStatus("success");
      setShowSuccessMessage(true);
    } catch (error) {
      console.log(error.text);
      setEmailStatus("error");
      setShowSuccessMessage(false);
    }
  };

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  return (
    <div className="contact" id="connect">
      <form ref={form} onSubmit={sendEmail} className="form-contact">
        <h2>Solicite seu treinamento Ao Vivo</h2>
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
