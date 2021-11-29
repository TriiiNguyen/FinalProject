const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    password: String
    email: String
    contacts: [Contact]
  }
  type Contact {
    contactId: ID
    firstName: String
    lastName: String
    relationship: String
    phoneNumber: String
    email: String
  }
  input ContactInput {
    contactId: String
    firstName: String
    lastName: String
    relationship: String
    phoneNumber: String
    email: String
  }
  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, password: String!, email: String!): Auth
    login(email:String!, password: String!): Auth
    updateProfile(name: String, password: String, email: String): Auth
    deleteProfile(_id: ID): Auth
    addContact(contactData: ContactInput): Profile
    deleteContact(contactData: ContactInput): Profile
    updateContact(contactData: ContactInput): Profile
  }
`;

module.exports = typeDefs;
