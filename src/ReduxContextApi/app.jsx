import React from "react";
import UserContextProvider from "./context/userContextProvider";
import Login from "./ReduxComponents/login";
import Profile from "./ReduxComponents/profile";

export default function ReactApp(){
    return (
        <UserContextProvider>
            <center><h1>Redux</h1></center>
            <Login/>
            <Profile/>
        </UserContextProvider>
    );
}