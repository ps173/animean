import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers";
import { FooterContainer } from "../containers";
import { Form } from "../components";
import { firebase } from "../lib/firebase.prod";
import * as ROUTE from "../constants/routes";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";
  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
        <Form.Title>Welcome Back!</Form.Title>
        {error && <Form.Error data-testid="error">{error}</Form.Error>}

        <Form.Base>
          <Form.Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Enter your email here"
          />
          <Form.Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="Enter your password here"
          />
          <Form.Submit disabled={isInvalid} type="submit">
            Login
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          Don't have a account ?{" "}
          <Form.Link to={ROUTE.SIGN_UP}>Sign In now.</Form.Link>
        </Form.Text>
      </Form>

      <FooterContainer />
    </div>
  );
}
