// import React from "react"
import React, { useState } from "react";
import arrow from "../src/assets/arrow.png";

function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const errorStyle = { color: "red" };

  //React.MouseEvent<HTMLFormElement>
  function handleClick(/*event: SubmitEvent*/) {
    // event.preventDefault()
    if (name && message && isValidEmail) {
      setSubmitted(true);
      setErrorMessage("");
      setUser(name);
      setName("");
      setEmail("");
      setMessage("");
    } else if (name && message && !isValidEmail) {
      setErrorMessage("Ange en giltig Email-adress");
      setSubmitted(false);
    } else {
      setErrorMessage("Alla fält måste vara ifyllda");
      setSubmitted(false);
    }
  }

  return (
    <div className="contact_container">
      <div className="contact">
        <h2>Get in touch</h2>
        <hr />
        <div className="input_field_container">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="contact_input"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            name="e-mail"
            placeholder="Your E-mail"
            className="contact_input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contact_input"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
          <button type="submit" onClick={handleClick}>
            Submit
            <img src={arrow} alt="" />
          </button>
          {submitted && <p>Tack för ditt meddelande {user}</p>}
          {errorMessage && <p style={errorStyle}>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
