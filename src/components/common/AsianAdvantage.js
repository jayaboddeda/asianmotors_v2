import React from 'react';
import AdvantageCard from './AdvantageCard'; 
import collision from '../../assets/images/icons/car-collision.png';
import odometer from '../../assets/images/icons/odometer.png';
import document from '../../assets/images/icons/document.png';
import returnicon from '../../assets/images/icons/return.png'
import hassle from '../../assets/images/icons/hassle-free.png'
import warranty from '../../assets/images/icons/warranty.png'
import customer from '../../assets/images/icons/customer-support.png'
import checked from '../../assets/images/icons/checked.png'

const advantages = [
    {
        icon: collision,
        title: 'Non-Accident Cars',
        description: 'We only deal in cars with a clean accident history as verified by service records.',
    },
    {
        icon: odometer,
        title: 'Odometer Authenticity',
        description: 'Guaranteed accurate mileage readings.',
    },
    {
        icon: document,
        title: 'Transparent Documentation',
        description: 'Ownership transfers completed within 3 working days.',
    },
    {
        icon: returnicon,
        title: 'Buy Back Agreement',
        description: 'Drive any car with a depreciation rate of: 10–15% for Japanese cars, 15–20% for others (up to 10,000 km in a year).',
    },
    {
        icon: hassle,
        title: 'Hassle-Free Buying Policy',
        description: 'A seamless and customer-friendly process.',
    },
    {
        icon: warranty,
        title: '6 Months Warranty',
        description: 'Covers engine and transmission for added peace of mind.',
    },
    {
        icon: customer,
        title: 'Service History Check',
        description: 'Ensuring no prior accidental claims or insurance disputes.',
    },
    {
        icon: checked,
        title: 'RTO Check',
        description: 'Complete ownership and vehicle history verification for legal peace of mind.',
    },
];



const AsianAdvantage = ({topgap}) => {
    return (
        <section className={`asian-advantage-section why-choose-us-section ${!topgap && 'pt-0'}`}>
            <div className="boxcar-container">
                <div className="boxcar-title wow fadeInUp">
                    <h2 className="title">Asian Advantage</h2>
                </div>
                <div className="row">
                    {advantages.map((advantage, index) => (
                            <AdvantageCard
                            key={index}
                                icon={advantage.icon}
                                title={advantage.title}
                                description={advantage.description}
                            />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AsianAdvantage;
