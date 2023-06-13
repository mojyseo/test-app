import React, { useEffect, useState } from "react";
import { Table, Stack, Spinner } from "react-bootstrap";
import axios from "axios";

const headers = ["email", "password"];

const DataTable = ({ refetch }) => {
  const [data, setData] = useState("loading");

  useEffect(() => {
    setData("loading");
    axios
      .get("http://localhost:8000/")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, [refetch]);

  if (data === "loading") {
    return (
      <center>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </center>
    );
  }
  return (
    <Stack style={{ margin: "32px 10vw", justifyContent: "center" }} gap={4}>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((item, key) => (
              <th key={key}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length ? (
            data.map((item, key) => (
              <tr key={key}>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            ))
          ) : (
            <tr style={{ margin: "32px auto" }}>
              <td>no data</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Stack>
  );
};

export default DataTable;
