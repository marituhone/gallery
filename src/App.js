import React, { useState,useEffect} from 'react'
import ImageCard from './Components/ImageCard';
import ImageSerach from './Components/ImageSerach';



function App() {

  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [term,setTerm] = useState('');

  const handleSearch = (text) => {
    setTerm(text)
    
  };
 

  useEffect ( () => {
    
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false)
    })
    .catch(err => console.log(err));

  },[term]);
  return (
    <div className='container mx-aoto'>
      <ImageSerach searchText={handleSearch} />
       {isLoading ? <h2>loading</h2> : <div className="grid grid-cols-3 gap-3">
         {images.map(image => 
            (<ImageCard key={image.id} image={image}/>
            ))}
        </div>}
      
    </div>
  )
}

export default App