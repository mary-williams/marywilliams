import { useState, useEffect } from 'react';
import './Photos.css'

const images = [
    '/about-images/bevo.jpg',
    '/about-images/camera.jpg',
    '/about-images/coder.jpeg',
    '/about-images/coffee.jpg',
    '/about-images/concerts.jpg',
    '/about-images/reader.jpg',
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