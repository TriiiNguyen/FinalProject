import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
// import Matchup from './pages/Matchup';
// import Vote from './pages/Vote';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/profile:profileId" component={Profile} />
    </Router>
  );
}

export default App;
