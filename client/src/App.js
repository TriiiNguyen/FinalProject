import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import EmergencyContact from './pages/EmergencyContact'
// import Matchup from './pages/Matchup';
// import Vote from './pages/Vote';
import SignupForm from './pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
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
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignupForm} />
      </Switch>
    </Router>
    </ApolloProvider>
  );
}

export default App;
