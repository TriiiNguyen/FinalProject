import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'

const EmergencyContact = () => {

    const { loading, data } = useQuery(QUERY_ME)
    const userData = data?.me || {};
    // const [removeContact, { error }] = useMutation(REMOVE_CONTACT);


    
}

export default EmergencyContact