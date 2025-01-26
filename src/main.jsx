import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Appimported from './App.jsx'

// to create an reactElement
const reactEle=React.createElement(
  'a',//tag
  {href:"https://google.com",target:'_blank'},//link
  'click to google'
)

const exElement=(<a href="https://google.com" target='_blank'>click to google</a>)
//ReactDom.createRoot
createRoot(document.getElementById('root')).render(
  // // <StrictMode>// all UI will be executed twice in strictMode
  //   <Appimported />  //we can use Appimported() as it is function
  // // </StrictMode>


    // exElement
    reactEle
)
