import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// need to import model
import { getAllMatchups } from '../utils/api';

const Home = () => {
  // need to bring in the model name
  const [matchupList, setMatchupList] = useState([]);

  useEffect(() => {
    // need to bring in the model and get all the models
    const getMatchupList = async () => {
      try {
        const res = await getAllMatchups();
        if (!res.ok) {
          throw new Error('No list of matchups');
        }
        const matchupList = await res.json();
        setMatchupList(matchupList);
      } catch (err) {
        console.error(err);
      }
    };
    // get model list
    getMatchupList();
  }, []);

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
<<<<<<< HEAD
        <h1>Welcome to Alert Me!</h1>
=======
        <h1>button</h1>
>>>>>>> main
      </div>
      <div className="card-body m-5">
        <h2>Please login to your account:</h2>
        <ul className="square">
          {matchupList.map((matchup) => {
            return (
              <li key={matchup._id}>
                <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                  {matchup.tech1} vs. {matchup.tech2}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Button</h2>
        <Link to="/matchup">
<<<<<<< HEAD
          <button className="btn btn-lg btn-danger">Create Profile!</button>
=======
          <button className="btn btn-lg btn-danger">button</button>
>>>>>>> main
        </Link>
      </div>
    </div>
  );
};

export default Home;
