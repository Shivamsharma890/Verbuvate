import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Trator from './Components/Translator'
import Dash from './Components/Dashboard'
import Header from './pages/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/translator' element={<Trator />} />
        <Route path='/dashboard' element={<Dash />} />
      </Routes>

      <Footer />
    </div>

  )
}

export default App
