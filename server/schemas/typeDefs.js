const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String!
    email: String
    password: String
    contacts: [Contact]
  }

  type Contact {
    _id: ID!
    firstName: String!
    lastName: String!
    relationship: String
    phoneNumber: String
    email: String
  }

  input ContactInput {
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
    # profiles: [Profile]!
    # profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, password: String!, email: String!, contacts: [ContactInput]!): Auth
    login(email:String!, password: String!): Auth
    updateProfile(name: String, password: String, email: String): Profile
    deleteProfile(_id: ID): Auth
    addContact(contactData: ContactInput): Profile
    deleteContact(contactId: ID!): Profile
    updateContact(contactData: ContactInput): Profile
  }
`;

module.exports = typeDefs;
