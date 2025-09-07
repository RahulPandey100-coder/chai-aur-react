import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'
import './index.css'
import React from 'react'
function MyApp(){
  return(
    <div>
      <h1>Custom APP | By Rahul Coder</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">visit google</a>
)

const reactElement= React.createElement(
  'a',
  {
    href: 'https://google.com', target: '_blank'
  },
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
   <App/>
)
