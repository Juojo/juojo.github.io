import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from './Contact.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    
  </BrowserRouter>,
)
