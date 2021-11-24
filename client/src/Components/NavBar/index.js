import React from 'react';
import '../NavBar/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Navigation() {
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
          <Nav.Link href = "login">Login</Nav.Link>
          <Nav.Link href = "signup">Sign up</Nav.Link>
        </Nav>
        </Navbar>
        
      </div>
    
  );
}

export default Navigation;
