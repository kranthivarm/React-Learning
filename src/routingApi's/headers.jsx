import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <div className="h-[50px] max-w-0">            
                <ul className="flex  lg:space-x-8 mt-4">
                    <li>
                        <NavLink to='/'
                            className={({isActive})=>`${isActive ? "text-amber-400" :"text-gray-400"}`}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/games'
                            className={({isActive})=>`${isActive ? "text-amber-400" :"text-gray-400"}`}
                        >games</NavLink>
                    </li>
                </ul>
        </div>
    );
}