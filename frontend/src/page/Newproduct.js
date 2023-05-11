import React from 'react'
import {BsCloudUpload} from "react-icons/bs"

const Newproduct = () => {
  const uploadImage = (e) => {

  }


  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white'>
        <label htmlFor='name'>Name</label>
        <input type={'text'} name='name' className='bg-slate-200 p-1 my-1'/>

        <select className='bg-slate-200 p-1 my-1'>
          <option>Fruits</option>
          <option>Vegetable</option>
          <option>Ice cream</option>
          <option>Dosa</option>
          <option>Pizza</option>
        </select>

        <label htmlFor='image'>Image</label>
        <div id='image' className='h-40 w-full bg-slate-200 my-1 rounded flex items-center justify-center'>
          <span className='text-5xl'><BsCloudUpload/></span>
          <input type={'file'} onChange={uploadImage} className='hidden'/>
        </div>

        <label htmlFor='price' className='my-1'>Price</label>
        <input type={'text'} className='bg-slate-200 p-1 my-1'/>

        <label htmlFor='description'>Description</label>
        <textarea rows={2} className='bg-slate-200 p-1 my-1 resize-none'></textarea>
        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
      </form>
    </div>
  )
}

export default Newproduct