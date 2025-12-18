import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Farm from'./farm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
    <My name />
     <Farm animal='goat' type='human' crops='ggg'/>
    */}
   < App />
  </StrictMode>
)
