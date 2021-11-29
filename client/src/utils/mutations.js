import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $password: String!, $email: String!, $contacts: ContactInput!){
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
