import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Matchup from './pages/Matchup';
// import Vote from './pages/Vote';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <>
    <Router>
      
      
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm}/>
      </Switch>
      
    </Router>
  </>


  );
}

export default App;
