'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { IoLogoWhatsapp, IoCall } from "react-icons/io5";
import ModalLeadForm from './ModalLeadForm';

const Footer = () => {
    const pathname = usePathname();


    useEffect(() => {
        // Logic to handle pathname changes (if needed).
    }, [pathname]);
    return (
        <>
            {pathname !== '/' &&
                <section className='layout-radius position-relative' style={{
                    zIndex: '1', height: '81px',
                    borderRadius: '0px 0px 80px 80px'
                }}>

                </section>
            }
            <footer className={`boxcar-footer footer-style-one ${pathname !== '/' && 'cus-st-1 v1'}`}>
                {/* Footer Top */}
                <span className='position-fixed whatsapp-icon'>
                    <ModalLeadForm />
                    {/* <a href={whatsappUrl} target='_blank' style={{height: '50px', width: '50px' }} className='bg-success rounded-circle p-2 d-flex align-items-center justify-content-center'>
                    <IoLogoWhatsapp className='text-white' size={25}/>
                </a> */}
                </span>
                <span className='position-fixed call-icon'>
                    <a href="tel:09391037686" style={{height: '50px', width: '50px' }} className='bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center'>
                        <IoCall className='text-white' size={25}/>
                    </a>
                </span>
                <div className="footer-top">
                    <div className="boxcar-container">
                        <div className="right-box">
                            <div className="top-left wow fadeInUp">
                                <h6 className="title">Join the Asian Motors Family</h6>
                                <div className="text">
                                    Stay ahead with the latest car deals, expert tips, and exclusive updates! Sign up now and never miss an offer.
                                </div>
                            </div>
                            <div className="subscribe-form wow fadeInUp" data-wow-delay="100ms">
                                <form method="post" action="#">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="email"
                                            placeholder="Your e-mail address"
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="theme-btn btn-style-one hover-light"
                                        >
                                            <span className="btn-title">Sign Up</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Widgets Section */}
                <div className="widgets-section">
                    <div className="boxcar-container">
                        <div className="footer-column-two">
                            <div className="row">
                                {/* Google Map */}
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <iframe
                                        className="w-100 h-100 rounded"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5126382721237!2d78.42766897516495!3d17.387169083499945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974c8699442f%3A0x313ffd283ff2a494!2sASIAN%20MOTORS%20ATTAPUR!5e0!3m2!1sen!2sin!4v1731341219369!5m2!1sen!2sin"
                                        style={{ border: 0, minHeight: '225px' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                                {/* Links */}
                                <div className="row col-lg-8 mt-md-0 mt-5">
                                    {/* Quick Links */}
                                    <FooterColumn
                                        title="Quick Links"
                                        links={[
                                            { text: 'Insurance', href: '/car-insurance-hyderabad' },
                                            { text: 'EMI Calculator', href: '/car-emi-calculator' },
                                            { text: 'Sell Your Car', href: '/sell-your-car-hyderabad' },
                                            { text: 'Blogs', href: '/blog' },
                                            { text: 'Contact Us', href: '/contact-us' },
                                            { text: 'FAQ\'s', href: '/faqs' },
                                            { text: 'Privacy Policy', href: '/privacypolicy' },
                                            { text: 'Terms & Conditions', href: '/terms' },
                                        ]}
                                        delay="100ms"
                                    />

                                    {/* Our Brands */}
                                    <FooterColumn
                                        title="Our Brands"
                                        links={[
                                            { text: 'Aston Martin', href: '/buy-used-cars-hyderabad' },
                                            { text: 'Audi', href: '/buy-used-cars-hyderabad' },
                                            { text: 'Bentley', href: '/buy-used-cars-hyderabad' },
                                            { text: 'BMW', href: '/buy-used-cars-hyderabad' },
                                            { text: 'Bugatti', href: '/buy-used-cars-hyderabad' },
                                            { text: 'Ferrari', href: '/buy-used-cars-hyderabad' },
                                            { text: 'Jaguar', href: '/buy-used-cars-hyderabad' },
                                            { text: 'Lamborghini', href: '/buy-used-cars-hyderabad' },
                                        ]}
                                        delay="200ms"
                                    />

                                    {/* Vehicle Types */}
                                    <FooterColumn
                                        title="Vehicles Type"
                                        links={[
                                            { text: 'PREMIUM SUVS', href: '/buy-used-cars-hyderabad' },
                                            { text: '⁠MPV', href: '/buy-used-cars-hyderabad' },
                                            { text: '⁠HATCH BACK', href: '/buy-used-cars-hyderabad' },
                                            { text: 'Sedan', href: '/buy-used-cars-hyderabad' },
                                            { text: '⁠PREMIUM SEDANS', href: '/buy-used-cars-hyderabad' }
                                        ]}
                                        delay="300ms"
                                    />

                                    {/* Social Links */}
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div
                                            className="footer-widget social-widget wow fadeInUp"
                                            data-wow-delay="400ms"
                                        >
                                            <div className="widget-content">
                                                <div className="social-icons">
                                                    <h6 className="widget-title">Connect With Us</h6>
                                                    <div>
                                                        <a href="tel:09391037686" className="text-white">
                                                            093910 37686
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="tel:8187818496" className="text-white">
                                                            8187818496
                                                        </a>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-facebook-f"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-instagram"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-linkedin-in"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="boxcar-container">
                        <div className="inner-container">
                            <div className="copyright-text wow fadeInUp">
                                © 2024 asianmotors.com. All rights reserved.
                            </div>
                            <ul className="footer-nav wow fadeInUp" data-wow-delay="200ms">
                                <li>
                                    <Link href="/terms">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="/privacy">Privacy Notice</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

const FooterColumn = ({ title, links, delay }) => (
    <div className="col-lg-3 col-md-6 col-sm-12">
        <div className={`footer-widget links-widget wow fadeInUp`} data-wow-delay={delay}>
            <h4 className="widget-title">{title}</h4>
            <div className="widget-content">
                <ul className="user-links style-two">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default Footer;
