import React, { useState } from 'react';
import '../NavBar/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown, Button, Modal, Form } from 'react-bootstrap'


{/* <Modal.Dialog>
<Modal.Header closeButton>
  <Modal.Title>Modal title</Modal.Title>
</Modal.Header>

<Modal.Body>
  <p>Modal body text goes here.</p>
</Modal.Body>

<Modal.Footer>
  <Button variant="secondary">Close</Button>
  <Button variant="primary">Save changes</Button>
</Modal.Footer>
</Modal.Dialog> */}

function Navigation() {
  const [modalVisible, setModalVisible] = useState(false)
  const [modal2Visible, setModal2Visible] = useState(false)

  return (

    <div className="navBar">
      <Navbar bg="success" variant="dark"
        sticky="top">
        <Navbar.Brand>
          Alert Me
        </Navbar.Brand>

        <Nav>
          <NavDropdown title="Profile">
            <NavDropdown.Item href="resources">Resources</NavDropdown.Item>
            <NavDropdown.Item href="incidentLog">Incident log</NavDropdown.Item>
            <NavDropdown.Item href="emergencyContacts">Emergency Contacts</NavDropdown.Item>
          </NavDropdown>
          <Button id='loginBtn' onClick={() => setModalVisible(true)}>Login</Button>
          <Modal id='Modal1' show={modalVisible} onHide={() => setModalVisible(false)}>
            <Modal.Header closeButton>
              <Modal.Title>

                <h1>Login</h1>


              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" className="text-muted" label="We'll never share your email with anyone else." />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>



              </Form>


            </Modal.Body>

          


          </Modal>

          <Button id='signUpBtn' onClick={() => setModal2Visible(true)}>Sign Up</Button>

          <Modal id='Modal2' show={modal2Visible} onHide={() => setModal2Visible(false)}>
            <Modal.Header closeButton>
              <Modal.Title>

                <h1>Sign Up</h1>


              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
              <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="name" placeholder="First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="name" placeholder="Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Phone Number" />
                </Form.Group>

                

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" className="text-muted" label="We'll never share your email with anyone else." />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>



              </Form>


            </Modal.Body>

          


          </Modal>







        </Nav>
<<<<<<< HEAD
      </Navbar>

    </div>


=======

        

        

      </Navbar>

    </div>


>>>>>>> a6adcb8b16fa984f376dbbc0ecfc11f73831ed18
  );


}

export default Navigation;
