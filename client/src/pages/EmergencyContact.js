import React from 'react'
import { useMutation, useQuery, gql } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'

const EmergencyContact = () => {

    const { loading, data } = useQuery(QUERY_ME);
    const userData = data?.me || {};
    // const [removeContact, { error }] = useMutation(REMOVE_CONTACT);
    
    return(
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <Contacts
                            profiles={userData}
                            title="Your Emergency Contacts"
                        />
                    )}
                </div>
            </div>
        </main>
    )
    
}

export default EmergencyContact