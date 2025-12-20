import Breadcrumb from "../common/Breadcrumb";
import arrow from "../../assets/images/icons/arrow.svg"
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import ContactForm from "./ContactForm";



const ContactPage = () => {
  return (
    <>
      <section className="contact-us-section layout-radius contact-page">
        <h1 className="d-none">Contact Asian Motors – Hyderabad’s Trusted Preowned Car Showroom</h1>
        <div className="boxcar-container">
          <Breadcrumb page={'Contact Us'} />

          {/* map section  */}
          <div className="map-sec">
            <div className="google-iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5126382721237!2d78.42766897516495!3d17.387169083499945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974c8699442f%3A0x313ffd283ff2a494!2sASIAN%20MOTORS%20ATTAPUR!5e0!3m2!1sen!2sin!4v1731341219369!5m2!1sen!2sin"
                title="Asian Motors Location"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-100"
                height={400}
              ></iframe>
            </div>
          </div>
          {/* calculator section  */}
          <div className="calculater-sec">
            <div className="right-box">
              <div className="row">
                {/* content-column */}
                <div className="col-lg-6 content-column">
                  <div className="inner-column">
                    <div className="boxcar-title">
                      <h2>Get In Touch</h2>
                      <p>
                        Have questions or need assistance? We&apos;re here to help! Reach out
                        to us today, and our team will get back to you promptly.
                      </p>
                    </div>
                    <ContactForm/>
                  </div>
                </div>
                {/* contact-column */}
                <div className="contact-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="boxcar-title">
                      <h6 className="title">Contact Details</h6>
                      <div className="text">
                        We’re here to assist you with any queries or concerns. Reach out
                        to us using the details below, and we’ll be happy to help!
                      </div>
                    </div>

                    <div className="content-box">
                      <h6 className="title">
                        <span className="icon">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.9999 4.0625C8.67871 4.0625 5.14575 7.64734 5.14575 12.1068C5.14575 14.3555 6.04517 16.8458 7.5169 18.7689C8.99243 20.697 10.9454 21.9375 12.9999 21.9375C15.0545 21.9375 17.0074 20.697 18.483 18.7689C19.9547 16.8458 20.8541 14.3555 20.8541 12.1068C20.8541 7.64734 17.3211 4.0625 12.9999 4.0625ZM3.52075 12.1068C3.52075 6.78329 7.74819 2.4375 12.9999 2.4375C18.2516 2.4375 22.4791 6.78329 22.4791 12.1068C22.4791 14.7496 21.4384 17.5809 19.7735 19.7564C18.1123 21.9271 15.7319 23.5625 12.9999 23.5625C10.268 23.5625 7.8876 21.9271 6.22642 19.7564C4.56143 17.5809 3.52075 14.7496 3.52075 12.1068Z"
                              fill="#050B20" />
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M9.479 11.375C9.479 9.4305 11.0554 7.85417 12.9998 7.85417C14.9443 7.85417 16.5207 9.4305 16.5207 11.375C16.5207 13.3195 14.9443 14.8958 12.9998 14.8958C11.0554 14.8958 9.479 13.3195 9.479 11.375ZM12.9998 9.47917C11.9528 9.47917 11.104 10.328 11.104 11.375C11.104 12.422 11.9528 13.2708 12.9998 13.2708C14.0469 13.2708 14.8957 12.422 14.8957 11.375C14.8957 10.328 14.0469 9.47917 12.9998 9.47917Z"
                              fill="#E1E1E1" />
                          </svg>
                        </span>
                        Address
                      </h6>
                      <div className="text">
                        <a href="https://g.co/kgs/4GJD7hk" target="_blank" rel="noopener noreferrer">
                          Kings Kohinoor Covention, Pillar No : 68, <br /> PV Narasimha
                          Rao Expy, Attapur, Hyderabad-06
                        </a>
                      </div>
                    </div>
                    <div className="content-box">
                      <h6 className="title">
                        <span className="icon">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.7585 14.5869C12.0338 14.5869 11.3112 14.3474 10.7067 13.8686L5.84791 9.95128C5.49799 9.66962 5.44383 9.1572 5.72441 8.80837C6.00716 8.46062 6.5185 8.40537 6.86733 8.68595L11.7218 12.5989C12.3317 13.0821 13.1908 13.0821 13.805 12.5946L18.6107 8.68812C18.9595 8.4032 19.4709 8.45737 19.7547 8.8062C20.0374 9.15395 19.9843 9.66528 19.6366 9.94912L14.8223 13.8621C14.2134 14.3453 13.4854 14.5869 12.7585 14.5869Z"
                              fill="#E1E1E1" />
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M18.0473 21.6667C18.0495 21.6645 18.0581 21.6667 18.0646 21.6667C19.3007 21.6667 20.397 21.2247 21.2377 20.3851C22.2138 19.4134 22.75 18.0169 22.75 16.4537V9.01335C22.75 5.9876 20.7719 3.79169 18.0473 3.79169H7.41112C4.68654 3.79169 2.70837 5.9876 2.70837 9.01335V16.4537C2.70837 18.0169 3.24571 19.4134 4.22071 20.3851C5.06137 21.2247 6.15879 21.6667 7.39379 21.6667H18.0473ZM7.39054 23.2917C5.71896 23.2917 4.22612 22.685 3.07346 21.5367C1.78971 20.2562 1.08337 18.4514 1.08337 16.4537V9.01335C1.08337 5.1101 3.80362 2.16669 7.41112 2.16669H18.0473C21.6548 2.16669 24.375 5.1101 24.375 9.01335V16.4537C24.375 18.4514 23.6687 20.2562 22.385 21.5367C21.2334 22.6839 19.7395 23.2917 18.0646 23.2917H7.39054Z"
                              fill="#050B20" />
                          </svg>
                        </span>
                        Email
                      </h6>
                      <div className="text">
                        <a href="mailto:info@asianmotors.com">info@asianmotors.com</a>
                      </div>
                    </div>
                    <div className="content-box">
                      <h6 className="title">
                        <span className="icon">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M23.5124 10.9886C23.104 10.9886 22.753 10.6821 22.7064 10.2671C22.2948 6.6098 19.4532 3.77147 15.7959 3.36522C15.3506 3.31538 15.0289 2.91455 15.0787 2.46822C15.1274 2.02297 15.5272 1.69038 15.9757 1.75105C20.3924 2.24072 23.8244 5.66838 24.3206 10.0851C24.3715 10.5315 24.0498 10.9333 23.6045 10.9832C23.5742 10.9864 23.5428 10.9886 23.5124 10.9886Z"
                              fill="#E1E1E1" />
                            <path
                              d="M19.676 11.0003C19.2947 11.0003 18.9556 10.7316 18.8798 10.3438C18.5678 8.74044 17.3317 7.50435 15.7305 7.19344C15.2896 7.10785 15.0025 6.6821 15.0881 6.24119C15.1737 5.80027 15.6103 5.51319 16.0403 5.59877C18.2948 6.03644 20.0357 7.77627 20.4744 10.0318C20.56 10.4738 20.2729 10.8995 19.8331 10.9851C19.78 10.9949 19.728 11.0003 19.676 11.0003Z"
                              fill="#E1E1E1" />
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.10567 17.8102C13.2115 22.917 16.611 24.256 18.7581 24.256C19.8176 24.256 20.5738 23.9299 21.0776 23.5681C21.1003 23.5551 23.4316 22.1294 23.8401 19.9714C24.0329 18.9585 23.7512 17.9564 23.0276 17.0724C20.0462 13.453 18.5274 13.791 16.8504 14.6068C15.8201 15.1116 15.0066 15.5038 12.7088 13.2082C10.4124 10.9108 10.8085 10.0971 11.31 9.067C12.1268 7.39 12.4629 5.8708 8.84233 2.8873C7.9605 2.16689 6.96492 1.88522 5.95308 2.0748C3.8265 2.47239 2.39433 4.7658 2.39433 4.7658C1.25467 6.36589 0.481169 10.1868 8.10567 17.8102ZM6.28458 3.66514C6.37992 3.64997 6.47417 3.6413 6.56733 3.6413C6.992 3.6413 7.4015 3.80705 7.80992 4.14289C10.7295 6.54786 10.3601 7.30621 9.84876 8.35595C9.08068 9.93437 8.67875 11.4749 11.5594 14.3576C14.4432 17.2404 15.9848 16.8384 17.5611 16.0682L17.5637 16.0669C18.6121 15.5573 19.3701 15.1888 21.772 18.1049C22.1826 18.6054 22.3396 19.1059 22.2508 19.6334C22.0461 20.8468 20.6356 21.9334 20.2087 22.1977C18.6801 23.2875 15.0001 22.4068 9.254 16.6619C3.51016 10.9169 2.62833 7.23689 3.75716 5.6498C3.9825 5.28255 5.07342 3.86989 6.28458 3.66514Z"
                              fill="#050B20" />
                          </svg>
                        </span>
                        Phone
                      </h6>
                      <div className="text">
                        <a href="tel:09391037686">09391037686</a><br />
                        <a href="tel:8187818496">8187818496</a>
                      </div>
                    </div>
                    <div className="social-icons">
                      <h6 className="title">Follow us</h6>
                      <ul className="social-links">
                        <li>
                          <a
                            href="https://www.facebook.com/p/asianmotors-100063777053189/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/@asianmotors2362"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaYoutube />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/asian.motors/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaInstagram />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
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
      </section>
    </>
  );
};

export default ContactPage;
