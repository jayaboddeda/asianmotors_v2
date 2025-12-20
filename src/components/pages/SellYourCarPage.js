import AsianAdvantage from "../common/AsianAdvantage";
import BlogsSection from "../common/BlogsSection";
import Breadcrumb from "../common/Breadcrumb";
import CarsSection from "../common/CarsSection";
import TestimonialSection from "../common/TestimonialSection";
import WhyChooseUs from "../common/WhyChooseUs";
import MultiStepForm from "../MultiStepForm";
import SellYourCarForm from "../SellYourCarForm";

const SellYourCarPage = () => {
  return (
    <>
      <section className="contact-us-section layout-radius">
        <h1 className="d-none">Sell Your Car in Hyderabad – Quick & Transparent Process</h1>
        <div className="boxcar-container">
          <Breadcrumb page={'Sell Your Car'} />
          {/* <MultiStepForm/> */}
          <SellYourCarForm/>
        </div>
      </section>
      <AsianAdvantage />
      <CarsSection />
      <WhyChooseUs />
      <BlogsSection />
    </>
  );
};

export default SellYourCarPage;
