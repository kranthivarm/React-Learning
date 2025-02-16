//Redux

import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
import ReduxApp from './ReduxContextApi/app.jsx'
createRoot(document.getElementById('root')).render(
    <ReduxApp/>
)
// //Routing
// import React from 'react'
// import { createRoot } from 'react-dom/client'
// // import {jsx as _jsx} from 'react/jsx-runtime.js'
// import "./index.css"

// import App from './App'

// import SliderPage from './pswdGen/slider'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import CombinedPage from './routingApi\'s/combinedPage'
// import HomePage from './routingApi\'s/homepage'
// import Games from './routingApi\'s/games'
// const routers= createBrowserRouter(
//     createRoutesFromElements(
//         <Route path ='/' element={<CombinedPage/>}>
//             <Route path ='' element={<HomePage/>}/>
//             <Route path='games' element={<Games/>}/>
//         </Route>
//     )
// )

// createRoot(document.getElementById('root')).render(
//     // <App text="Tailwind"/>
//     // <SliderPage/>
//     <RouterProvider router={routers} />
// )






// // //beginging 
// // import { createElement } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import CounterApp, {App} from './App.jsx'

// // // import {jsx as _jsx} from 'react/jsx-runtime.js'

// // const additionaltext="additional text"
// // // to create an reactElement
// // const reactEle=createElement(
// //   'a',//tag
// //   {href:"https://google.com",target:'_blank'},//attributes
// //   'click to google',//text,
// //   additionaltext
// // )

// // const exElement=(<a href="https://google.com" target='_blank'>click to google</a>)
// // //ReactDom.createRoot
// // createRoot(document.getElementById('root')).render(
// //   // // <StrictMode>// all UI will be executed twice in strictMode
// //     // <Appimported />  //we can use Appimported() as it is function
// //   // // </StrictMode>5

// //     <CounterApp />
// //     // exElement
// //     // reactEle
// // )