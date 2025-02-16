import React from "react";
// import { useState } from "react";
import '../index.css'


export default function CardFun({source="null",dim={height:"40px",width:"20px"}}){
    // console.log('prop',source)
    return (
        <>
            <div style={{ height: dim.height ,width:dim.width}}>
                <img src={source} />
            </div>

        </>
    );
}