import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EmergencyButton } from '../Components/EmergencyButton';
import { SwitchButton } from '../Components/SwitchPageButton';
import Navigation from '../Components/NavBar'
import ContentBoxes from '../Components/Boxes';
import "../index.css"
import {sendMessage} from '../utils/api'; 


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
    
    const reply = sendMessage(); 
    console.log(reply); 

    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log("twilio sent a message ", data);
        } else {
         console.log("failed to send message", data); 
        }
      });
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
      <Navigation sticky="top" />
      <div className=" min-100-vh bg-dark flex-column justify-center align-center">


        {/* <button onClick={() => console.log('SEND HELP')} type="button" className='button button--danger--solid button--xlarge'>HELP</button> */}
        <EmergencyButton
          buttonSize="button--medium"
          buttonStyle="button--danger--solid"
          onClick={handleEmergencyClick}
        />




      </div>

      <div >
        <ContentBoxes>contents</ContentBoxes>
      </div>
      <div className="flex-row align-right bg-dark ">
        <SwitchButton
          buttonSize="button--medium"
          buttonStyle="button--warning--outline"
          onClick={handleSwitchClick}></SwitchButton>
      </div>

    </>



  );
};

export default Home;
