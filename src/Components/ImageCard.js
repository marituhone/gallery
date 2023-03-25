import React from 'react'

function ImageCard({image}) {
    const tags = image.tags.split(',')
    
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
    <img  className='w-full' src={image.webformatURL}/>
     {/* <img src={image.webformatURL} alt="" className="w-full"/> */}
     <div className='px-6 py-4'>
      <div className='text-xl font-bold text-purple-500 mb-2'>
          {image.user}
      </div>
      <ul>
          <li>
             <strong>Views:</strong>
             {image.views}
          </li>
          <li>
             <strong>Downloads:</strong>
             {image.downloads}
          </li>

          <li>
             <strong>Likes:</strong>
             {image.likes}
          </li>
      </ul>
     </div>
     <div className='px-6 py-4'>
      
         {tags.map((tag,index) =>
            (
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-gray">
                  {tag}
                </span> 
            )
         )}
       
     </div>
  </div>
  )
}

export default ImageCard