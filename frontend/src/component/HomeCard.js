import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({name, image, price, category, loading, id}) => {
  return (
    <div className='bg-white shadow-md p-2 rounded min-w-[150px]'>
        {
          name ? (<>
                    <Link to={`/menu/${id}`} onClick={() => window.scrollTo({top:"0", behavior: "smooth"})}>
                    <div className='w-40 min-h-[150px]'>
                      <img src={image} className='h-full w-full'/>
                    </div> 
                    <h2 className='font-semibold text-slate-600 text-center capitalize text-lg'>{name}</h2>
                    <p className='text-center text-slate-500 font-md capitalize'>{category}</p>
                    <p className='text-center font-bold'>$<span>{price}</span></p>
                    </Link>
                  </>
                  )
                :
                <div className='flex justify-center items-center'>
                  <p>{loading}</p>
                </div>
          
        }
    </div>
  )
}

export default HomeCard