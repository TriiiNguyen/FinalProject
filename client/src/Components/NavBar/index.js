import React, { useState } from 'react';
import '../NavBar/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap'
import { useMutation } from "@apollo/client"
import { ADD_PROFILE } from "../../utils/mutations"
import Auth from '../../utils/auth';
import SignUpForm from './SignUp';
import LoginForm from './LogIn';
import Profile from '../../pages/Profile'

function Navigation() {
  const [modalVisible, setModalVisible] = useState(false)
  const [modal2Visible, setModal2Visible] = useState(false)
  const [addProfile] = useMutation(ADD_PROFILE)
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
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formData)
  //   //   try{
  //   //   await addProfile({
  //   //     variables: {...formData}
  //   //   })
  //   // } catch(e) {
  //   //   console.error(e)
  //   // }

  //   try {
  //     const { data } = await addProfile({
  //       variables: { ...formData }
  //     });
  //     console.log("data", data);

  //     Auth.login(data.addProfile.token);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   setFormData({
  //     name: "",
  //     email: "",
  //     password: "",
  //     contacts: {
  //       firstName: "",
  //       lastName: "",
  //       relationship: "",
  //       phoneNumber: "",
        // email: "",
  //     }
  //   });
  // };
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            AlertMe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
                Back to Home Page
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/profile'>
                    See your Contacts
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setModalVisible(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={modalVisible}
        onHide={() => setModalVisible(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setModalVisible(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setModalVisible(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );


}

export default Navigation;
