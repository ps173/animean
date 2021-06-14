import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers";
import { FooterContainer } from "../containers";
import { Form } from "../components";
import { firebase } from "../lib/firebase.prod";
import * as ROUTE from "../constants/routes";

export default function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";
  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTE.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <div>
      <HeaderContainer />

      <Form onSubmit={handleSubmit}>
        <Form.Title>Sign Up</Form.Title>
        {error && <Form.Error data-testid="error">{error}</Form.Error>}

        <Form.Base>
          <Form.Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Email address"
          />
          <Form.Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="Password"
          />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign Up
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          Already have a account ? <Form.Link to="/login">login now.</Form.Link>
        </Form.Text>
      </Form>

      <FooterContainer />
    </div>
  );
}
