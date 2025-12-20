'use client'
import { ApiService} from "@/services/apiservice";
import { useState } from "react";
import arrow from '../../assets/images/icons/arrow.svg'

const ContactForm = () => {
    const defaultFormData = {
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        comment: "",
    }
    const [formData, setFormData] = useState(defaultFormData);

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Validate Form
    const validate = () => {
        const errors = {};
        if (!formData.first_name.trim()) errors.first_name = "First Name is required";
        if (!formData.last_name) errors.last_name = "Last Name file is required";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Valid email is required";
        if (!formData.phone_number.trim() || formData.phone_number.length !== 10) errors.phone_number = "Valid 10-digit phone number is required";
        if (!formData.comment) errors.comment = "Previous insurance file is required";
        return errors;
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
            
            const response = await ApiService('items/contact', 'post', formData)

            if (response.data) {
                setErrors({});
                setFormData(defaultFormData);
                alert("Form submitted successfully!");
            } else {
                alert("Failed to submit the form. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="calculater-sec pt-0">
            <div className="right-box">
                <div className="row justify-content-center">
                    <div className="content-column">
                        <div className="inner-column">
                            <form className="row" onSubmit={handleSubmit}>
                                <div className="col-lg-6 mb-4">
                                    <div className="form_boxes">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            placeholder=""
                                            value={formData.first_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.first_name && <small className="text-danger">{errors.first_name}</small>}
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="form_boxes">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            placeholder=""
                                            value={formData.last_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.last_name && <small className="text-danger">{errors.last_name}</small>}
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="form_boxes">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder=""
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.email && <small className="text-danger">{errors.email}</small>}
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="form_boxes">
                                        <label>Phone No.</label>
                                        <input
                                            type="number"
                                            name="phone_number"
                                            placeholder=""
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.phone_number && <small className="text-danger">{errors.phone_number}</small>}
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <div className="form_boxes">
                                        <label>Comment</label>
                                        <textarea
                                            type="text"
                                            name="comment"
                                            placeholder=""
                                            value={formData.comment}
                                            onChange={handleChange}
                                            className="text-dark"
                                        />
                                    </div>
                                    {errors.comment && <small className="text-danger">{errors.comment}</small>}
                                </div>
                                <div className="form-submit d-flex justify-content-start">
                                    <button type="submit" className="theme-btn btn-style-one hover-light" disabled={isSubmitting}>
                                        {isSubmitting ? "Submitting..." : "Send Message"}
                                        <img src={arrow.src} alt="" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
