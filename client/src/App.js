import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Matchup from './pages/Matchup';
// import Vote from './pages/Vote';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      
      <Route exact path="/" component={Home} />
      
    </Router>
  );
}

export default App;
