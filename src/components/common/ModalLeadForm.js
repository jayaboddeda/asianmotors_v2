import React, { useState } from "react";
import tagIcon from '../../assets/images/cardetails/tag.svg';
import { IoLogoWhatsapp } from "react-icons/io5";
import { ApiService, sendLeadData } from "@/services/apiservice";


const ModalLeadForm = ({ carDetails, bookNow, detail }) => {
    // const [carDetail, setCarDetail] = useState(carDetails);
    // console.log('details:'+carDetails);
    // console.log('detail:'+carDetail);
    const [formData, setFormData] = useState({
        name: "",
        phone_number: "",
        car: carDetails?.id
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Validation Function
    const validate = () => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }
        if (!formData.phone_number.trim()) {
            errors.phone_number = "Mobile number is required";
        } else if (!/^\d{10}$/.test(formData.phone_number)) {
            errors.phone_number = "Enter a valid 10-digit mobile number";
        }
        return errors;
    };

    // Handle Input Change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [id]: value, car: carDetails?.id }));
        setErrors((prevState) => ({ ...prevState, [id]: "" })); // Clear error when typing
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Send data to API
            const response = await ApiService("items/leads", "post", formData);
            if (response) {
                // Clear the form

                try {
                    const response = await sendLeadData(formData, carDetails?.name);
                    if (response) {
                        setFormData({
                            name: "",
                            phone_number: "",
                            car: ""
                        });
                    }
                } catch (error) {

                }
                // Close the modal
                const modalElement = document.getElementById("whatsappModel");
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                modalInstance.hide();
                const detailMessage = `&text=Hello%21+I+found+your+listing+on+the+website+and+would+like+more+information.+Listing%3A+${carDetails?.name}%2C+Year%3A+${carDetails?.year}%2C+Mileage%3A+${carDetails?.mileage}+km%2C+Link%3A+${window.location.href}%2F&type=${phone_number}&app_absent=0`
                const normalmessage = `&text=Hello%21+I+am+interested+in+your+listings+and+would+like+to+know+more+details.+Please+share+the+available+options.%0AWebsite%3A+${window.location.href}&app_absent=0`
                // Open WhatsApp link
                const whatsappUrl = `https://api.whatsapp.com/send/?phone=9391037686${detail ? detailMessage : normalmessage}`;
                // window.open(whatsappUrl, "_blank");
                openWhatsApp(whatsappUrl);
            } else {
                alert("Failed to submit. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const openWhatsApp = (whatsappUrl) => {
        const link = document.createElement('a');
        link.href = whatsappUrl;
        link.target = '_blank'; // Opens in a new tab
        link.rel = 'noopener noreferrer'; // For security and performance
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {/* Button to Trigger Modal */}

            {
                bookNow ?
                    <button type="button"
                        className="side-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#whatsappModel" href="#">
                        <img src={tagIcon.src} alt="Tag" /> Talk To Our Expert
                    </button> : detail ? <button
                        type="button"
                        className="side-btn two"
                        data-bs-toggle="modal"
                        data-bs-target="#whatsappModel"
                    >
                        Chat Via WhatsApp
                        <IoLogoWhatsapp className='text-success' size={25} />
                    </button> : <button
                        type="button"
                        className='bg-success rounded-circle p-2 d-flex align-items-center justify-content-center'
                        data-bs-toggle="modal"
                        data-bs-target="#whatsappModel"
                        style={{height: '50px', width: '50px' }}
                    >
                        <IoLogoWhatsapp className='text-white' size={25} />
                    </button>
            }

            {/* Modal Component */}
            <div
                className="modal fade"
                id="whatsappModel"
                tabIndex="-1"
                aria-labelledby="whatsappModelLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="whatsappModelLabel">
                                Chat via WhatsApp
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        {/* Modal Body */}
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <div className={`custom_form_inputs ${errors.name && "is-invalid"}`}>
                                        <label htmlFor="name" className="col-form-label">
                                            Name:
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control `}
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.name && (
                                        <div className="invalid-feedback">{errors.name}</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <div className={`custom_form_inputs ${errors.phone_number && "is-invalid"}`}>
                                        <label htmlFor="phone_number" className="col-form-label">
                                            Mobile:
                                        </label>
                                        <input
                                            type="tel"
                                            className={`form-control`}
                                            id="phone_number"
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.phone_number && (
                                        <div className="invalid-feedback">{errors.phone_number}</div>
                                    )}
                                </div>
                                <div className="modal-footer">
                                    {/* <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button> */}
                                    <button
                                        type="submit"
                                        className="btn btn-theme-red"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Submitting..." : "Continue to Chat"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalLeadForm;
