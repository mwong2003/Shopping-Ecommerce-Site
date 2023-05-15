import React from 'react'

const HomeCard = ({name, image, price, category, loading}) => {
  return (
    <div className='bg-white shadow-md p-2 rounded min-w-[150px]'>
        {
          name ? (<>
                    <div className='w-40 min-h-[150px]'>
                      <img src={image} className='h-full w-full'/>
                    </div> 
                    <h2 className='font-semibold text-slate-600 text-center capitalize text-lg'>{name}</h2>
                    <p className='text-center text-slate-500 font-md capitalize'>{category}</p>
                    <p className='text-center font-bold'>$<span>{price}</span></p>
                  </>)
                :
                <div className='flex justify-center items-center'>
                  <p>{loading}</p>
                </div>
          
        }
    </div>
  )
}

export default HomeCard