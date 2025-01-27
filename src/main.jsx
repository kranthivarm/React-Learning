import React from 'react'
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-runtime.js'
import "./index.css"

import App from './App'


createRoot(document.getElementById('root')).render(
    <App text="Tailwind"/>
)

// //beginging 
// import { createElement } from 'react'
// import { createRoot } from 'react-dom/client'
// import CounterApp, {App} from './App.jsx'

// // import {jsx as _jsx} from 'react/jsx-runtime.js'

// const additionaltext="additional text"
// // to create an reactElement
// const reactEle=createElement(
//   'a',//tag
//   {href:"https://google.com",target:'_blank'},//attributes
//   'click to google',//text,
//   additionaltext
// )

// const exElement=(<a href="https://google.com" target='_blank'>click to google</a>)
// //ReactDom.createRoot
// createRoot(document.getElementById('root')).render(
//   // // <StrictMode>// all UI will be executed twice in strictMode
//     // <Appimported />  //we can use Appimported() as it is function
//   // // </StrictMode>5

//     <CounterApp />
//     // exElement
//     // reactEle
// )