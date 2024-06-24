import React, { useState } from 'react';
import photo1 from '../img/photo_gallery/photo1.webp';
import photo2 from '../img/photo_gallery/photo2.webp';
import photo3 from '../img/photo_gallery/photo3.webp';
import photo4 from '../img/photo_gallery/photo4.webp';
import photo5 from '../img/photo_gallery/photo5.webp';
import photo6 from '../img/photo_gallery/photo6.jpg';
import photo7 from '../img/photo_gallery/photo7.webp';
import photo8 from '../img/photo_gallery/photo8.jpg';
import photo9 from '../img/photo_gallery/photo5.webp';
import photo10 from '../img/photo_gallery/photo5.webp';

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

const PhotoGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6;
  
    const goToPrevious = () => {
      const isFirstPage = currentIndex === 0;
      const newIndex = isFirstPage ? Math.max(photos.length - itemsPerPage, 0) : currentIndex - itemsPerPage;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const isLastPage = currentIndex + itemsPerPage >= photos.length;
      const newIndex = isLastPage ? 0 : currentIndex + itemsPerPage;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className="photo-gallery">
        <button className="arrow left-arrow" onClick={goToPrevious}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="photo-container">
          {photos.slice(currentIndex, currentIndex + itemsPerPage).map((photo, index) => (
            <div key={index} className="photo">
              <img src={photo} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={goToNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  };
  
  export default PhotoGallery;