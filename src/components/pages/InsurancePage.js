import AsianAdvantage from "../common/AsianAdvantage";
import BlogsSection from "../common/BlogsSection";
import Breadcrumb from "../common/Breadcrumb";
import CarsSection from "../common/CarsSection";
import TestimonialSection from "../common/TestimonialSection";
import WhyChooseUs from "../common/WhyChooseUs";
import InsuranceForm from "./InsuranceForm";

const InsurancePage = () => {
  return (
    <>
      <section className="contact-us-section layout-radius">
        <h1>Preowned Car Insurance in Hyderabad</h1>
        <div className="boxcar-container">
          <Breadcrumb page={'Insurance'}/>
          <InsuranceForm/>
          <AsianAdvantage />
          <CarsSection />
        </div>
        <WhyChooseUs />
        <div className="boxcar-container">
          <BlogsSection />
        </div>
      </section>
    </>
  );
};

export default InsurancePage;
