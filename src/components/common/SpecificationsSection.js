// import Accordion from 'react-bootstrap/Accordion';

import { Accordion, Card } from "react-bootstrap";
import { FaCheck, FaAngleDown } from "react-icons/fa6";

function SpecificationsSection() {
  return (



    <div className="faqs-section pt-0 ">
      <div className="inner-container">
        {/* FAQ Column */}
        <h4 className="title">Specifications</h4>
        <div className="accordion faq-column" id="accordionExample">
          <div className="inner-column">
            <div className="accordion-item border-0 border-bottom">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button ps-0 py-2 bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Engine and Transmission
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body ps-0 pt-0">
                  <div className="acc-content current">
                    <div className="content">
                      <div className="row">
                        <div className="list-column col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-column">
                            <ul className="spects-list">
                              <li>
                                <span>Length:</span> 4950mm
                              </li>
                              <li>
                                <span>Height:</span> 1776mm
                              </li>
                              <li>
                                <span>Front Tread:</span> 1668mm
                              </li>
                              <li>
                                <span>Kerb Weight:</span> 2350kg
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="list-column col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-column">
                            <ul className="spects-list">
                              <li>
                                <span>Width:</span> 2140mm
                              </li>
                              <li>
                                <span>Wheel Base:</span> 2984mm
                              </li>
                              <li>
                                <span>Rear Tread:</span> 1671mm
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
            <div className="accordion-item border-0 border-bottom">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button ps-0 py-2 bg-transparent shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Dimensions & Capacity
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body ps-0 pt-0">
                  <div className="acc-content current">
                    <div className="content">
                      <div className="row">
                        <div className="list-column col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-column">
                            <ul className="spects-list">
                              <li>
                                <span>Length:</span> 4950mm
                              </li>
                              <li>
                                <span>Height:</span> 1776mm
                              </li>
                              <li>
                                <span>Front Tread:</span> 1668mm
                              </li>
                              <li>
                                <span>Kerb Weight:</span> 2350kg
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="list-column col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-column">
                            <ul className="spects-list">
                              <li>
                                <span>Width:</span> 2140mm
                              </li>
                              <li>
                                <span>Wheel Base:</span> 2984mm
                              </li>
                              <li>
                                <span>Rear Tread:</span> 1671mm
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
            <div className="accordion-item border-0 border-bottom">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button ps-0 py-2 bg-transparent shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Miscellaneous
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body ps-0 pt-0">
                  <div className="acc-content current">
                    <div className="content">
                      <div className="row">
                        <div className="list-column col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-column">
                            <ul className="spects-list">
                              <li>
                                <span>Length:</span> 4950mm
                              </li>
                              <li>
                                <span>Height:</span> 1776mm
                              </li>
                              <li>
                                <span>Front Tread:</span> 1668mm
                              </li>
                              <li>
                                <span>Kerb Weight:</span> 2350kg
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="list-column col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-column">
                            <ul className="spects-list">
                              <li>
                                <span>Width:</span> 2140mm
                              </li>
                              <li>
                                <span>Wheel Base:</span> 2984mm
                              </li>
                              <li>
                                <span>Rear Tread:</span> 1671mm
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
        </div>
      </div>
    </div>



  );
}

export default SpecificationsSection;