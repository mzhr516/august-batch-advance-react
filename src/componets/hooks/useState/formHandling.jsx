import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const FormHandling = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    userName: "",
    email: "",
    password: "",
  });
  console.log(errorMsg);

  const submit = (e) => {
    e.preventDefault();
    // validation for userNAme field
    if (formData.userName.length <= 0) {
      console.log("enter username");
      setErrorMsg((prev) => {
        return { ...prev, userName: "enter your name" };
      });
    } else {
      setErrorMsg((prev) => {
        return { ...prev, userName: "" };
      });
    }
    // validation for email field
    if (formData.email.length <= 0) {
      setErrorMsg((prev) => {
        return { ...prev, email: "enter your email" };
      });
    } else {
      setErrorMsg((prev) => {
        return { ...prev, email: "" };
      });
    }
    // validation for password field
    if (formData.password.length <= 0) {
      setErrorMsg((prev) => {
        return { ...prev, password: "enter your password" };
      });
    } else {
      setErrorMsg((prev) => {
        return { ...prev, password: "" };
      });
    }
  };

  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>userName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter userName"
            value={formData.userName}
            onChange={(e) => {
              setFormData({ ...formData, userName: e.target.value });
            }}
          />
          <p style={{ color: "red" }}>{errorMsg.userName}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <p style={{ color: "red" }}>{errorMsg.email}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <p style={{ color: "red" }}>{errorMsg.password}</p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
