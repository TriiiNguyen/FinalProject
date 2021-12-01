import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $password: String!, $email: String!, $contacts: [ContactInput]!){
  addProfile(name: $name, password: $password, email: $email, contacts: $contacts){
    token
    profile{
      _id
      name
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_CONTACT = gql`
  mutation addContact ($contactData:ContactInput) {
    addContact(contactData: $contactData){
      _id
      name
      contacts {
        contactId
        firstName
        lastName
        relationship
        email
      }

    }
  }
`
//delete contact
export const DELETE_CONTACT = gql`
  mutation deleteContact($contactId: contactId) {
    deleteContact(contactId: $contactId) {
      _id
      name
      contacts {
        contactId
        firstName
        lastName
        relationship
        email
      }
    }
  }
`

//update contact
export const UPDATE_CONTACT = gql`
  mutation updateContact($contactData: contactInput) {
    updateContact(contactData: $contactData) {
      _id
      name
      contacts {
        contactId
        firstName
        lastName
        relationship
        email
      }
    }
  }
`
//update user
export const UPDATE_PROFILE = gql`
  mutation updateProfile($name: String!, $password: String!, $email: String!, $contacts: ContactInput!){
  updateProfile(name: $name, password: $password, email: $email, contacts: $contacts){
    _id
      name
      contacts {
        contactId
        firstName
        lastName
        relationship
        email
      }
  }
}
`;
