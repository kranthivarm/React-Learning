import React ,{useContext, useState} from "react";
import UserContext from "../context/userContext";

export default function Login(){
    const [username,setUserName]=useState('')
    const [pasw,setPasw]=useState('')

    const {setUser}=useContext(UserContext)
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,pasw})
    }
    return (
        <>
            <h1>Login</h1>
            <input 
                value={username}
                onChange={(e)=>setUserName(e.target.value)}
                type="text" placeholder="username"
            />
            <br></br>
            <input
                type="text" placeholder="password"
                value={pasw} 
                onChange={(e)=>setPasw(e.target.value)}
            />
            <br></br>
            <button type="button" 
                onClick={handleSubmit}
            >Submit</button>
        </>
    );
}