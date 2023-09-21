import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const CrudOperations = () => {
  const [users, setUsers] = useState([]);
  const [editable, setEditable] = useState(false);
  const [editableIndex, setEditableIndex] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const submit = (userData) => {
    if (editable === false) {
      setUsers([...users, userData]);
    } else {
      const newArr = users.map((value, index) => {
        if (index === editableIndex) {
          return userData;
        } else {
          return value;
        }
      });
      setUsers(newArr);
      setEditable(false);
    }

    reset({ name: "", age: "", address: "", gender: "" });
  };

  const onDelete = (userIndex) => {
    const newArr = users.filter((value, index) => {
      if (userIndex !== index) {
        return value;
      }
    });
    setUsers(newArr);
  };

  const onEdit = (user, index) => {
    reset(user); // popupute data in form
    setEditable(true); // to change the form behaviour
    setEditableIndex(index); // to compare the users from existing list
  };

  return (
    <div>
      <div>
        <h1>create users from hear</h1>
        <Form onSubmit={handleSubmit(submit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              {...register("name")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Age"
              {...register("age")}
            />
          </Form.Group>

          <div>
            <Form.Select
              aria-label="Default select example"
              {...register("gender")}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              {...register("address")}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {editable ? "Update" : "Add"}
          </Button>
        </Form>
      </div>

      <div>
        <h1>read users from hear</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th> Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((value, index) => {
              const { name, age, gender, address } = value;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{address}</td>
                  <td>
                    <Button onClick={() => onDelete(index)}>Delete</Button>
                    <Button onClick={() => onEdit(value, index)}>edit</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
