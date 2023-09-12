import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const FormHandling = () => {
  const [formData, setFormData] = useState({ userName: "", password: "",email:"" });
    // console.log(formData)

  const submit = (e) => {
    e.preventDefault();
    console.log("form submitted", formData);
  };

  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>userName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter userName"
            onChange={(e) => {
              setFormData({ ...formData, userName: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
