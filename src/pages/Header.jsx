import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.gif'
import { Menu, X } from 'lucide-react'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="px-5 py-2 w-full flex justify-between items-center text-amber-50 bg-gray-900 text-xl shadow-lg">

      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img className="h-14 w-16" src={logo} alt="Logo" />
        <div className="text-emerald-400 font-semibold leading-5">
          <h1 className="text-xl">Verbuvate</h1>
          <h1 className="text-sm">Smart Translator</h1>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-12 font-semibold">
        <Link
          to="/"
          className="hover:text-emerald-400 transition duration-300 hover:scale-105"
        >
          Home
        </Link>

        <Link
          to="/translator"
          className="hover:text-emerald-400 transition duration-300 hover:scale-105"
        >
          Translator
        </Link>

        <Link
          to="/dashboard"
          className="hover:text-emerald-400 transition duration-300 hover:scale-105"
        >
          Dashboard
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={toggleNavbar} className="text-amber-50 p-2">
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <div className="animate-slideDown flex flex-col w-48 ml-auto bg-gray-800 mt-3 rounded-md p-4 gap-y-3 shadow-xl border border-gray-700">

            <Link
              onClick={() => setIsOpen(false)}
              to="/"
              className="text-amber-100 w-full py-1 rounded hover:bg-gray-700 hover:text-emerald-400 transition"
            >
              Home
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              to="/translator"
              className="text-amber-100 w-full py-1 rounded hover:bg-gray-700 hover:text-emerald-400 transition"
            >
              Translator
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              to="/dashboard"
              className="text-amber-100 w-full py-1 rounded hover:bg-gray-700 hover:text-emerald-400 transition"
            >
              Dashboard
            </Link>

          </div>
        )}
      </div>
    </div>

  )
}

export default Header