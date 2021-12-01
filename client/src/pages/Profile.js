import React, { useState, useEffect } from 'react';

import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  // const [profileData, setProfileData] = useState([]);
  // const [contactId, setContactId] = useState('')
  // const [contactData] = useMutation()
  // useEffect(() => {
  //   return () =>  contactId(contactInput)
  // })
  const { me } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(QUERY_ME,

    {
      variables: { me: me },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || {};

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === me) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div class="section">
      <h4>Update User Info</h4>
      <form class="form update-user-form">
        <div class="form-group">
          <label for="userFirstName-update">First Name:</label>
          <input class="form-input" type="text" id="userFirstName-update" />
        </div>
        <div class="form-group">
          <label for="userLastName-update">Last Name:</label>
          <input class="form-input" type="text" id="userLastName-update" />
        </div>
        <div class="form-group">
          <label for="user-email">Email:</label>
          <input class="form-input" type="text" id="user-email" />
        </div>
        <div class="form-group">
          <label for="user-PrimaryPhone">Primary Phone:</label>
          <input class="form-input" type="text" id="user-PrimaryPhone" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="submit">Update Contact's Info</button>
        </div>
      </form>
    </div>

  );
};

export default Profile;
