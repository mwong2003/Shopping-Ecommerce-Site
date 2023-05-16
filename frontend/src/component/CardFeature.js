import React from 'react'
import { Link } from 'react-router-dom'
import { addCartItem } from '../redux/productSlice'
import { useDispatch } from 'react-redux'

const CardFeature = ({name, image, price, category, loading, id}) => {
  const dispatch = useDispatch()

  const handleAddCartProduct = e => {
    console.log(name)
    dispatch(addCartItem({
      _id: id,
      name: name,
      price: price,
      category: category,
      image: image
    }))
  }

  return (
    <div className='w-full min-w-[200px] max-w-[200px] bg-whte hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col'>
        {
            image ? <>
            <Link to={`/menu/${id}`} onClick={() => window.scrollTo({top:"0", behavior: "smooth"})}>
            <div className='h-28 my-2 flex flex-col justify-center items-center'>
                <img src={image} className='h-full'/>
            </div>
            <h2 className='text-center font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden'>{name}</h2>
            <p className='text-center text-slate-500 font-md capitalize'>{category}</p>
            <p className='text-center font-bold'>$<span>{price}</span></p>
            </Link>
            <button className='bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full' onClick={handleAddCartProduct}>Add to cart</button>
            
            
            </>
            
            :
            <div className='min-h-[150px] flex justify-center items-center'>{loading}</div>
        }
        
    </div>
  )
}

export default CardFeature