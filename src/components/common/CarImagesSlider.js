'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { assetUrl } from '@/services/constants';

const CarImagesSlider = ({ imgs }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [loadedImages, setLoadedImages] = useState(new Set());

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;

            // Initialize navigation
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    const handleImageLoad = (imageId) => {
        setLoadedImages(prev => new Set([...prev, imageId]));
    };

    const handleImageError = (imageId) => {
        setLoadedImages(prev => new Set([...prev, imageId]));
    };    // Show the slider immediately if we have images
    if (!imgs || imgs.length === 0) {
        return (
            <div className="image-box">
                <figure className="image">
                    <div 
                        style={{
                            width: '100%',
                            height: '400px',
                            backgroundColor: '#f8f9fa',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '8px',
                            color: '#6c757d'
                        }}
                    >
                        No images available
                    </div>
                </figure>
            </div>
        );
    }

    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                loop={imgs.length > 1}
                modules={[Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                }}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
                {imgs.map((img) => (
                    <SwiperSlide key={img?.id}>
                        <div className="image-box">
                            <figure className="image" style={{ position: 'relative' }}>
                                {!loadedImages.has(img?.id) && (
                                    <div 
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '400px',
                                            backgroundColor: '#f8f9fa',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '8px',
                                            zIndex: 1,
                                            animation: 'pulse 1.5s ease-in-out infinite alternate'
                                        }}
                                    >
                                        <div style={{ 
                                            textAlign: 'center',
                                            color: '#6c757d',
                                            fontSize: '14px'
                                        }}>
                                            <div 
                                                style={{
                                                    width: '20px',
                                                    height: '20px',
                                                    border: '2px solid #dee2e6',
                                                    borderTop: '2px solid #6c757d',
                                                    borderRadius: '50%',
                                                    animation: 'spin 1s linear infinite',
                                                    margin: '0 auto 8px'
                                                }}
                                            />
                                            Loading...
                                        </div>
                                    </div>
                                )}
                                <img 
                                    src={assetUrl + img.directus_files_id.id} 
                                    alt={img.directus_files_id.title || `Car image ${img?.id}`}
                                    style={{
                                        opacity: loadedImages.has(img?.id) ? 1 : 0,
                                        transition: 'opacity 0.3s ease-in-out',
                                        width: '100%',
                                        height: 'auto',
                                        position: 'relative',
                                        zIndex: 2
                                    }}
                                    onLoad={() => handleImageLoad(img?.id)}
                                    onError={() => handleImageError(img?.id)}
                                />
                            </figure>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <button className="slick-prev slick-arrow" ref={prevRef}>
                    <FaChevronLeft />
                </button>
                <button className="slick-next slick-arrow" ref={nextRef}>
                    <FaChevronRight />
                </button>
            </div>
        </>
    );
};

export default CarImagesSlider;
