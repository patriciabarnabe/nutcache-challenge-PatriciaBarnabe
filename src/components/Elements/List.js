import React, { useState } from "react";
import { Table, Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

let apiURL = "https://crudcrud.com/api/97315b78abfe4052a6123fc4e0997b14";

function List() {
  const apiUsers = `${apiURL}/nutemployee`;

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Dynamic list to be implemented soon
    </Tooltip>
  );

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
        <h3 className="text-center"> List of Employees </h3>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip} >
          <Button variant="outline-warning" className="position-absolute" size="sm" style={{left: '57rem', bottom: '29.5rem', fontWeight: 'bolder'}}>!</Button>
        </OverlayTrigger>   

      <Table striped bordered hover className="m-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Start Date</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Patrícia Barnabé de Araújo</td>
            <td>patbarnabe5@gmail.com</td>
            <td>09/2021</td>
            <td className="d-flex justify-content-between">Frontend
              <div>
                <Button variant="light" size="sm"  style={{'margin-right': '1rem'}}>
                  <EditRoundedIcon fontSize="small"></EditRoundedIcon>
                </Button>
                <Button variant="light" size="sm" style={{'margin-right': '1rem'}}>
                  <DeleteRoundedIcon fontSize="small"></DeleteRoundedIcon>
                </Button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Pablo Garcia de Aráujo Cariello</td>
            <td>pgacariello@gmail.com</td>
            <td>05/2021</td>
            <td className="d-flex justify-content-between">Mobile
              <div>
                <Button variant="light" size="sm"  style={{'margin-right': '1rem'}}>
                  <EditRoundedIcon fontSize="small"></EditRoundedIcon>
                </Button>
                <Button variant="light" size="sm" style={{'margin-right': '1rem'}}>
                  <DeleteRoundedIcon fontSize="small"></DeleteRoundedIcon>
                </Button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Larissa Sobral Vilela</td>
            <td>larissavilela@gmail.com</td>
            <td>02/2020</td>
            <td className="d-flex justify-content-between">Backend
              <div>
                <Button variant="light" size="sm"  style={{'margin-right': '1rem'}}>
                  <EditRoundedIcon fontSize="small"></EditRoundedIcon>
                </Button>
                <Button variant="light" size="sm" style={{'margin-right': '1rem'}}>
                  <DeleteRoundedIcon fontSize="small"></DeleteRoundedIcon>
                </Button>
              </div>
            </td>
          </tr>
          <tr>
            <td>José Guilherme Melo</td>
            <td>guilhermemelo@gmail.com</td>
            <td>03/2019</td>
            <td className="d-flex justify-content-between">Mobile
              <div>
                <Button variant="light" size="sm"  style={{'margin-right': '1rem'}}>
                  <EditRoundedIcon fontSize="small"></EditRoundedIcon>
                </Button>
                <Button variant="light" size="sm" style={{'margin-right': '1rem'}}>
                  <DeleteRoundedIcon fontSize="small"></DeleteRoundedIcon>
                </Button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Ana Larissa Cristo Mendes</td>
            <td>larissamendes@gmail.com</td>
            <td>07/2021</td>
            <td className="d-flex justify-content-between">Frontend
              <div>
                <Button variant="light" size="sm"  style={{'margin-right': '1rem'}}>
                  <EditRoundedIcon fontSize="small"></EditRoundedIcon>
                </Button>
                <Button variant="light" size="sm" style={{'margin-right': '1rem'}}>
                  <DeleteRoundedIcon fontSize="small"></DeleteRoundedIcon>
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default List;
