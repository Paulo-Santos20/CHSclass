import "../App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import db from "../firebase";

function Newsletter() {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      //add to firebase
      db.collection("emails").add({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };
  return (
      <div className="newsletter">
        <Form onSubmit={submitHandler}>
          <h3> Increva-se para sabe sobre os próximos cursos</h3>
          <input
            type="email"
            placeholder="Endereço de email"
            className="new-email-bx"
            onChange={inputHandler}
          />
          <button type="submit" className="new-email-button">
            Enviar
          </button>
        </Form>
      </div>
  );
}
const Form = styled.form``;
export default Newsletter;
