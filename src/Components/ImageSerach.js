import React, { useState } from 'react'

function ImageSerach({searchText}) {
    const [text,setText] = useState('')

    const handlesubmit = (e)=>
    {
      e.preventDefault();
      searchText(text);

    }
  
  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
        <form className='w-full max-w-sm' onSubmit={handlesubmit}>
            <div className='flex items-center  border-b-2 py-2 border-teal-500 lg:border-teal-200'>
                <input className='apperance-none bg-transparent border-none w--full text-gray-700 mr-3 py-1 px-2 focus:outline-none ' type="text" placeholder='search bar' onChange={event=> setText(event.target.value)} value={text} />
                <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-500 text-sm border-4 text-white px-2 py-1 rounded' type="submit">
                 Search
                </button>


            </div>
        </form>
         
    </div>
  )
}

export default ImageSerach