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
        description: 'Our commitment doesn&apos;t end after the sale. We offer expert post-sale services, including a 6-month engine and transmission warranty, ensuring your car remains in top condition. From quality checks to ongoing support, we&apos;ve got you covered.'
    }
];


const WhyChooseUsAbout = () => {
    return (
        <div className="why-choose-us-section">
            <div className="boxcar-container">
                <div className="boxcar-title wow fadeInUp">
                    <h2 className="title">Why Choose Us?</h2>
                </div>
                <div className="row">
                    {/* Block 1: Buy */}
                    <div className="choose-us-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp">
                            <div className="icon-box">
                                {/* SVG Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="60" viewBox="0 0 51 60" fill="none">
                                    <g clipPath="url(#clip0_24_628)">
                                        <path d="M22.9688 52.9676C22.9688 52.732 22.827 52.5195 22.6096 52.4289C20.0682 51.3695 18.2812 48.8627 18.2812 45.9375V23.4375C18.2812 20.5123 20.0682 18.0054 22.6096 16.9461C22.827 16.8555 22.9688 16.6429 22.9688 16.4074V16.4062H18.2812C14.398 16.4062 11.25 19.5543 11.25 23.4375V45.9375C11.25 49.8207 14.398 52.9688 18.2812 52.9688H22.9688V52.9676Z" fill="#EEF1FB"></path>
                                        <path d="M23.3708 41.3167L36.6292 28.0583" stroke="#FF5CF4" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M30 21.0938L44.0625 2.34375" stroke="#eb5e21" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M15.9375 2.34375L25.3895 12.9483" stroke="#eb5e21" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M48.75 30V23.4375C48.75 19.5543 45.602 16.4062 41.7188 16.4062H38.0747C36.4508 13.6159 33.4612 11.7188 30 11.7188C26.5388 11.7188 23.5493 13.6159 21.9253 16.4062H18.2812C14.398 16.4062 11.25 19.5543 11.25 23.4375V45.9375C11.25 49.8207 14.398 52.9688 18.2812 52.9688H21.9253C23.5492 55.7591 26.5388 57.6562 30 57.6562C33.4612 57.6562 36.4507 55.7591 38.0747 52.9688H41.7188C45.602 52.9688 48.75 49.8207 48.75 45.9375V39.375" stroke="#eb5e21" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_24_628">
                                            <rect width="51" height="60" fill="white"></rect>
                                        </clippath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="content-box">
                                <h6 className="title">Buy</h6>
                                <div className="text">
                                    We perform a 51-point quality check on every car before procurement, ensuring hassle-free ownership for our customers. Our priority is always customer satisfaction, guaranteeing:
                                </div>
                                <ul className="list-group-disc">
                                    <li>Genuine cars</li>
                                    <li>Transparent documentation</li>
                                    <li>Seamless buying experience</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Block 2: Sell */}
                    <div className="choose-us-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp">
                            <div className="icon-box">
                                {/* SVG Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <path d="M30 2.34375V7.03125" stroke="#FF5CF4" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M48.75 2.34375L44.0625 7.03125" stroke="#FF5CF4" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M15.4738 36.6607C14.3072 35.4056 13.5938 33.7236 13.5938 31.875C13.5938 30.7464 13.8596 29.68 14.3323 28.7347L19.0198 19.3597C20.1732 17.0529 22.5579 15.4688 25.3125 15.4688H18.2812C15.5266 15.4688 13.142 17.0529 11.9885 19.3597L7.30102 28.7347C6.8284 29.68 6.5625 30.7464 6.5625 31.875C6.5625 33.7236 7.27594 35.4056 8.44254 36.6607L26.5658 56.1592C27.4218 57.0802 28.6436 57.6562 30 57.6562C31.3564 57.6562 32.5782 57.0802 33.4342 56.1593L33.5156 56.0716L15.4738 36.6607Z" fill="#EEF1FB"></path>
                                <path d="M48.0115 19.3597L52.699 28.7347C53.1716 29.6798 53.4375 30.7464 53.4375 31.875C53.4375 33.7236 52.7241 35.4057 51.5575 36.6608L33.4342 56.1593C32.5782 57.0802 31.3564 57.6562 30 57.6562C28.6436 57.6562 27.4218 57.0802 26.5658 56.1593L8.44254 36.6608C7.27594 35.4057 6.5625 33.7236 6.5625 31.875C6.5625 30.7464 6.8284 29.6798 7.30102 28.7347L11.9885 19.3597C13.142 17.0528 15.5266 15.4688 18.2812 15.4688H41.7188C44.4734 15.4688 46.858 17.0528 48.0115 19.3597Z" stroke="#eb5e21" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M11.25 2.34375L15.9375 7.03125" stroke="#FF5CF4" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M17.3849 29.5312H42.6151" stroke="#eb5e21" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M25.3125 24.8438L30 29.5312L34.6875 24.8438" stroke="#eb5e21" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M30 43.5938V29.7306" stroke="#eb5e21" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <div className="content-box">
                                <h6 className="title">Sell</h6>
                                <div className="text">
                                We simplify the selling process with ownership transfers completed within one week.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Block 3: Exchange */}
                    <div className="choose-us-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp">
                            <div className="icon-box">
                                {/* SVG Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <g clipPath="url(#clip0_24_681)">
                                <path d="M8.75576 36.7478L35.3054 10.198C37.136 8.36741 40.104 8.36741 41.9346 10.198L36.8955 5.15894C35.0649 3.32837 32.097 3.32837 30.2664 5.15894L3.71671 31.7087C1.88613 33.5393 1.88613 36.5073 3.71671 38.3378L8.75576 43.3768C6.92518 41.5462 6.92518 38.5783 8.75576 36.7478Z" fill="#EEF1FB"></path>
                                <path d="M50.1537 18.4171C51.9843 20.2477 51.9843 23.2157 50.1537 25.0463L23.6039 51.5959C21.7734 53.4265 18.8054 53.4265 16.9748 51.5959L3.71671 38.3378C1.88613 36.5072 1.88613 33.5392 3.71671 31.7086L30.2664 5.15894C32.097 3.32836 35.0649 3.32836 36.8955 5.15894L43.5247 11.7881L52.9689 2.34387" stroke="#eb5e21" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M18.9633 31.0458C18.7631 32.4554 19.2051 33.9388 20.2894 35.0231C22.12 36.8537 25.088 36.8537 26.9186 35.0231C28.7492 33.1926 28.7492 30.2246 26.9186 28.394C25.088 26.5634 25.088 23.5954 26.9186 21.7648C28.7492 19.9342 31.7172 19.9342 33.5478 21.7648C34.6321 22.8491 35.0741 24.3325 34.8739 25.7421" stroke="#eb5e21" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M16.9749 38.3378L20.2894 35.0232" stroke="#eb5e21" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M33.5476 21.765L36.8621 18.4504" stroke="#eb5e21" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M43.5938 57.6562L57.6563 43.5937" stroke="#FF5CF4" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                                <defs>
                                <clippath id="clip0_24_681">
                                <rect width="60" height="60" fill="white"></rect>
                                </clippath>
                                </defs>
                                </svg>
                            </div>
                            <div className="content-box">
                                <h6 className="title">Exchange</h6>
                                <div className="text">
                                Our exchange services include:
                                </div>
                                <ul className="list-group-disc">
                                    <li>Best exchange rates based on car condition and market value</li>
                                    <li>Responsibility for ownership transfers, ensuring no legal complications</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Block 4: Services */}
                    <div className="choose-us-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp">
                            <div className="icon-box">
                                {/* SVG Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <path d="M23.5465 4.45312C19.8452 4.45312 16.4904 6.63082 14.9836 10.0114L8.88656 23.6906C5.23148 23.9418 2.34375 26.9843 2.34375 30.7031V36.0938C2.34375 39.3298 4.96711 41.9531 8.20312 41.9531H9.80918C9.81785 41.5022 9.82934 41.0514 9.84375 40.6005C9.4623 39.823 9.24727 38.949 9.24727 38.0245L9.14062 33.8672C9.14062 30.7927 9.76617 29.6094 12.0483 29.1497C13.1331 28.9311 14.0413 28.192 14.4858 27.1786L22.0148 10.0114C23.5215 6.63082 26.8764 4.45312 30.5777 4.45312H23.5465Z" fill="#EEF1FB"></path>
                                <path d="M8.20312 41.9531C4.96711 41.9531 2.34375 39.3298 2.34375 36.0938V30.7031C2.34375 26.9843 5.23148 23.9418 8.88656 23.6906L14.9836 10.0114C16.4903 6.63082 19.8451 4.45312 23.5465 4.45312H34.2217C37.7441 4.45312 40.9692 6.4275 42.5711 9.56461L45.5859 15.4688M57.6562 30.7031C57.6562 26.8199 54.5082 23.6719 50.625 23.6719H18.6328M28.2422 15.4688V4.57031M32.4609 41.9531H27.1873M20.742 37.2656C18.1532 37.2656 16.0545 39.3643 16.0545 41.9531C16.0545 44.5419 18.1532 46.6406 20.742 46.6406C23.3307 46.6406 25.4295 44.5419 25.4295 41.9531C25.4295 39.3643 23.3309 37.2656 20.742 37.2656Z" stroke="#eb5e21" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M57.6562 41.6016C57.6562 46.0997 54.0098 49.8047 49.5117 49.8047C45.0136 49.8047 41.3672 46.1583 41.3672 41.6602C41.3672 37.162 45.0722 33.5156 49.5703 33.5156M43.5352 48.1055L36.0938 55.5469" stroke="#FF5CF3" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <div className="content-box">
                                <h6 className="title">Services</h6>
                                <div className="text">
                                We partner with leading financial institutions to provide convenient financing options tailored to our customers&apos; needs.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default WhyChooseUsAbout;
