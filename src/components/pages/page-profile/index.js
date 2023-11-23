import * as React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const PageProfile = () => {

    const [profile, setProfile] = useEffect();

    async function getProfile()
    {
        await axios.get('http://localhost:8050/api/v1/users/me')
        .then (function (response)
        {
            setProfile(response)
        })
        .catch (function (error) 
        {
            console.log(error)
            setProfile(null)
        })
    }

    useEffect(() => {
        getProfile();
    })

    return(
        <div>{profile === null ? JSON.stringify(profile) : 'err'}</div>
    )

};