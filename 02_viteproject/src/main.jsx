import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
  return(
    <div>
      <h2>This is MyApp</h2>
    </div>
  )
}

// const reactElement = {
//   type : 'a',
//   props: {
//       href : 'https://google.com',
//       target : _blank
//   },
//   childern : 'Click here!'
// }
const anotherElement = (
  <a href="https://google.com" target='_blank'>click to google link</a>
)

const anotherUsername = "Aanchal"
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target : '_blank'
  },
  'Go to the google link',
  anotherUsername
)
ReactDOM.createRoot(document.getElementById('root')).
render( 
    // anotherElement
    // reactElement
    // MyApp()  // but this is not good pratice always used angular braces
)
