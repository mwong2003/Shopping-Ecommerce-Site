import React from 'react'
import {TbMinus, TbPlus} from 'react-icons/tb'

const CardProduct = ({id, name, image, category, qty, total, price}) => {
  return (
    <div className='bg-slate-200 p-2 flex gap-4'>
        <div className='p-3 bg-white rouunded'>
            <img src={image} className='h-28 w-36 object-cover'></img>
        </div>
        <div className='flex flex-col gap-1'>
          <h2 className='font-semibold text-slate-600 capitalize text-lg md:text-xl'>{name}</h2>
          <p className=' text-slate-500 font-medium capitalize'>{category}</p>
          <p className='font-bold text-base'>$<span>{price}</span></p>
          <div className='flex gap-3'>
            <button className='bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1'><TbPlus/></button>
            <p className='font-semibold p-1'>{qty}</p>
            <button onClick={""} className='bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1'><TbMinus/></button>
          </div>
        </div>
    </div>
  )
}

export default CardProduct