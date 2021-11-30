import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmergencyContact from './pages/EmergencyContact'
// import Matchup from './pages/Matchup';
// import Vote from './pages/Vote';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
   ApolloClient,
   InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      
      <Route exact path="/" component={Home} />
      <Route exact path = "/emergencyContact" component={EmergencyContact} />
      
    </Router>
    </ApolloProvider>
  );
}

export default App;
