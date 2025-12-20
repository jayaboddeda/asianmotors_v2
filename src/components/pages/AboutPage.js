import TeamSection from "../about/TeamSection";
import AsianAdvantage from "../common/AsianAdvantage";
import CarsSection from "../common/CarsSection";
import TestimonialSection from "../common/TestimonialSection";
import WhyChooseUs from "../common/WhyChooseUs";
import FaqsSection from "../FaqsSection";

import banner from '../../assets/images/about/banner.jpg'
import pricing from '../../assets/images/pricing.jpg'
import aboutInner11 from '../../assets/images/about/about-inner1-1.jpg';
import aboutInner12 from '../../assets/images/about/about-inner1-2.jpg';
import aboutInner13 from '../../assets/images/about/about-inner1-3.jpg';
import aboutInner14 from '../../assets/images/about/about-inner1-4.jpg';
import aboutInner15 from '../../assets/images/about/about-inner1-5.jpg';
import Breadcrumb from "../common/Breadcrumb";
import WhyChooseUsAbout from "../common/WhyChooseUsAbout";
import { FaCheck } from "react-icons/fa6";


const AboutPage = () => {
  return (
    <>
      <div className="about-inner-one layout-radius">
        <h1 className="d-none">Building Trust and Delivering Quality Since 1969</h1>
        <div className="upper-box">
          <div className="boxcar-container">
            <div className="row wow fadeInUp">
              <Breadcrumb page={'About Us'} />
              <div className="d-flex justify-content-center">
                <img
                  src={banner.src}
                  alt="Building Trust"
                />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="content-box mt-0">
                  <div className="text">
                    Established in 1969 by the visionary{" "}
                    <span className="fw-bold">Late Haji Mohammed Mukarram, Asian Motors</span>{" "}
                    is a legacy of automotive passion and dedication. With roots in
                    hospitality and successful ventures in hotels and restaurants during
                    the 1960s, his love for classic cars like Buicks, Packards, Impalas,
                    Chevrolets, and Mercedes laid the foundation for our journey into the
                    pre-owned car business.
                  </div>

                  <div className="text">
                    From sourcing vehicles across Bombay, Delhi, Pune, and Gwalior in the
                    late 1960s and 70s,{" "}
                    <span className="fw-bold">Asian Motors</span> became synonymous with{" "}
                    <span className="fw-bold">quality vehicles</span>. We proudly served
                    notable clients, including:
                  </div>

                  <ul className="text list-style-one list-style-disc">
                    <li> - The Maharaja of Gwalior</li>
                    <li> - Hema Malini</li>
                    <li> - Former President of India, Neelam Sanjeeva Reddy</li>
                    <li> - Late NTR (for the movie Driver Ramudu)</li>
                  </ul>

                  <div className="text">
                    For over <span className="fw-bold">five decades</span>, our family
                    business has upheld values of{" "}
                    <span className="fw-bold">
                      dedication, discipline, ethics, and customer trust.
                    </span>
                  </div>

                  <p className="fw-bold">Leadership Journey:</p>
                  <ul className="text list-style-one">
                    <li> -
                      1969–1987: Founded and led by{" "}
                      <span className="fw-bold">Late Haji Mohammed Mukarram</span>
                    </li>
                    <li> -
                      1987–1997: Headed by his eldest son,{" "}
                      <span className="fw-bold">Mohd Sabir</span>
                    </li>
                    <li> -
                      1997–Present: Managed by{" "}
                      <span className="fw-bold">Dr. Mohammed Arif Mukarram</span>, emphasizing
                      stringent quality checks and documentation practices
                    </li>
                    <li> -
                      2018–Present: Supported by{" "}
                      <span className="fw-bold">Dr. Mohammad Sadat Arif</span>,
                      <span className="fw-bold"> 3rd generation in the family</span>
                    </li>
                  </ul>
                  <div className="text">
                    Today, we operate from our showroom at{" "}
                    <span className="fw-bold">
                      Attapur Inner Ring Road, Pillar No. 68,
                    </span>{" "}
                    offering a blend of tradition and innovation in the pre-owned car
                    industry.
                  </div>
                  <div className="text">
                    <span className="fw-bold">Our Aim</span>
                  </div>
                  <div className="text">
                    To deliver cars that meet the{" "}
                    <span className="fw-bold">highest quality standards</span> with:
                  </div>
                  <ul className="text list-style-one">
                    <li> - Unmatched resale value</li>
                    <li> - Reliable and affordable service support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* gallery section  */}
        <div className="galler-section">
          <div className="boxcar-container">
            <div className="row">
              <div className="exp-block col-md-2 col-sm-12">
                <div className="inner-box">
                  <div className="exp-box">
                    <h2 className="title">55</h2>
                    <div className="text">
                      Years in <br />
                      Business
                    </div>
                  </div>
                  <div className="image-box">
                    <figure className="image">
                      <img src={aboutInner11.src} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* Center Image Block */}
              <div className="image-block style-center col-md-5 col-sm-12">
                <div className="image-box">
                  <figure className="image">
                    <img src={aboutInner12.src} alt="" />
                  </figure>
                </div>
              </div>
              {/* Right Image Block */}
              <div className="image-block col-md-5 col-sm-12">
                <div className="image-box two">
                  <figure className="image">
                    <img src={aboutInner13.src} alt="" />
                  </figure>
                </div>
                <div className="row box-double-img">
                  {/* Double Image Block */}
                  <div className="image-block col-lg-5 col-5">
                    <div className="image-box">
                      <figure className="image">
                        <img src={aboutInner14.src} alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className="image-block col-lg-7 col-7">
                    <div className="image-box">
                      <figure className="image">
                        <img src={aboutInner15.src} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WhyChooseUsAbout />
        {/* <WhyChooseUs /> */}
        <AsianAdvantage />
        {/* pricing section  */}
        <div className="boxcar-pricing-section pt-0">
          <div className="large-container">
            <div className="row g-0">
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-6 col-sm-12">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image">
                      <a href="#">
                        <img src={pricing.src} alt="" />
                      </a>
                    </figure>
                    <a
                      href="https://www.youtube.com/watch?v=hCsCJqDv38E&feature=youtu.be"
                      className="play-now"
                      data-fancybox="gallery"
                      data-caption=""
                    >
                      <i className="fa fa-play" aria-hidden="true"></i>
                      <span className="ripple"></span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-6 col-sm-12">
                <div className="inner-column">
                  <div className="boxcar-title wow fadeInUp">
                    <h2>Get the Best Price for Your Car – Sell to Asian Motors Today</h2>
                    <div className="text">
                      We make selling your car easy and rewarding. At <strong>Asian Motors</strong>, our focus is
                      on providing fair prices, outstanding service, and a seamless selling experience. Say
                      goodbye to long waiting times and hidden hassles!
                    </div>
                  </div>
                  <ul className="list-style-one wow fadeInUp" data-wow-delay="100ms">
                    <li>
                      <FaCheck />
                      <strong>Fair Valuation:</strong> We offer competitive pricing based on the market value and
                      condition of your car.
                    </li>
                    <li>
                      <FaCheck />
                      <strong>24/7 Assistance:</strong> Our team is always available to guide you through the
                      process.
                    </li>
                    <li>
                      <FaCheck />
                      <strong>Trusted and Efficient Service:</strong> From paperwork to payment, we handle
                      everything so you can relax.
                    </li>
                  </ul>
                  <a
                    href="sellyourcar.html"
                    className="read-more wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_634_2156)">
                        <path
                          d="M13.6106 0H5.05509C4.84013 0 4.66619 0.173943 4.66619 0.388901C4.66619 0.603859 4.84013 0.777802 5.05509 0.777802H12.6719L0.113453 13.3362C-0.0384687 13.4881 -0.0384687 13.7342 0.113453 13.8861C0.189396 13.962 0.288927 14 0.388422 14C0.487917 14 0.587411 13.962 0.663391 13.8861L13.2218 1.3277V8.94447C13.2218 9.15943 13.3957 9.33337 13.6107 9.33337C13.8256 9.33337 13.9996 9.15943 13.9996 8.94447V0.388901C13.9995 0.173943 13.8256 0 13.6106 0Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_634_2156">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* team section  */}
        {/* <TeamSection /> */}
        <TestimonialSection classNamem="mt-5" />

        {/* faq's  */}
        <FaqsSection />
      </div>
    </>
  );
};

export default AboutPage;
