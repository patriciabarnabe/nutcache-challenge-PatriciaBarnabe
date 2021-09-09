import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

let apiURL =
  "https://crudcrud.com/api/97315b78abfe4052a6123fc4e0997b14";

function Register() {
  const [registerModal, setRegisterModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [validationModal, setValidationModal] = useState(false);

  const apiUsers = `${apiURL}/nutemployee`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [cpf, setCPF] = useState("");
  const [startdate, setStartDate] = useState("");
  const [team, setTeam] = useState("");

  const [selectedDate, handleDateChange] = useState(new Date());

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if(name === "" || email === "" || gender === "" || cpf === "" || startdate === "" || team === ""){
      setValidationModal(true)
    } else{

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    
    
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        birthdate: selectedDate,
        email: email,
        gender: gender,
        cpf: cpf,
        startdate: startdate,
        team: team,
      }),
    };

    fetch(apiUsers, requestOptions)
      .then((response) => response.json())
      .then((userData) => {
        localStorage.setItem("name", userData.name);
        return userData.role;
      })
      .then(() => {
        setConfirmationModal(true)
      });
    }
  };

  return (
    <>
      <Button
        variant="outline-info"
        size="lg"
        onClick={() => setRegisterModal(true)}
      >
        Register an Employee
      </Button>

      <Modal
        size="lg"
        show={registerModal}
        onHide={() => setRegisterModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Register an Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGridName">
              <Form.Label> Name</Form.Label>
              <Form.Control 
                placeholder="Full name" 
                required 
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridBirthDate">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  disableFuture
                  openTo="year"
                  format="dd/MM/yyyy"
                  label="Date of birth"
                  views={["year", "month", "date"]}
                  value={selectedDate}
                  onChange={handleDateChange}
                  required
                />
              </MuiPickersUtilsProvider>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="Choose..." onChange={(event) => setGender(event.target.value)}>
                  <option>Choose...</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCPF">
                <Form.Label>CPF</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="CPF number" 
                  onChange={(event) => setCPF(event.target.value)}
                  required />
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                onChange={(event) => setEmail(event.target.value)}
                required 
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGridAddress1"
              >
                <Form.Label>Start Date</Form.Label>
                <Form.Control 
                  placeholder="MM/YYYY" 
                  onChange={(event) => setStartDate(event.target.value)}
                  required 
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Team</Form.Label>
                <Form.Select defaultValue="Choose..." onChange={(event) => setTeam(event.target.value)}>
                  <option>Choose...</option>
                  <option>Mobile</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button variant="info" type="submit">
              Submit
            </Button>

            <Modal
              size="sm"
              show={confirmationModal}
              onHide={() => setConfirmationModal(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm" style={{color: 'green', fontWeight: 'bolder'}}>
                  SUCCESS!
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{'background-color': 'green', fontWeight: 'bolder'}}> successful registered employee </Modal.Body>
            </Modal>

            <Modal
              size="sm"
              show={validationModal}
              onHide={() => setValidationModal(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm" style={{color: 'red', fontWeight: 'bolder'}}>
                  WAIT
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{'background-color': 'red', fontWeight: 'bolder'}}> please, fill in all required fields </Modal.Body>
            </Modal>

          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;
