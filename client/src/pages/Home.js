import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
// need to import model
import { getAllMatchups } from '../utils/api';
import { EmergencyButton } from '../Components/EmergencyButton';
//import { getAllMatchups, sendMessage } from '../utils/api';

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

  //Emergency Button click function 

  const handleClick = (event) => {
    event.preventDefault();
    console.log('SEND HELP');
    //calling api from the utils api file to send a message to the user 
    // sendMessage().then(response => {
    //   console.log("Message sent sucessfully", response);
    // }).catch(err => {
    //   console.log("Error Sendin an API message", err)
    // })

  }

  return (
    <div className='Button align' >
      {/* <button onClick={() => console.log('SEND HELP')} type="button" className='btn btn--danger--solid btn--xlarge'>HELP</button> */}
      <EmergencyButton
        buttonSize="btn--xlarge"
        buttonStyle="btn--danger--solid"
        onClick={handleClick}
      />
    </div>

  )
};

export default Home;
