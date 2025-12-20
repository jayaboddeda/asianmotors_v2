'use client';

import { ApiService } from "@/services/apiservice";
import React, { useEffect, useState } from "react";

const MultiStepForm = () => {
  const [currentTab, setCurrentTab] = useState(0); // Tracks the current step
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await ApiService('fields/current_stock/brand');
        setBrands(response.data.meta.options.choices);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    }
    fetchBrands();
  }, [])
  const steps = ["Car Details", "Car Image", "Personal Details"]; // Step names

  const showTab = (index) => {
    return index === currentTab ? "block" : "none";
  };

  const validateForm = () => {
    const currentStep = document.getElementsByClassName("step")[currentTab];
    const inputs = currentStep.querySelectorAll("[required]");
    let valid = true;

    inputs.forEach((input) => {
      if (input.checkValidity()) {
        input.parentNode.classList.remove("is-invalid");
        input.parentNode.classList.add("is-valid");
      } else {
        input.parentNode.classList.remove("is-valid");
        input.parentNode.classList.add("is-invalid");
        valid = false;
      }
    });

    return valid;
  };

  const nextPrev = (n) => {
    if (n === 1 && !validateForm()) return; // Validate before moving forward
    const newTab = currentTab + n;
    if (newTab >= steps.length) {
      // Submit the form
      handleSubmit();
      return;
    }
    setCurrentTab(newTab);
  };

  const handleSubmit = () => {
    const form = document.getElementById("multiStepForm");
    if (form.checkValidity()) {
      alert("Form submitted successfully!");
      form.reset(); // Reset the form after submission
      setCurrentTab(0); // Reset to the first step
    } else {
      alert("Please complete all required fields.");
    }
  };

  return (
    <div className="calculater-sec pt-0">
      <div className="right-box">
        <div className="row justify-content-center">
          <div className="col-lg-7 content-column">
            <div className="inner-column">
              <div className="container my-5">
                <h2 className="text-center mb-4">Sell Your Car</h2>
                <form id="multiStepForm" className="needs-validation" noValidate>
                  {/* Step Indicators */}
                  <div className="form-header d-flex justify-content-center mb-4">
                    {steps.map((step, index) => (
                      <div
                        key={index}
                        className={`step-indicator ${currentTab === index
                          ? "active"
                          : currentTab > index
                            ? "finish"
                            : ""
                          }`}
                      >
                        Step {index + 1}: {step}
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Car Details */}
                  <div className="step" style={{ display: showTab(0) }}>
                    <div className="row">
                      <div className="col-md-4 mb-4">
                        <div className="form_boxes">
                          <label htmlFor="car-make">Car Make</label>
                          <select
                            id="car-make"
                            name="brand"
                            className="form-control"
                            required
                          >
                            <option value="">Select Car Make</option>
                            {brands?.map((brand, index) => {
                              return (
                                <option value={brand.value} key={index}>{brand.text}</option>
                              )
                            })}
                            {/* <option value="Aston Martin">Aston Martin</option>
                            <option value="Audi">Audi</option>
                            <option value="Bentley">Bentley</option> */}
                          </select>
                        </div>
                        <div className="invalid-feedback">Please select a car make.</div>
                      </div>
                      <div className="col-md-4 mb-4">
                        <div className="form_boxes">
                          <label htmlFor="car-model">Car Model</label>
                          <input
                            type="text"
                            id="car-model"
                            name="model"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="invalid-feedback">Please provide the car model.</div>
                      </div>
                      <div className="col-md-4 mb-4">
                        <div className="form_boxes">
                          <label htmlFor="mfg-year">MFG Year</label>
                          <input
                            type="number"
                            id="mfg-year"
                            name="mfgYear"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="invalid-feedback">
                          Please provide the manufacturing year.
                        </div>
                      </div>
                      <div className="col-md-4 mb-4">
                        <div className="form_boxes">
                          <label htmlFor="kms-driven">KMs Driven</label>
                          <input
                            type="number"
                            id="kms-driven"
                            name="kms-driven"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="invalid-feedback">
                          Please provide the KMs Driven.
                        </div>
                      </div>
                      <div className="col-md-4 mb-4">
                        <div className="form_boxes">
                          <label htmlFor="reg-no">Registration No.</label>
                          <input
                            type="number"
                            id="reg-no"
                            name="regno"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="invalid-feedback">
                          Please provide the Registration No.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Car Image */}
                  <div className="step" style={{ display: showTab(1) }}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form_boxes">
                          <label htmlFor="car-img1">Car Image 1</label>
                          <input
                            type="file"
                            id="car-img1"
                            name="img1"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="invalid-feedback">
                          Please upload at least one car image.
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form_boxes">
                          <label htmlFor="car-img2">Car Image 2</label>
                          <input
                            type="file"
                            id="car-img2"
                            name="img2"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Personal Details */}
                  <div className="step" style={{ display: showTab(2) }}>
                    <div className="row">
                      <div className="col-md-4 mb-4">
                        <div className="form_boxes">

                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="invalid-feedback">Please provide your name.</div>
                      </div>
                      <div className="col-md-4 mb-4">
                        <div className="form_boxes">

                          <label htmlFor="mobile">Mobile</label>
                          <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="invalid-feedback">Please provide a valid Mobile Number.</div>
                      </div>
                      <div className="col-md-4 mb-4">
                        <div className="form_boxes">

                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="invalid-feedback">Please provide a valid email.</div>
                      </div>
                      <div className="col-md-4 mb-4">
                        <div className="form_boxes">

                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="invalid-feedback">Please provide your city.</div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="d-flex justify-content-center mt-4">
                    <button
                      type="button"
                      id="prevBtn"
                      className="btn btn-secondary me-3"
                      onClick={() => nextPrev(-1)}
                      style={{ display: currentTab === 0 ? "none" : "inline-block" }}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      id="nextBtn"
                      className="btn btn-theme-red"
                      onClick={() => nextPrev(1)}
                    >
                      {currentTab === steps.length - 1 ? "Submit" : "Next"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
