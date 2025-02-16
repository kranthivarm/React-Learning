import React ,{useContext,useState}from 'react'
import UserContext from '../context/userContext'

export default function (Profile){
    const {user}=useContext(UserContext)
    if(!user)return <h1>Login chey bey</h1>
    return (
        <>
        <h1>alakadhu {user.username}</h1>
        </>
    )
}