import React, { useState } from "react";
import axios from "axios";
import {withFormik, Field, Form} from 'formik';

function formComp() {
  const [nameinput, setNameinput] = useState("");
  const [emailinput, setEmailinput] = useState("");
  const [pwinput, setPWinput] = useState("");
  const [tosinput, setTOSinput] = useState("");

  return (
    <Form>
    onSubmit= {event =>{
      event.preventDefault();
    }}>
      <h1>
        Hello {nameinput || "Anon"}, your email and password are{" "}
        {emailinput || "BLANK"} and {pwinput || "BLANK"}, and you{" "}
        {tosinput
          ? "did read the Terms of Service"
          : "did NOT read the Terms of Service"}
      </h1>
      <label htmlFor="nameInput">
        {" "}
        What is your name? <br />
        <Field
          onChange={event => {
            setNameinput(event.target.value);
          }}
          type="text"
          placeholder="Username"
          name="Username"
          id="nameinput"
        />
      </label>
      <br />

      <label>
        {" "}
        Email address <br />
        <Field
          onChange={event => {
            setEmailinput(event.target.value);
          }}
          type="text"
          placeholder="Email"
          name="email"
          id="emailinput"
        />
      </label>
      <br />

      <label>
        {" "}
        Password <br />
        <Field
          onChange={event => {
            setPWinput(event.target.value);
          }}
          type="text"
          placeholder="Password"
          name="password"
          id="pwinput"
        />
      </label>
      <br />

      <label>
        {" "}
        Did you read the <span id="TOS"> Terms of Service</span>?
        <Field
          onChange={event => {
            setTOSinput(event.target.checked);
          }}
          type="checkbox"
          id="TOSCheck"
          name="TermsOfService"
        />
      </label>

      <br />
      <Field type="submit"  />
    </Form>
  );
}

export default formComp;
