import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home.jsx'
import { About } from './pages/about.jsx'
import { Contact } from './pages/contact.jsx'
import { Header } from './pages/header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Header />
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
  </Router>
  </React.StrictMode>,
)

//Primary Color: #001F3F (Navy Blue)
//Secondary Color: #FFD700 (Gold)
//Accent Color: #FF4500 (Orange Red)
//Background Color: #F5F5F5 (Light Gray)
