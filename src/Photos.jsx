import { useState, useEffect } from 'react';
import './Photos.css'

const images = [
    'bevo.jpg',
    'camera.jpg',
    'coder.jpeg',
    'coffee.jpg',
    'concerts.JPG',
    'reader.jpg',
];

function Photos() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='photo-rotator'>
      <img
        src={images[currentImg]}
        alt="Gallery"
        className='rotating-photo'
      />
    </div>
  )
}

export default Photos