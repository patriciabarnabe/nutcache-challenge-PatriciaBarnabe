import React, { useState } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import {  DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function MainPage() {
  const [lgShow, setLgShow] = useState(false);

  // const [name, setChosenName] = useState('');
  // const [email, setChosenEmail] = useState('');
  // const [gender, setChosenGender] = useState('');
  // const [cpf, setChosenCPF] = useState('');
  // const [birthdate, setChosenBirthDate] = useState('');
  // const [startdate, setChosenStartDate] = useState('');
  // const [team, setChosenTeam] = useState('');

  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <Header />

      <Button variant="outline-primary" size="lg" onClick={() => setLgShow(true)}>Register an Employee</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Register an Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridName">
              <Form.Label> Name</Form.Label>
              <Form.Control placeholder="Full name" />
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
                />
              </MuiPickersUtilsProvider>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>














        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
}

export default MainPage;
