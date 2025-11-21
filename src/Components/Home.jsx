import React, { useState, useEffect } from 'react'
import robo from '../assets/robot.png'
import Card from './Card'
import scale from '../assets/scale.webp'
import tnsate from '../assets/translateW.png'
import intuitive from '../assets/intuitive.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const words = ["Hindi Language.", "Marathi Language..", "Gujrati Language.", "French Language..", "Chinese Language.", "Persian Language..", "Korean Language.", "Telugu Language..", "Portuguese Language."];
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % words.length), 1700);
    return () => clearInterval(t);
  }, []);

  const users = [
    {
      "pic": tnsate,
      "stext": "Quick Translation",
      "btext": "Allow users to instantly translate text between English and multiple languages with minimal delay. This feature can be particularly valuable for users"
    },
    {
      "pic": scale,
      "stext": "Data Scalability",
      "btext": "Verbuvate is built to handle growth. Whether you're translating a single phrase or large volumes of text, our platform scales seamlessly to meet your needs"
    },
    {
      "pic": intuitive,
      "stext": "Intuitive Interface",
      "btext": "Verbuvate features a simple, easy-to-use interface, making translation effortless for everyone. Navigate with ease and enjoy a smooth experience"
    }
  ]

  const navigate = useNavigate();

  return (
    <div className=''>
      <div className='flex gap-x-30 h-fit w-full items-center flex-wrap'>
        <div className=' w-fit p-4 font-bold space-y-15'>
          <h1 className='text-xl text-gray-100'>
            Here you can translate Given Content into <h3 className="text-2xl font-bold text-red-500 transition-all duration-500">{words[i]}</h3>
          </h1>
          <h1 className='text-gray-200'>
            Break barriers with every word, Connect cultures across the globe, Your language, our bridge to the world.
          </h1>
          <div className='flex items-center flex-wrap gap-10'>
            <button className='bg-emerald-700 w-30 h-14 p-2 text-center rounded-lg text-gray-100 text-lg cursor-pointer' onClick={() => navigate("/translator")}>Get Start</button>
            <button className='bg-emerald-700 w-50 h-14 p-2 text-center rounded-lg text-gray-100 text-lg cursor-pointer' onClick={() => navigate("/dashboard")}>View Dashboard</button>
          </div>
        </div>
        <img className='h-110 w-110 drop-shadow-[3px_15px_16px_rgba(0,125,167,1)]' src={robo} />
      </div>


      <div className='space-y-10 bg-gray-900 pb-10'>
        <h1 className='text-gray-100 text-center font-bold text-xl pt-10'>Features</h1>
        <div className='flex gap-6 justify-center flex-wrap'>
          {users.map(function (elem) {
            return <Card pics={elem.pic} Stxt={elem.stext} Btxt={elem.btext} />
          })}
        </div>

      </div>


      <div className=' justify-center flex items-center'>
        <div className='w-240 text-center px-12 py-10 space-y-3'>
          <h1 className='font-bold text-xl text-gray-100'>About Verbuvate</h1>
          <h2 className='text-gray-400'>Verbuvate is a powerful translation platform that connects you with the world by translating English into over Multiple languages. We simplify communication,
            making it easy to break language barriers and faster global connections. With fast and accurate translations, Verbuvate ensures you can communicate
            effortlessly, no matter where you are.</h2>
        </div>
      </div>

    </div>
  )
}

export default Home