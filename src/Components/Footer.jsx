import React from 'react'
import logo from '../assets/logo1.gif'
import facek from '../assets/f5.png'
import insta from '../assets/insta.png'
import twir from '../assets/t1.png'
import ytb from '../assets/y2.png'
import git from '../assets/g1.png'


const Footer = () => {
  return (
    <div className="bg-black p-3 border-t-2 border-white">
      <div className="flex justify-between pr-10 pl-5 flex-wrap gap-y-10">

        {/* Logo + Social Icons */}
        <div className="w-full sm:w-fit p-5 py-7 text-center sm:text-left">
          <img className="h-18 w-20 mx-auto sm:mx-0" src={logo} alt="Logo" />

          <div className="flex gap-8 sm:gap-14 pt-5 flex-wrap justify-center sm:justify-start">
            <img className="h-8 w-8" src={facek} alt="facebook" />
            <img className="h-8 w-8" src={insta} alt="insta" />
            <img className="h-8 w-8" src={twir} alt="twitter" />
            <img className="h-8 w-10" src={git} alt="github" />
            <img className="h-8 w-8" src={ytb} alt="youtube" />
          </div>
        </div>

        {/* Links Section */}
        <div className="text-gray-200 flex gap-x-10 md:gap-x-40 gap-y-10 p-5 w-full sm:w-fit flex-wrap justify-center sm:justify-start">

          <span className="space-y-3 text-center sm:text-left">
            <h1 className="text-white font-semibold text-lg pb-2">Solutions</h1>
            <h1>Marketing</h1>
            <h1>Analytics</h1>
            <h1>Automation</h1>
            <h1>Commerce</h1>
            <h1>Insights</h1>
          </span>

          <span className="space-y-3 text-center sm:text-left">
            <h1 className="text-white font-semibold text-lg pb-2">Support</h1>
            <h1>Submit tickets</h1>
            <h1>Documentation</h1>
            <h1>Guides</h1>
          </span>

          <span className="space-y-3 text-center sm:text-left">
            <h1 className="text-white font-semibold text-lg pb-2">Company</h1>
            <h1>About</h1>
            <h1>Blog</h1>
            <h1>Jobs</h1>
            <h1>Press</h1>
          </span>

          <span className="space-y-3 text-center sm:text-left">
            <h1 className="text-white font-semibold text-lg pb-2">Legal</h1>
            <h1>Terms of services</h1>
            <h1>Privacy policy</h1>
            <h1>License</h1>
          </span>

        </div>
      </div>

      <h2 className="text-center pt-6 font-bold text-cyan-500 text-sm sm:text-base">
        Copyright © 2025 Verbuvate. All rights reserved.
      </h2>
    </div>

  )
}

export default Footer
