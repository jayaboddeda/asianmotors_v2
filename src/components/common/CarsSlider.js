// const { default: Swiper } = require("swiper");
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import CarCard from './CarCard';
import { useEffect, useRef } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
// import { Button } from 'bootstrap';
const CarsSlider = ({ cars }) => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, []);
    return (
        <>
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                }}
                onSlideChange={() => { }}
                className='pb-5'
            >

                {cars?.map((car, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <CarCard key={car.id} car={car} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className='position-relative'>
                <button className='slick-prev slick-arrow' ref={prevRef}><FaChevronLeft /></button>
                <button className='slick-next slick-arrow' ref={nextRef}><FaChevronRight /></button>
            </div>
        </>
    );
}
export default CarsSlider;