'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/images/logo.png';

const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about-us' },
  { name: 'Current Stock', url: '/buy-used-cars-hyderabad' },
  { name: 'Sell Your Car', url: '/sell-your-car-hyderabad' },
  { name: 'Our Showroom', url: '/used-car-showroom-attapur' },
  { name: 'EMI Calculator', url: '/car-emi-calculator' },
  { name: 'Insurance', url: '/car-insurance-hyderabad' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact Us', url: '/contact-us' },
];

const Header = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Logic to handle pathname changes (if needed).
  }, [pathname]);

  return (
    <header className={`boxcar-header header-style-v1 header-default ${isSticky && 'sticky-nav'} ${pathname !== '/' ? 'style-two inner-header cus-style-1' : 'home-page'} `}>
      <div className="header-inner">
        <div className="inner-container">
          <div className="c-box">
            <div className="logo-inner">
              <div className="logo">
                <Link href="/">
                  <img src={logo.src} alt="Boxcar" title="Boxcar" />
                </Link>
              </div>
            </div>
            <div className="nav-out-bar d-none d-md-block">
              <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                  {navLinks.map((link, index) => (
                    <li key={index} className={pathname === link.url ? "active" : ""}>
                      <Link href={link.url}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {/* Mobile Navigation */}
            <div className="right-box d-block d-md-none">
              <Navbar expand="md" className="">
                <Container fluid>
                  {/* Custom Offcanvas Toggle */}
                  <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0 outline-0 shadow-none">
                    <div className="mobile-navigation">
                      <a href="#nav-mobile" title="">
                        <svg
                          width="22"
                          height="11"
                          viewBox="0 0 22 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="22" height="2" fill="white"></rect>
                          <rect y="9" width="22" height="2" fill="white"></rect>
                        </svg>
                      </a>
                    </div>
                  </Navbar.Toggle>
                  <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id="offcanvasNavbarLabel">
                        Menu
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        {navLinks.map((link, index) => (
                          <Nav.Link key={index} href={link.url}>
                            {link.name}
                          </Nav.Link>
                        ))}
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
