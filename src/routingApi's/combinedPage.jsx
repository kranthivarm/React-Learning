import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "./headers";
export default function CombinedPage(){
    return (
        <>
        <Headers/>
        <Outlet/>
        <div>
            <br></br>
            <br></br>
            <br></br>
            <center><p>bottom</p></center>
        </div>
        </>
    );
}