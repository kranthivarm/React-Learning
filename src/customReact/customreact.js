function customRender(reactElement ,mainContainer){
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    for(const prop in reactElement.props){
        if(prop==='children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    // //wrong
    // // container.appendChild(
    // //     <div>
    // //      <head>custom component below acts anchor tag</head>            
    // //     </div>
    // // )
    mainContainer.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
const mainContainer=document.getElementById('root')
// const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)
//function call