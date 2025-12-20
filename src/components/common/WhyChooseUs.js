import React from 'react';
import AdvantageCard from './AdvantageCard';  // Import the AdvantageCard component
import ChooseUsCard from './ChooseUsCard';

const advantages = [
    {
        icon: 'images/icons/odometer.png',
        title: 'Special Financing Offers',
        description: 'We simplify car financing! At Asian Motors, we provide exclusive, flexible financing options to make owning your dream car hassle-free. With partnerships across leading financial institutions, we ensure you get competitive rates tailored to your budget.'
    },
    {
        icon: 'images/icons/financing.png',
        title: 'Trusted Car Dealership',
        description: 'Serving customers since 1969, Asian Motors has built a legacy of trust. With over five decades of experience in the pre-owned car industry, we pride ourselves on transparent practices, genuine vehicles, and a customer-first approach. '
    },
    {
        icon: 'images/icons/quality.png',
        title: 'Transparent Pricing',
        description: 'Enjoy a buying experience with no hidden costs. Every car comes with a clear, upfront price tag, backed by full documentation and a detailed history. What you see is what you pay, ensuring peace of mind with every purchase.'
    },
    {
        icon: 'images/icons/customer-support.png',
        title: 'Expert Car Service',
        description: 'Our commitment doesn’t end after the sale. We offer expert post-sale services, including a 6-month engine and transmission warranty, ensuring your car remains in top condition. From quality checks to ongoing support, we’ve got you covered.'
    }
];


const WhyChooseUs = () => {
    return (
        <section className="why-choose-us-section-four">
            <div className="boxcar-container">
                <div className="boxcar-title text-center wow fadeInUp">
                    <h2 className="title" style={{ color: 'white' }}>Why Choose Us?</h2>
                </div>
                <div className="row">
                    {advantages.map((advantage, index) => (
                        <ChooseUsCard key={index} advantage={advantage}
                            icon={advantage.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
