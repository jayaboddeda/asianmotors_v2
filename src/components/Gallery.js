'use client'
import React, { useEffect, useState } from "react";
import { ApiService } from "@/services/apiservice";
import { assetUrl } from "@/services/constants";
const Gallery = () => {
  const [images, setImages] = useState([])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeImage = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };
  const getImages = async () => {
    try {
      const response = await ApiService('items/our_showroom', 'get');
      setImages(response.data);
    } catch (error) {
      console.error('Error loading gallery:', error)
    }
  }
  useEffect(() => {
    getImages();
  }, [])

  return (
    <div>
      {/* Gallery */}
      <div className="gallery row">
        {images.map((src, index) => (
          <div
            key={index}
            className="gallery-item col-12 col-md-6 col-lg-4 mb-20"
            onClick={() => openModal(index)}
          >
            <img loading="lazy" src={assetUrl + src.image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="image-modal" >
          <span className="close-modal" onClick={closeModal}>
            &times;
          </span>
          <img
            loading="lazy"
            className="modal-content"
            src={assetUrl + images[currentIndex].image}
            alt={`Image ${currentIndex + 1}`}
            onClick={(e) => e.stopPropagation()} // Prevent close on image click
          />
          <button className="prev" onClick={() => changeImage(-1)}>
            &#10094;
          </button>
          <button className="next" onClick={() => changeImage(1)}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
