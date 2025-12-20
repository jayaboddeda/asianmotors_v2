'use client'
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
const FaqsSection = () => {
    // State to track which FAQ is open
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionToggle = (index) => {
        // If the clicked accordion is already open, close it. Otherwise, open it.
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is Asian Motors and how long has it been in business?",
            answer: "Asian Motors is a trusted dealership for pre-owned cars, established in 1969. With over five decades of experience, it has built a legacy of quality and customer satisfaction."
        },
        {
            question: "How does Asian Motors ensure the quality of its cars?",
            answer: "Every car at Asian Motors undergoes a 51-point quality check to ensure it meets the highest standards. This includes checks for non-accident records, odometer authenticity, and service history verification."
        },
        {
            question: "Does Asian Motors offer warranties on the cars it sells?",
            answer: "Yes, all cars sold by Asian Motors come with a six-month warranty covering the engine and transmission, providing peace of mind for our customers."
        },
        {
            question: "Can I exchange my current car for another at Asian Motors?",
            answer: "Yes, Asian Motors provides an exchange facility. We offer the best possible exchange rates based on the condition and value of your current car and handle the ownership transfer process for a hassle-free experience."
        },
        {
            question: "What financing options are available at Asian Motors?",
            answer: "Asian Motors works with various financing partners to offer flexible financing options tailored to your budget. Our team will assist you in securing the best rates and terms available in the market."
        },
        {
            question: "What makes Asian Motors a trusted dealership?",
            answer: "With over 50 years of experience, a family-run legacy, and a strict commitment to quality, transparency, and customer satisfaction, Asian Motors has earned the trust of thousands of customers."
        },
    ];

    return (
        <div className="faqs-section pt-0">
            <div className="inner-container">
                {/* FAQ Column */}
                <div className="faq-column wow fadeInUp" data-wow-delay="400ms">
                    <div className="inner-column">
                        <div className="boxcar-title text-center">
                            <h2 className="title">See Frequently Asked Questions</h2>
                        </div>
                        <ul className="widget-accordion wow fadeInUp">
                            {faqData.map((faq, index) => (
                                <li className={`accordion block ${activeIndex === index ? 'active-block' : ''}`} key={index}>
                                    <div
                                        className={`acc-btn d-flex justify-content-between ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => handleAccordionToggle(index)}
                                    >
                                        {faq.question}
                                        <FaPlus />
                                        <div className="icon fa fa-plus"></div>
                                    </div>
                                    <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                                        <div className="content">
                                            <div className="text">{faq.answer}</div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqsSection;
