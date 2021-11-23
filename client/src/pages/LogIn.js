import React from 'react';
import { useQuery } from '@apollo/client';
// need the name of the components that it is coming from
import ProfileList from '../components/ProfileList';
// need the query name
import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here are your emergency contacts"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
