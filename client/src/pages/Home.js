import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// need to import model
import { getAllMatchups } from '../utils/api';
import { EmergencyButton } from '../Components/EmergencyButton'
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
    <div className='Button'> 
      <button onClick={() => console.log('SEND HELP')} type="button" className='btn btn--danger--solid btn--large'>HELP</button>
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Alert Me!</h1>
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
          <button className="btn btn-lg btn-danger">Create Profile!</button>
        </Link>
      </div>
    </div>

    // <div className="card bg-white card-rounded w-50">
    //   <div className="card-header bg-dark text-center">
    //     <h1>Welcome to Tech Matchup!</h1>
    //   </div>
    //   <div className="card-body m-5">
    //     <h2>Here is a list of matchups you can vote on:</h2>
    //     <ul className="square">
    //       {matchupList.map((matchup) => {
    //         return (
    //           <li key={matchup._id}>
    //             <Link to={{ pathname: `/matchup/${matchup._id}` }}>
    //               {matchup.tech1} vs. {matchup.tech2}
    //             </Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    //   <div className="card-footer text-center m-3">
    //     <h2>Ready to create a new matchup?</h2>
    //     <Link to="/matchup">
    //       <button className="btn btn-lg btn-danger">Create Matchup!</button>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Home;
