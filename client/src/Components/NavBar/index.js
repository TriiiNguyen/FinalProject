import React, { useState } from 'react';
import '../NavBar/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown, Button, Modal, Form } from 'react-bootstrap'
import {useMutation} from "@apollo/client"
import {ADD_PROFILE} from "../../utils/mutations"

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
  const [addProfile]= useMutation(ADD_PROFILE)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contacts: {
      firstName: "",
      lastName: "",
      relationship: "",
      phoneNumber: "",
      email: ""
    }
  })
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
    await addProfile({
      variables: {...formData}
    })
    
  }
  return (

    <div className="navBar sticky">
      <Navbar bg="success" variant="dark"
        sticky="top">
        <Navbar.Brand>
          Alert Me
        </Navbar.Brand>

        <Nav>
          <NavDropdown title="Profile">
            <NavDropdown.Item href="resources">Resources</NavDropdown.Item>
            <NavDropdown.Item href="incidentLog">Incident log</NavDropdown.Item>
            <NavDropdown.Item href="./client/pages/Profile.js">Profile</NavDropdown.Item>
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
              <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>Contact First Name</Form.Label> 
                  <Form.Control type="name" placeholder="Contact First Name" value= {formData.contacts.firstName} onChange= {(event) => setFormData({...formData, contacts:{...formData.contacts,firstName: event.target.value}})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Contact Last Name</Form.Label>
                  <Form.Control type="name" placeholder="Contact Last Name" value= {formData.contacts.lastName} onChange= {(event) => setFormData({...formData, contacts:{...formData.contacts,lastName: event.target.value}})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhoneNumber">
                  <Form.Label>Contact Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Contact Phone Number" value= {formData.contacts.phoneNumber} onChange= {(event) => setFormData({...formData, contacts:{...formData.contacts,phoneNumber: event.target.value}})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Contact Email address</Form.Label>
                  <Form.Control type="email" placeholder="Contact Enter email" value= {formData.contacts.email} onChange= {(event) => setFormData({...formData, contacts:{...formData.contacts,email: event.target.value}})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Contact Relationship</Form.Label>
                  <Form.Control type="name" placeholder="Contact Relationship" value= {formData.contacts.relationship} onChange= {(event) => setFormData({...formData, contacts:{...formData.contacts,relationship: event.target.value}})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Name" value= {formData.name} onChange= {(event) => setFormData({...formData, name: event.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value= {formData.email} onChange= {(event) => setFormData({...formData, email: event.target.value})}/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value= {formData.password} onChange= {(event) => setFormData({...formData, password: event.target.value})} />
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

        

        

      </Navbar>

    </div>


  );


}

export default Navigation;
