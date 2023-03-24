import React, { useState,useEffect} from 'react'
import ImageCard from './Components/ImageCard';



function App() {

  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [term,setTerm] = useState('')
 

  useEffect ( () => {
    // const apiKey = process.env.REACT_APP_API_KEY;;
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=yellow&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false)
    })
    .catch(err => console.log(err));

  },[]);
  return (
    <div className='container mx-aoto'>
       <div className="grid grid-cols-3 gap-3">
         {/* {images.map(image => 
            <ImageCard key={image.id} image={image}/>
         )} */}
          {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
       </div>
      
    </div>
  )
}

export default App