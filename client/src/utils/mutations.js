import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
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
export const UPDATE_PROFILE = gql`
   mutation updateProfile($name: String, $password: String, $email: String) {
     updateProfile(name: $name, password: $password, email: $email) {
       token
       profile {
         _id
         name
       }
     }
   }
 `;
export const DELETE_PROFILE = gql`
   mutation deleteProfile($_id: ID) {     
     deleteProfile(_id: $_id) {
       token
       profile {
         _id
         name
       }
     }
   }
 `;
 export const DELETE_CONTACT = gql`
   mutation deleteContact($contactData: ContactInput) {
     deleteContact(contactData: $ContactInput) {
      _id
      name
      password
      email
      contacts
     }
   }
 `;
 export const UPDATE_CONTACT = gql`
   mutation deleteContact($contactData: ContactInput) {
  deleteContact(contactData: $ContactInput) {
    _id
    name
    password
    email
    contacts
   }
 }
 `;
 export const ADD_CONTACT = gql`
   mutation addContact($contactData: ContactInput) {
     addContact(contactData: $ContactInput) {
      _id
      name
      password
      email
      contacts
     }
   }
 `;
