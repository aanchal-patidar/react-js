function customRender(reactElement,Container)
{
    /* 
    const domElement = document.createElement(reactElement.target)
    domElement.innerHTML = reactElement.childern
    domElement.setAtteribute('href',reactElement.props.href)
    domElement.setAtteribute('target',reactElement.props.target)
    Container.append(domElement)
    */

    // constomize way of writing the code
   const domElement = document.createElement(reactElement.target)
   domElement.innerHTML = reactElement.childern
   for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
        
    }
    Container.appendChild(domElement)
   }


const reactElement = {
    type : 'a',
    props: {
        href : 'https://google.com',
        target : _blank
    },
    childern : 'Click here!'
}
const mainContainer = document.querySelector('#root')
customRender(reactElement , mainContainer)
