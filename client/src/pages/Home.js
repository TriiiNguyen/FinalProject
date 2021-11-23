import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  EmergencyButton  from '../Components/EmergencyButton';
import  SwitchButton  from '../Components/SwitchPageButton';
import Navigation from '../Components/NavBar'
const Home = () => {
  // need to bring in the model name
  // const [matchupList, setMatchupList] = useState([]);

  // useEffect(() => {
  //   // need to bring in the model and get all the models
  //   const getMatchupList = async () => {
  //     try {
  //       const res = await getAllMatchups();
  //       if (!res.ok) {
  //         throw new Error('No list of matchups');
  //       }
  //       const matchupList = await res.json();
  //       setMatchupList(matchupList);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   // get model list
  //   getMatchupList();
  // }, []);

  //Emergency Button click function 

  const handleEmergencyClick = (event) => {
    event.preventDefault();
    console.log('SEND HELP');
    //calling api from the utils api file to send a message to the user 
    // sendMessage().then(response => {
    //   console.log("Message sent sucessfully", response);
    // }).catch(err => {
    //   console.log("Error Sendin an API message", err)
    // })

  }
  
  const handleSwitchClick = (event) => {
    event.preventDefault();
    console.log('Switch To News Page')
  }

  return (
  <>
    <div className='Button align' >
      {/* <button onClick={() => console.log('SEND HELP')} type="button" className='btn btn--danger--solid btn--xlarge'>HELP</button> */}
      <EmergencyButton
        buttonSize="btn--xlarge"
        buttonStyle="btn--danger--solid"
        onClick={handleEmergencyClick}
      />
    </div>
   
    <div>
      <SwitchButton
        buttonSize="btn--medium"
        buttonStyle="btn--warning--outline"
        onClick={handleSwitchClick}></SwitchButton>
    </div>
  </>
  
    <>
    <Navigation/>
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
    </div>
    </>
    
  );
};

export default Home;
