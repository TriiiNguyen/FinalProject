import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignupForm = () => {
  const [addProfile, { error }] = useMutation(ADD_PROFILE);
  // // set initial form state
  const [userFormData, setUserFormData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    emergencyFirstName: '', 
    emergencyLastName: '', 
    emergencyRelationship: '', 
    emergencyPhoneNumber: '',
    emergencyEmail: ''
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (error) {
      setShowAlert(true)
    } else {
      setShowAlert(false);
    }
  }, [error])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("handle input Signup", name, value);
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addProfile({
        variables: { ...userFormData }
      });
      console.log("data", data);

      Auth.login(data.addProfile.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
    name: '', 
    email: '', 
    password: '', 
    emergencyFirstName: '', 
    emergencyLastName: '', 
    emergencyRelationship: '', 
    emergencyPhoneNumber: '',
    emergencyEmail: ''
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form
        noValidate validated={validated}
        onSubmit={handleFormSubmit}
      >
        {/* show alert if server response is bad */}
        <Alert
          dismissible onClose={() => setShowAlert(false)}
          show={showAlert} variant='danger'
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='name'>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='name'
            onChange={handleInputChange}
            value={userFormData.name}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='emergencyFirstName'>Emergency Contact's First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='contact first name'
            name='emergencyFirstName'
            onChange={handleInputChange}
            value={userFormData.emergencyFirstName}
            required
          />
          <Form.Control.Feedback type='invalid'>first name is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='emergencyLastName'>Emergency Contact's Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='contact last name'
            name='emergencyLastName'
            onChange={handleInputChange}
            value={userFormData.emergencyLastName}
            required
          />
          <Form.Control.Feedback type='invalid'>last name is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='emergencyPhoneNumber'>Emergency Contact's Phone Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='contacts phone number'
            name='emergencyPhoneNumber'
            onChange={handleInputChange}
            value={userFormData.emergencyPhoneNumber}
            required
          />
          <Form.Control.Feedback type='invalid'>Phone Number is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='emergencyEmail'>Contact's Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='contact email'
            name='emergencyEmail'
            onChange={handleInputChange}
            value={userFormData.emergencyEmail}
            required
          />
        
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='emergencyRelationship'>Relationship</Form.Label>
          <Form.Control
            type='text'
            placeholder='relationship'
            name='emergencyRelationship'
            onChange={handleInputChange}
            value={userFormData.emergencyRelationship}
            required
          />
        </Form.Group>
        
        <Button
          disabled={!(userFormData.name && userFormData.email && userFormData.password && userFormData.emergencyFirstName && userFormData.emergencyLastName && userFormData.emergencyRelationship && userFormData.emergencyPhoneNumber && userFormData.emergencyEmail)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
