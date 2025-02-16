import React, { useCallback, useEffect, useRef,useState } from "react";
// import { useState } from "react";
const list = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789" , "!@#$%^&*()-_=+[]{}|;:,.<>?"]
export default function SliderPage(){
    let [psd,setPsd]=useState("i love U")
    // console.log(psd)
    let [alpha,setAlpha]=useState(false)
    let [num,setNum]=useState(false)
    let [char,setChar]=useState(false)
    let [len,setLength]=useState(8);
    const passGen =useCallback(()=>{  
        console.log(psd)    
        let password="";
        for(let i=0;i<len;i++){
            let x=4;
            if(alpha && num && char)x=Math.floor(Math.random()*3);
            else if(alpha && num)x=Math.floor(Math.random()*2);
            else if(alpha && char){
                x=Math.floor(Math.random()*2);
                if(x==1)x=2;
            }
            else if(char && num){
                x=Math.floor(Math.random()*2);
                (x==0)?x=1:x=2;
            }
            else if(alpha)x=0
            else if(num)x=1
            else if(char)x=2
            console.log(x)
            if(x<3)password+=list[x][(Math.floor(Math.random()*(list[x].length)))];
        }
        setPsd(psd=>password)

        return ()=>{}//cleaner function;
    },[alpha,char,num]
    //The dependency array in useCallback determines when the function should be re-created. 
    // It helps optimize performance by preventing unnecessary re-renders and avoiding unnecessary function recreations.

    // it means it doesn't call function only recreate the definition of fun
    )
    useEffect(()=>{
        passGen()
    },[alpha,char,num,passGen]);
    //whenever elements in dependency arry changed the function will be called 
    
    
    //copy button 
    const psdRefForCopy =useRef(null)

    const  copyPsdFun=useCallback(
        ()=>{
            psdRefForCopy.current?.select()
            psdRefForCopy.current?.setSelectionRange(0,3)
            window.navigator.clipboard.writeText(psd)//in this we r directly copying ps to clipboard
        },[psd])


    return (        
        <>
        <div className=" h-400 w-400 bg-pink-300">
            <div className="flex">
                <div className="h-20 bg-white ">
                    <input type="text" value={psd} ref={psdRefForCopy}  onChange={()=>{}}></input>
                </div>

                <div className="w-[min(60px,100%)] h-[50px] rounded-md p-2 border-2 bg-purple-200">
                    <button onClick={()=>copyPsdFun()}>Copy</button>
                </div>
                
            </div>

            <div className="flex flex-row">
                <div className="flex bg-green-400 h-20 w-10"></div>
                <div className="flex bg-red-400 h-20 w-100">
                    <button  className="bg-amber-100  w-30 border-2 rounded-md m-2 p-3" 
                        onClick={()=>{
                            setAlpha(alpha=>!alpha);
                            // passGen()
                        }} >alpha</button>
                    <button className="bg-amber-100  w-30 border-2 rounded-md m-2 p-3" 
                        onClick={()=>{
                            setNum(num=>!num);
                            // passGen()
                        }} >numbers</button>
                    <button className="bg-amber-100  w-30 border-2 rounded-md m-2 p-3" 
                         onClick={()=>{
                            setChar(char=>!char)
                            // passGen()
                        }} >Characters </button>
                </div>
            </div>
        </div>
        </>
    );
}