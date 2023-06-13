import React from "react";
import { Button, Stack, Form } from "react-bootstrap";
import axios from "axios";

const DataForm = ({ type, onFinish }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target["email"].value;
    const password = event.target["password"].value;

    axios
      .post(`http://localhost:8000/${type}`, { email, password })
      .then((response) => {
        if (response.status === 200) {
          alert(`${type} has been done successfully`);
        } else {
          alert(`something went wrong`);
        }
        onFinish && onFinish();
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={3}>
        {type === "update" ? (
          <Form.Text>Reset your Password!</Form.Text>
        ) : (
          <Form.Text>Register to system.</Form.Text>
        )}
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          id="email"
          aria-describedby="passwordHelpBlock"
        />

        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          id="password"
          aria-describedby="passwordHelpBlock"
        />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default DataForm;
