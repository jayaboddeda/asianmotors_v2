'use client';
import { ApiService } from "@/services/apiservice";
import React, { useState, useEffect, useMemo } from "react";

const EMICalculator = () => {
  const [data, setData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [carPrice, setCarPrice] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenureMonths, setTenureMonths] = useState(60);

  // Fetch car data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService("items/current_stock");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    fetchData();
  }, []);

  // Process data into carData structure
  const carData = useMemo(() => {
    if (!data || data.length === 0) return {};
    return data.reduce((acc, car) => {
      if (!acc[car.brand]) {
        acc[car.brand] = [];
      }
      acc[car.brand].push({ model: car.name, price: car.price });
      return acc;
    }, {});
  }, [data]);

  // Initialize selectedBrand, selectedModel, and carPrice
  useEffect(() => {
    if (carData && Object.keys(carData).length > 0) {
      const initialBrand = Object.keys(carData)[0];
      setSelectedBrand(initialBrand);
      setSelectedModel(carData[initialBrand][0]?.model);
      setCarPrice(carData[initialBrand][0]?.price);
    }
  }, [carData]);

  // Reset selectedModel and update carPrice when selectedBrand or selectedModel changes
  useEffect(() => {
    if (selectedBrand && carData[selectedBrand]) {
      const firstModel = carData[selectedBrand][0]?.model;
      setSelectedModel(firstModel);
      setCarPrice(carData[selectedBrand][0]?.price || 0);
    }
  }, [selectedBrand, carData]);
  useEffect(() => {
    if (selectedBrand && selectedModel && carData[selectedBrand]) {
      const selectedCar = carData[selectedBrand].find((car) => car.model === selectedModel);
      setCarPrice(selectedCar?.price || 0);
    }
  }, [selectedModel, selectedBrand, carData]);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);

  const calculateEMI = () => {
    const downPayment = (carPrice * downPaymentPercent) / 100;
    const loanAmount = carPrice - downPayment;
    const monthlyInterest = interestRate / 12 / 100;
    const emi =
      (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, tenureMonths)) /
      (Math.pow(1 + monthlyInterest, tenureMonths) - 1);
    const totalPayment = emi * tenureMonths;
    const totalInterestAmount = totalPayment - loanAmount;

    return {
      emi,
      totalPayment,
      totalInterestAmount,
      downPayment,
    };
  };

  const { emi, totalPayment, totalInterestAmount, downPayment } = useMemo(
    () => calculateEMI(),
    [carPrice, downPaymentPercent, interestRate, tenureMonths]
  );

  const handleNumberInputChange = (setter, min, max) => (e) => {
    const value = Math.min(Math.max(Number(e.target.value), min), max);
    setter(value);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow">
          <div className="card-header border-bottom-0">
            <h3 className="text-center mb-0 fw-bold">EMI CALCULATOR</h3>
          </div>
          <div className="card-body">
            {Object.keys(carData).length > 0 ? (
              <>
                <div className="brand-select">
                  <select
                    className="form-select mb-3 text-uppercase"
                    value={selectedBrand || ''}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                  >
                    {Object.keys(carData).map((brand, index) => (
                      <option key={index} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                  <select
                    className="form-select mb-3"
                    value={selectedModel || ''}
                    onChange={(e) => setSelectedModel(e.target.value)}
                  >
                    {carData[selectedBrand]?.map((car, index) => (
                      <option key={index} value={car.model}>
                        {car.model}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-center mb-4">
                  <h5 className="mt-3">{selectedModel}</h5>
                  <h6 className="text-muted">{formatCurrency(carPrice)}</h6>
                </div>
                {/* Down Payment */}
                <div className="mb-4">
                  <label className="form-label d-md-flex justify-content-between">Down Payment (Minimum 30%) <span className="fs-5 fw-600 text-highlight">{formatCurrency(downPayment)}</span></label>
                  <input
                    type="range"
                    className="form-range"
                    min="30"
                    max="90"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    className="form-control mt-2 border border-dark px-2 py-4"
                    min="30"
                    max="90"
                    value={downPaymentPercent}
                    onChange={handleNumberInputChange(setDownPaymentPercent, 30, 90)}
                  />
                  <div className="d-flex justify-content-between">
                    {/* <span>&#8377;</span> */}
                    {/* <span>{formatCurrency(downPayment)}</span> */}
                  </div>
                </div>
                {/* Interest Rate */}
                <div className="mb-4">
                  <label className="form-label d-md-flex justify-content-between">Annual Interest Rate (%)<span className="text-highlight">{interestRate.toFixed(1)}</span></label>
                  <input
                    type="range"
                    className="form-range"
                    min="1"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    className="form-control mt-2 border border-dark px-2 py-4"
                    min="1"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={handleNumberInputChange(setInterestRate, 1, 20)}
                  />
                  <div className="d-flex justify-content-between">
                    {/* <span>%</span>
                    <span>{interestRate.toFixed(1)}</span> */}
                  </div>
                </div>
                {/* Tenure Months */}
                <div className="mb-4">
                  <label className="form-label d-md-flex justify-content-between">Term/Period (Months) <span className="text-highlight">{tenureMonths}</span></label>
                  <input
                    type="range"
                    className="form-range"
                    min="12"
                    max="84"
                    value={tenureMonths}
                    onChange={(e) => setTenureMonths(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    className="form-control mt-2 border border-dark px-2 py-4"
                    min="12"
                    max="84"
                    value={tenureMonths}
                    onChange={handleNumberInputChange(setTenureMonths, 12, 84)}
                  />
                  <div className="d-flex justify-content-between">
                    {/* <span>Months</span>
                    <span>{tenureMonths}</span> */}
                  </div>
                </div>
                <div className="result-box">
                  <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                      <p>Loan Amount :</p>
                      <p className="fw-600 ">{formatCurrency(totalPayment - totalInterestAmount)}</p>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                      <p>Total Interest Payable :</p>
                      <p className="fw-600 ">{formatCurrency(totalInterestAmount)}</p>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                      <p>Total Amount to Pay :</p>
                      <p className="fw-600 ">{formatCurrency(totalPayment)}</p>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                      <p>Monthly Payment (EMI) :</p>
                      <h5 className="fw-600 text-highlight">{formatCurrency(emi)}</h5>
                    </div>

                  </div>
                  {/* <div className="text-center mt-3">
                    <h5>Monthly Payment (EMI)</h5>
                    <h3>{formatCurrency(emi)}</h3>
                  </div> */}
                </div>
              </>
            ) : (
              <p>Loading car data...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
