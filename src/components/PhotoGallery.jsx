import React, { useState } from 'react';
import photo1 from '../img/photo_gallery/photo1.webp';
import photo2 from '../img/photo_gallery/photo2.webp';
import photo3 from '../img/photo_gallery/photo3.webp';
import photo4 from '../img/photo_gallery/photo4.webp';
import photo5 from '../img/photo_gallery/photo5.webp';
import photo6 from '../img/photo_gallery/photo6.jpg';
import photo7 from '../img/photo_gallery/photo7.jpg';
import photo8 from '../img/photo_gallery/photo8.jpg';
import photo9 from '../img/photo_gallery/photo9.jpg';
import photo10 from '../img/photo_gallery/photo10.jpg';
import photo11 from '../img/photo_gallery/photo11.jpg';
import photo12 from '../img/photo_gallery/photo12.jpg';
import photo13 from '../img/photo_gallery/photo13.jpg';
import photo14 from '../img/photo_gallery/photo14.jpg';
import photo15 from '../img/photo_gallery/photo15.jpg';
import photo16 from '../img/photo_gallery/photo16.jpg';
import photo17 from '../img/photo_gallery/photo17.jpg';
import photo18 from '../img/photo_gallery/photo18.jpg';
import photo19 from '../img/photo_gallery/photo19.jpg';
import photo20 from '../img/photo_gallery/photo20.jpg';
import photo21 from '../img/photo_gallery/photo21.jpg';
import photo22 from '../img/photo_gallery/photo22.jpg';
import photo23 from '../img/photo_gallery/photo23.jpg';
import photo24 from '../img/photo_gallery/photo24.jpg';

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
  photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20,
  photo21, photo22, photo23, photo24,
];

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