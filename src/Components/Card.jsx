import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-gray-600 h-fit  w-63 rounded-lg text-center flex-col flex justify-start items-center gap-y-7 py-6 px-5'>
      <img className='h-60 w-60' src={props.pics} />
      <h1 className='text-gray-100 font-bold text-xl'> {props.Stxt} </h1>
      <h2 className='text-gray-100'> {props.Btxt} </h2>
    </div>
  )
}

export default Card