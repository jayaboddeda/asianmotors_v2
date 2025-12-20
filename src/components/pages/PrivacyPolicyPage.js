import Breadcrumb from "../common/Breadcrumb";

const PrivacyPolicyPage = () => {
    return (
        <>
            <section className="tabs-section layout-radius">
                <div className="boxcar-container">
                    <Breadcrumb page={'Privacy Policy'}/>
                    <div className="row">
                        <div className="tabs-column col-lg-3 col-md-4 col-sm-12">
                            <ul className="nav nav-tabs" id="privacyTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="DataCollection-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#DataCollection"
                                        type="button"
                                        role="tab"
                                        aria-controls="DataCollection"
                                        aria-selected="true"
                                    >
                                        Data Collection
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="DataUsage-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#DataUsage"
                                        type="button"
                                        role="tab"
                                        aria-controls="DataUsage"
                                        aria-selected="false"
                                    >
                                        Data Usage
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="SharingPolicy-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#SharingPolicy"
                                        type="button"
                                        role="tab"
                                        aria-controls="SharingPolicy"
                                        aria-selected="false"
                                    >
                                        Sharing Policy
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="YourRights-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#YourRights"
                                        type="button"
                                        role="tab"
                                        aria-controls="YourRights"
                                        aria-selected="false"
                                    >
                                        Your Rights
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="Cookies-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Cookies"
                                        type="button"
                                        role="tab"
                                        aria-controls="Cookies"
                                        aria-selected="false"
                                    >
                                        Cookies
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="content-column col-lg-9 col-md-8 col-sm-12">
                            <div className="tab-content" id="privacyTabContent">
                                {/* Data Collection */}
                                <div
                                    className="tab-pane fade show active"
                                    id="DataCollection"
                                    role="tabpanel"
                                    aria-labelledby="DataCollection-tab"
                                >
                                    <div className="content-box">
                                        <h6 className="title">1. Types of Data Collected</h6>
                                        <div className="text">
                                            We collect the following types of data:
                                            <ul>
                                                <li><strong>Personal Information:</strong> Name, email address, phone number, and address.</li>
                                                <li><strong>Technical Data:</strong> IP address, browser type, operating system, and device information.</li>
                                                <li><strong>Transactional Data:</strong> Purchase history and payment details (secured and encrypted).</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h6 className="title">2. How We Collect Data</h6>
                                        <div className="text">
                                            Data is collected through:
                                            <ul>
                                                <li>Forms filled on our website or applications.</li>
                                                <li>Cookies and tracking technologies for online behavior.</li>
                                                <li>Third-party services, such as payment gateways and analytics tools.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Data Usage */}
                                <div className="tab-pane fade" id="DataUsage" role="tabpanel" aria-labelledby="DataUsage-tab">
                                    <div className="content-box">
                                        <h6 className="title">1. Purpose of Data Usage</h6>
                                        <div className="text">
                                            Data collected is used for:
                                            <ul>
                                                <li>Processing orders and managing accounts.</li>
                                                <li>Improving website functionality and user experience.</li>
                                                <li>Marketing campaigns and personalized offers.</li>
                                                <li>Compliance with legal requirements.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h6 className="title">2. Retention Period</h6>
                                        <div className="text">
                                            Personal data will be retained as long as necessary to fulfill the purposes mentioned above or as required by law.
                                        </div>
                                    </div>
                                </div>
                                {/* Sharing Policy */}
                                <div className="tab-pane fade" id="SharingPolicy" role="tabpanel" aria-labelledby="SharingPolicy-tab">
                                    <div className="content-box">
                                        <h6 className="title">1. Sharing with Third Parties</h6>
                                        <div className="text">
                                            We may share data with:
                                            <ul>
                                                <li><strong>Service Providers:</strong> For payment processing and delivery.</li>
                                                <li><strong>Analytics Providers:</strong> For tracking website performance.</li>
                                                <li><strong>Government Authorities:</strong> If required by law.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h6 className="title">2. Security Measures</h6>
                                        <div className="text">
                                            Data is shared securely using encryption and other security protocols to ensure confidentiality and integrity.
                                        </div>
                                    </div>
                                </div>
                                {/* Your Rights */}
                                <div className="tab-pane fade" id="YourRights" role="tabpanel" aria-labelledby="YourRights-tab">
                                    <div className="content-box">
                                        <h6 className="title">1. Access and Control</h6>
                                        <div className="text">
                                            You have the right to:
                                            <ul>
                                                <li>Access your data and request corrections.</li>
                                                <li>Withdraw consent for marketing communications.</li>
                                                <li>Request deletion of your data under certain conditions.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h6 className="title">2. Contact for Data Requests</h6>
                                        <div className="text">
                                            To exercise your rights, contact us at: <a href="mailto:privacy@asianmotors.com">privacy@asianmotors.com</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Cookies */}
                                <div className="tab-pane fade" id="Cookies" role="tabpanel" aria-labelledby="Cookies-tab">
                                    <div className="content-box">
                                        <h6 className="title">1. Use of Cookies</h6>
                                        <div className="text">
                                            Cookies are used for:
                                            <ul>
                                                <li>Storing user preferences and login details.</li>
                                                <li>Tracking website performance and user behavior.</li>
                                                <li>Delivering personalized advertisements.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h6 className="title">2. Managing Cookies</h6>
                                        <div className="text">
                                            Users can manage cookies through browser settings. Disabling cookies may impact website functionality.
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
export default PrivacyPolicyPage;