import React from 'react'
import G1 from '../assets/graph1.png'
import G2 from '../assets/graph2.webp'
import G3 from '../assets/graph3.png'
import G4 from '../assets/graph4.jpeg'
import G5 from '../assets/graph5.png'

const Dashboard = () => {
  return (
    <div className='pt-10 pb-20'>
      <h1 className='text-2xl font-bold text-center text-emerald-500'>Engagement Dashboard</h1>
      <div className='flex w-full flex-wrap md:pl-18 pt-10 gap-x-38 gap-y-15'>
        <img className='h-60 w-72 sm:h-80 sm:w-96 md:h-100 md:w-150 rounded-sm rounded-br-4xl rounded-tl-4xl p-2 shadow-2xl shadow-emerald-500' src={G1} alt='graph1' />
        <img className='h-60 w-72 sm:h-80 sm:w-96 md:h-100 md:w-150 rounded-sm rounded-br-4xl rounded-tl-4xl p-2 shadow-2xl shadow-emerald-500' src={G2} alt='graph2' />
        <img className='h-60 w-72 sm:h-80 sm:w-96 md:h-100 md:w-150 rounded-sm rounded-br-4xl rounded-tl-4xl p-2 shadow-2xl shadow-emerald-500' src={G3} alt='graph3' />
        <img className='h-60 w-72 sm:h-80 sm:w-96 md:h-100 md:w-150 rounded-sm rounded-br-4xl rounded-tl-4xl p-2 shadow-2xl shadow-emerald-500' src={G4} alt='graph4' />
        <img className='h-60 w-72 sm:h-80 sm:w-96 md:h-100 md:w-150 rounded-sm rounded-br-4xl rounded-tl-4xl p-2 shadow-2xl shadow-emerald-500' src={G5} alt='graph5' />
      </div>
    </div>
  )
}

export default Dashboard
