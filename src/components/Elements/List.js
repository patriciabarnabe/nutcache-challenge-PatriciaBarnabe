import React, { useState } from "react";
import { Table } from "react-bootstrap";

let apiURL = "https://crudcrud.com/api/97315b78abfe4052a6123fc4e0997b14";

function List() {
  const apiUsers = `${apiURL}/nutemployee`;

  const [employeeList, setEmployeeList] = useState({
    name: "",
    birthdate: "",
    email: "",
    gender: "",
    cpf: "",
    startdate: "",
    team: "",
  });

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(apiUsers, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      
      setEmployeeList({
        name: data.name,
        birthdate: data.birthdate,
        email: data.email,
        gender: data.gender,
        cpf: data.cpf,
        startdate: data.startdate,
        team: data.team,
      });

      console.log(employeeList)
    });

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default List;
