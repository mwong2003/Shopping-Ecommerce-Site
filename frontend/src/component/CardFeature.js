import React from 'react'
import { Link } from 'react-router-dom'

const CardFeature = ({name, image, price, category, loading, id}) => {
  return (
    <div className='w-full min-w-[200px] max-w-[200px] bg-whte hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col'>
        {
            image ? <>
            <Link to={`menu/${id}`}>
            <div className='h-28 my-2 flex flex-col justify-center items-center'>
                <img src={image} className='h-full'/>
            </div>
            <h2 className='text-center font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden'>{name}</h2>
            <p className='text-center text-slate-500 font-md capitalize'>{category}</p>
            <p className='text-center font-bold'>$<span>{price}</span></p>
            <button className='bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full'>Add to cart</button>
            
            </Link>
            </>
            
            :
            <div className='min-h-[150px] flex justify-center items-center'>{loading}</div>
        }
        
    </div>
  )
}

export default CardFeature