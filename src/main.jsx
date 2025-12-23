import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <App />
  </StrictMode>

)
