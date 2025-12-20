'use client';

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const FaqsPage = () => {
    // State to track which FAQ is open
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionToggle = (index) => {
        // If the clicked accordion is already open, close it. Otherwise, open it.
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqCategories = [
        {
            title: "General",
            items: [
                {
                    question: "What is Asian Motors and when was it established?",
                    answer: "Asian Motors is a multi-brand dealership specializing in pre-owned cars. It was established in 1969 and has over 50 years of experience in delivering quality vehicles and exceptional customer service.",
                },
                {
                    question: "Where is Asian Motors located?",
                    answer: "Our showroom is located at Kings Kohinoor Convention, Pillar No. 68, PV Narasimha Rao Expressway, Attapur, Hyderabad-06.",
                },
                {
                    question: "What makes Asian Motors a trusted dealership?",
                    answer: "With over five decades of experience, a strict 51-point quality inspection process, and a commitment to transparency, we are one of the most trusted names in the pre-owned car market.",
                },
            ],
        },
        {
            title: "Payments",
            items: [
                {
                    question: "What payment options are available at Asian Motors?",
                    answer: "We accept multiple payment methods, including cash, bank transfers, and financing options arranged through our trusted financial partners.",
                },
                {
                    question: "Can I finance a car through Asian Motors?",
                    answer: "Yes, we offer financing options in collaboration with leading financial institutions to make your car purchase easier and more affordable.",
                },
                {
                    question: "Are there any hidden costs when buying a car?",
                    answer: "No, we provide transparent pricing with no hidden charges. All costs, including registration and transfer fees, are clearly outlined during the purchase process.",
                },
            ],
        },
        {
            title: "Buying Cars",
            items: [
                {
                    question: "How does Asian Motors ensure the quality of its cars?",
                    answer: "We conduct a stringent 51-point quality check on all cars, including verification of service history, odometer authenticity, and accident records, to ensure the highest standards of quality.",
                },
                {
                    question: "Do you offer warranties on pre-owned cars?",
                    answer: "Yes, all our cars come with a six-month warranty covering the engine and transmission for your peace of mind.",
                },
                {
                    question: "Can I exchange my current car for another?",
                    answer: "Yes, we offer an exchange program with competitive exchange rates. We also handle the transfer of ownership to ensure a hassle-free process.",
                },
            ],
        },
        {
            title: "Selling Cars",
            items: [
                {
                    question: "How do I sell my car to Asian Motors?",
                    answer: "You can visit our showroom or contact us online to initiate the selling process. We evaluate your car, offer a competitive price, and handle the ownership transfer seamlessly.",
                },
                {
                    question: "How quickly can I sell my car?",
                    answer: "Our streamlined process ensures that you can sell your car and complete the ownership transfer within a week.",
                },
                {
                    question: "Can I sell a car that still has a loan on it?",
                    answer: "Yes, you can sell a car with an outstanding loan. We will assist in clearing the loan and settling the paperwork during the sale process.",
                },
            ],
        },
        {
            title: "After-Sales Services",
            items: [
                {
                    "question": "What after-sales services does Asian Motors provide?",
                    "answer": "We offer a six-month warranty on engine and transmission, assistance with servicing, and support for vehicle-related paperwork."
                },
                {
                    "question": "Can I return or exchange a car after purchase?",
                    "answer": "Yes, we have a buy-back policy that allows you to return or exchange your car within specific terms and conditions, including depreciation and mileage limits."
                }
            ]
        }
    ];

    return (
        <section className="faq-inner-section layout-radius">
            {faqCategories.map((category, categoryIndex) => (
                <div className="faqs-section " key={categoryIndex}>
                    <div className="inner-container">
                        <div className="faq-column wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-column">
                                <div className="boxcar-title text-center">
                                    <h2 className="title">{category.title}</h2>
                                </div>
                                <ul className="widget-accordion wow fadeInUp">
                                    {category.items.map((faq, index) => {
                                        const globalIndex = `${categoryIndex}-${index}`; // Unique index per category and FAQ
                                        const isActive = activeIndex === globalIndex;

                                        return (
                                            <li className={`accordion block mt-5 ${isActive ? 'active-block' : ''}`} key={globalIndex}>
                                                <div
                                                    className={`acc-btn d-flex justify-content-between ${isActive ? 'active' : ''}`}
                                                    onClick={() => handleAccordionToggle(globalIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isActive ? <FaMinus /> : <FaPlus />}
                                                </div>
                                                <div className={`acc-content ${isActive ? 'current' : ''}`}>
                                                    <div className="content">
                                                        <div className="text">{faq.answer}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default FaqsPage;
