// import { useState } from "react";
// import Learn1 from "./Learn1.jsx";
import React from "react";
import { useState } from "react";
import CardFun from './components/card.jsx'
// @import "tailwindcss";

export default function App({text="xxx"}){
    const propDim={
        height:"50px",
        width:"50px"
    };
    return (
        <>
            <h1 className="bg-pink-300 ">{text}</h1>
            <CardFun 
                source="https://imgs.search.brave.com/6vlvJOkXbwclM-_oS2r0WSD0qstDH2APVGhM5W8G-wo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ViLzlh/LzBlL2ViOWEwZWE1/M2IxZTI0MTFhODdl/NzRkMzRhNDE0ZTI4/LmpwZw" 
                dim={propDim}
            />
        </>
    );
}


// export function App() { 
//   console.log("strict mode prints to times as it excutes everything twice")
//   const evaluate="multiple elements";
//   const evaluatefun=()=>{
//     return "sjkc1;"
//   }
//   return (
//     //fragments
//     <>
//       <Learn1 />      
//       <h1>{evaluatefun()} can be sent with help of fragments</h1>
      
//     </>
//   )
// }


// function cntIncre(setCounter){
//   setCounter(count=>count+1);  
// }

// export default function CounterApp(){
//   let [count,setCounter]=useState(0);
//   function cntDec(){
//     setCounter(count-1)
//     setCounter(count-1)
//     setCounter(count-1)
//     // it doesn't change the state immediately
//     setCounter(count=>count-1)
//     setCounter(count=>count-1)
//     setCounter(count=>count-1)
    
//   }
//   // let count=0;
//   return (
//     <>
//     <center>
//       <p>{count}</p>
//     </center>
//     <br></br>
//     <button     
//       onClick={
//         ()=>{
//         cntIncre( setCounter)}
//       }
//     >Increment</button>
//     <br></br>
//     <button 
//       onClick={
//         ()=>cntDec(setCounter)
//       }
//     >Decrement</button>
//     </>
//   )
// }

// // export default App//it is also correct