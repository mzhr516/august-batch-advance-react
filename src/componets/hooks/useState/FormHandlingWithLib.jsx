import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const FormHandlingWithLib = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    reValidateMode: "onSubmit",
  });
  const { errors } = formState;
  console.log(errors);
  const submit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(submit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>userName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter userName"
            {...register("userName", {
              required: { value: true, message: "userNAme is required" },
            })}
          />

          <p style={{ color: "red" }}>{errors?.userName?.message}</p>

          {/* {errors.userName && (
            <p style={{ color: "red" }}>{errors.userName.message}</p>
          )} */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Age"
            {...register("age", {
              required: { value: true, message: "age is required" },
              min: { value: 18, message: "age must be greater than 18" },
              max: { value: 30, message: "age must be less than 30" },
            })}
          />
          <p style={{ color: "red" }}>{errors?.age?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            {...register("email", {
              required: { value: true, message: "email is required" },
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "enter valid email",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors?.email?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "password is required" },
              minLength: {
                value: 6,
                message: "password must be greter than 6 charectors",
              },
              maxLength: {
                value: 12,
                message: "password must be less than 12 charectors ",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors?.password?.message}</p>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
