import React from "react";
import { Stack } from "react-bootstrap";

import Form from "./Form";

const Hero = ({ handleReset }) => {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={5}
        style={{ padding: "110px 18vw", justifyContent: "center" }}
      >
        <Form type="update" onFinish={handleReset} />
        <Form type="add" onFinish={handleReset} />
      </Stack>
    </>
  );
};

export default Hero;
