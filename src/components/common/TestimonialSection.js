import React from 'react';
import TestimonialCard from './TestimonialCard';  // Import the TestimonialCard component
import google from '../../assets/images/icons/googlereview.png';
import author1 from '../../assets/images/testimonials/test-auther-1.jpg'
import author2 from '../../assets/images/testimonials/test-auther-2.jpg'
import author3 from '../../assets/images/testimonials/test-auther-3.jpg'
import TestimonialsSlider from './TestimonialsSlider';
const testimonials = [
    {
        tag: 'Reasonable',
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjVLG14w_pLiFwkUkUMASP-WgzQzP_OHl99NnQtsu3Ny1v97iJeG=w45-h45-p-rp-mo-br100',
        author: 'garikapati anvesh',
        role: '',
        testimonialText: '“Worth visiting the place. You can find all kind of Cars at reasonable budget. I appreciate the maintenance of the cars.”'
    },
    {
        tag: 'Affordable',
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjUFuXzI2rTqWX3y2dw7V0P0gYJ-KRx6seTUEc9lpXj1DZnjGwg=w45-h45-p-rp-mo-br100',
        author: 'Ammar Khan',
        role: '',
        testimonialText: '“I recently visited “ASIAN MOTOR” trust me guys it changed my whole perception on buying second hand cars…the cars looks extremely new (SHOWROOM CONDITION) and less driven with 100% genuine meter reading at very affordable price unlike other dealers. I will definitely recommend ASIAN MOTORS to all.. if you want to buy 2nd hand cars thn this is the stop for you…”'
    },
    {
        tag: 'Great Experience',
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjVVKixttjsKv42WukZI3taXWvcoxm4Mds8cKbFh8VqfYUfLuh5OGw=w45-h45-p-rp-mo-ba4-br100',
        author: 'Meerjan Ali',
        role: '',
        testimonialText: '“Well trained sales people with good experience, very good condition used cars available. If any one planning to buy used car, i visit this place called asin motors in attapur.”'
    },
    {
        tag: 'Great Experience',
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjU-qsW52vYKqdWum6hah-eyfE3z2QCB_JhySZ3eWd78gU9RDfpkfw=w45-h45-p-rp-mo-br100',
        author: 'Mohammed Bilal',
        role: '',
        testimonialText: '“A very good car dealers in the city i can say. Soo gald that we purchased a car from ASIAN MOTORS..very good staff friendly management. Thank you for you service..”'
    }
];


const TestimonialSection = () => {
    return (
        <section className="boxcar-testimonial-section-four v7">
            <div className="boxcar-container">
                <div className="right-box">
                    <div className="boxcar-title wow fadeInUp align-items-center">
                        <h2>What our customers say</h2>
                        <img src={google.src} className='' style={{width : '150px'}}/>
                    </div>
                    <div className="row stories-slider">
                        {/* {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                tag={testimonial.tag}
                                image={testimonial.image}
                                author={testimonial.author}
                                role={testimonial.role}
                                testimonialText={testimonial.testimonialText}
                                key={index}
                            />
                        ))} */}
                        <TestimonialsSlider testimonials={testimonials}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
