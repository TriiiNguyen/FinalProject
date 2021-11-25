import React, {useState} from 'react';
import '../NavBar/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown, Button, Modal } from 'react-bootstrap'


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
          <Button onClick={() => setModalVisible(true)}>Login/Sign Up</Button>
          <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
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
          </Modal>
        </Nav>
        </Navbar>
        
      </div>

    
  );


}

export default Navigation;
