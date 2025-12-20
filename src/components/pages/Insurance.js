import AsianAdvantage from "../common/AsianAdvantage";
import BlogsSection from "../common/BlogsSection";
import CarsSection from "../common/CarsSection";
import TestimonialSection from "../common/TestimonialSection";
import WhyChooseUs from "../common/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <div className="boxcar-wrapper home-page">
        <section className="boxcar-banner-section-four boxcar-banner-section-nine">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
            disablePictureInPicture
          >
            <source
              src='https://admin.asianmotors.co.in/assets/4f1e914b-387c-4f7d-beca-89dff2252fcb'
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div>
            <div className="banner-content">
              <div className="content-box">
                <span>Explore a wide range of cars tailored to your lifestyle.</span>
                <h2 data-wow-delay="100ms">Find Fast. Drive Far.</h2>
                <span>PIONEERS IN PREOWNED CAR BUSINESS. SINCE 1969</span>
                <div className="btn-box">
                  <a
                    href="cars.html"
                    className="read-more active me-3"
                    data-wow-delay="200ms"
                  >
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_919_4250)">
                        <path
                          d="M13.6111 0H5.05558C4.84062 0 4.66668 0.173943 4.66668 0.388901C4.66668 0.603859 4.84062 0.777802 5.05558 0.777802H12.6723L0.113941 13.3362C-0.0379805 13.4881 -0.0379805 13.7342 0.113941 13.8861C0.189884 13.962 0.289415 14 0.38891 14C0.488405 14 0.5879 13.962 0.663879 13.8861L13.2222 1.3277V8.94447C13.2222 9.15943 13.3962 9.33337 13.6111 9.33337C13.8261 9.33337 14 9.15943 14 8.94447V0.388901C14 0.173943 13.8261 0 13.6111 0Z"
                          fill="#050B20"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_919_4250">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="contact.html" className="read-more" data-wow-delay="200ms">
                    Contact Us
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
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_634_2156">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CarsSection />
        <AsianAdvantage />
        <TestimonialSection />
        <WhyChooseUs />
        <BlogsSection />
      </div>
    </>
  );
};

export default HomePage;
