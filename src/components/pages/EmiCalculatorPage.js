import Breadcrumb from "../common/Breadcrumb";
import EMICalculator from "../EMICalculator";

const EmiCalculatorPage = () => {
  return (
    <>
      <section className="contact-us-section layout-radius">
        <h1 className="d-none">Preowned Car EMI Calculator – Hyderabad</h1>
        <div className="boxcar-container">
          <Breadcrumb page={'EMI Calculator'}/>
          <EMICalculator/>
        </div>
      </section>
    </>
  );
};

export default EmiCalculatorPage;
