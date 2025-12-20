import Breadcrumb from "../common/Breadcrumb";

const TermsPage = () => {
    return (
        <>
            <section className="tabs-section layout-radius">
                <div className="boxcar-container">
                    <Breadcrumb page={'Terms and Condition'}/>
                    <p className="text-center mb-5">
                            By engaging with Asian Motors, you agree to comply with the terms and conditions outlined below. These terms govern the sale, servicing, and general interactions with our business.
                        </p>
                    <div className="row">
                        <div className="tabs-column col-lg-3 col-md-4 col-sm-12">
                            <ul className="nav nav-tabs" id="termsTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="VehicleSales-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#VehicleSales"
                                        type="button"
                                        role="tab"
                                        aria-controls="VehicleSales"
                                        aria-selected="true"
                                    >
                                        Vehicle Sales
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="Warranties-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Warranties"
                                        type="button"
                                        role="tab"
                                        aria-controls="Warranties"
                                        aria-selected="false"
                                    >
                                        Warranties
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="ReturnsExchanges-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#ReturnsExchanges"
                                        type="button"
                                        role="tab"
                                        aria-controls="ReturnsExchanges"
                                        aria-selected="false"
                                    >
                                        Returns & Exchanges
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="ServicingRepairs-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#ServicingRepairs"
                                        type="button"
                                        role="tab"
                                        aria-controls="ServicingRepairs"
                                        aria-selected="false"
                                    >
                                        Servicing & Repairs
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="GeneralConditions-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#GeneralConditions"
                                        type="button"
                                        role="tab"
                                        aria-controls="GeneralConditions"
                                        aria-selected="false"
                                    >
                                        General Conditions
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="content-column col-lg-9 col-md-8 col-sm-12">
                            <div className="tab-content" id="termsTabContent">
                                {/* Vehicle Sales */}
                                <div
                                    className="tab-pane fade show active"
                                    id="VehicleSales"
                                    role="tabpanel"
                                    aria-labelledby="VehicleSales-tab"
                                >
                                    <div className="content-box">
                                        <h6 className="title">1. Pricing and Stock Availability</h6>
                                        <div className="text">
                                            All vehicle prices are subject to availability and valid at the time of sale. Prices include applicable taxes and fees. Asian Motors reserves the right to update pricing without prior notice.
                                            <ul>
                                                <li>Reservations require a non-refundable deposit.</li>
                                                <li>Vehicles listed may slightly vary in specifications or color due to stock changes.</li>
                                                <li>All sales must comply with applicable registration and tax regulations.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h6 className="title">2. Payment Terms</h6>
                                        <div className="text">
                                            Payments must be completed before vehicle delivery or handover. Accepted methods include:
                                            <ul>
                                                <li>Cash, credit/debit cards, bank transfers, and financing through our approved partners.</li>
                                                <li>Partial payments allowed only under financing agreements.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Warranties */}
                                <div
                                    className="tab-pane fade"
                                    id="Warranties"
                                    role="tabpanel"
                                    aria-labelledby="Warranties-tab"
                                >
                                    <div className="content-box">
                                        <h6 className="title">1. Warranty Coverage</h6>
                                        <div className="text">
                                            Asian Motors provides a six-month warranty on the engine and transmission for all vehicles sold. Extended warranties are also available for purchase.
                                            <ul>
                                                <li>Powertrain coverage: Engine and transmission (six months).</li>
                                                <li>Extended warranty options for additional coverage duration.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h6 className="title">2. Warranty Limitations</h6>
                                        <div className="text">
                                            Warranties do not cover:
                                            <ul>
                                                <li>Wear-and-tear components (e.g., tires, brake pads).</li>
                                                <li>Damage from misuse, accidents, or unauthorized repairs.</li>
                                            </ul>
                                            Customers must follow the recommended maintenance schedule to keep the warranty valid.
                                        </div>
                                    </div>
                                </div>

                                {/* Returns & Exchanges */}
                                <div
                                    className="tab-pane fade"
                                    id="ReturnsExchanges"
                                    role="tabpanel"
                                    aria-labelledby="ReturnsExchanges-tab"
                                >
                                    <div className="content-box">
                                        <h6 className="title">1. Return Eligibility</h6>
                                        <div className="text">
                                            Returns are accepted under the following conditions:
                                            <ul>
                                                <li>A manufacturing defect is identified within seven days of delivery.</li>
                                                <li>The vehicle has been driven less than 500 miles.</li>
                                                <li>The vehicle remains in its original condition without damage or modifications.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h6 className="title">2. Exchange Process</h6>
                                        <div className="text">
                                            Vehicles eligible for exchange must pass an inspection to verify:
                                            <ul>
                                                <li>Condition and presence of original parts.</li>
                                                <li>Absence of damage or excessive wear.</li>
                                            </ul>
                                            Exchange approvals are subject to inspection results.
                                        </div>
                                    </div>
                                </div>

                                {/* Servicing & Repairs */}
                                <div
                                    className="tab-pane fade"
                                    id="ServicingRepairs"
                                    role="tabpanel"
                                    aria-labelledby="ServicingRepairs-tab"
                                >
                                    <div className="content-box">
                                        <h6 className="title">1. Maintenance Services</h6>
                                        <div className="text">
                                            Regular maintenance services include:
                                            <ul>
                                                <li>Oil changes, tire rotations, and brake checks every six months or 5,000 miles.</li>
                                                <li>Comprehensive diagnostics annually.</li>
                                            </ul>
                                            Customers are advised to follow the recommended maintenance schedule.
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h6 className="title">2. Emergency Services</h6>
                                        <div className="text">
                                            Emergency roadside assistance covers:
                                            <ul>
                                                <li>Towing services (up to 50 miles).</li>
                                                <li>Battery jump-starts, flat tire changes, and fuel delivery.</li>
                                            </ul>
                                            Additional fees may apply for services beyond coverage limits.
                                        </div>
                                    </div>
                                </div>

                                {/* General Conditions */}
                                <div
                                    className="tab-pane fade"
                                    id="GeneralConditions"
                                    role="tabpanel"
                                    aria-labelledby="GeneralConditions-tab"
                                >
                                    <div className="content-box">
                                        <h6 className="title">1. Governing Laws</h6>
                                        <div className="text">
                                            All transactions are governed by the laws of the jurisdiction where Asian Motors operates.
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h6 className="title">2. Customer Obligations</h6>
                                        <div className="text">
                                            By purchasing or servicing a vehicle with Asian Motors, customers agree to:
                                            <ul>
                                                <li>Provide accurate information during transactions.</li>
                                                <li>Comply with all applicable vehicle registration and insurance requirements.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h6 className="title">3. Liability</h6>
                                        <div className="text">
                                            Asian Motors is not liable for:
                                            <ul>
                                                <li>Damages caused by unauthorized use of vehicles.</li>
                                                <li>Loss of personal items during servicing or repairs.</li>
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
    )
}

export default TermsPage;