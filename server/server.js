//import api from '../client/src/utils/api';
//const http = require('http');
const express = require('express');
//const MessagingResponse = require('twilio').twiml.MessagingResponse;
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
// Import `authMiddleware()` function to be configured with the Apollo Server
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // Add context to our server so data from the `authMiddleware()` function can pass data to our resolver functions
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//setting up Message routes 


app.post('/api/messages', (req, res) => {
  //call the send_sms.js file 
  console.log("Calling the express side to send message ");
  require('dotenv').config();
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  //console.log(process.env.TWILIO_ACCOUNT_SID);
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      body: 'This is a TEST for the Danger App!!',
      from: '+16108970733',
      to: '+17147370501'
    })
    .then(message => {
      console.log(message.sid);
      return message;
    });

});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
