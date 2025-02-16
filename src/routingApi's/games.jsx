import React from "react";
import { NavLink } from "react-router-dom";

export default function Games(){
    return (
        <div className="w-[500px] h-[50px]">
            <ul className="flex flex-col mt-4">
                <li>
                    <NavLink to='/'><center>games Page</center></NavLink>
                </li>
            </ul>
        </div>
    );
}