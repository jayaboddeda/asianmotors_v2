'use client'
import { ApiService, SaveFile } from "@/services/apiservice";
import { useRef, useState } from "react";
import arrow from '../../assets/images/icons/arrow.svg'

const InsuranceForm = () => {
    const defaultFormData = {
        name: "",
        email: "",
        phone_no: "",
        registration: "",
        prev_insurance: "",
        files: [],
    }
    const [formData, setFormData] = useState(defaultFormData);

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputsRef = useRef({});

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle File Change
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = e.target.files[0];
        const key = e.target.name;
        setFormData((prev) => ({
            ...prev,
            [name]: files[0],
            files: [...prev.files, { key, file }]
        }));
    };

    // Validate Form
    const validate = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Valid email is required";
        if (!formData.phone_no.trim() || formData.phone_no.length !== 10) errors.phone_no = "Valid 10-digit phone number is required";
        if (!formData.registration) errors.registration = "Registration file is required";
        if (!formData.prev_insurance) errors.prev_insurance = "Previous insurance file is required";
        return errors;
    };

    const handleFileUpload = async () => {
        
        const updatedFormData = { ...formData }; // Local copy

        // Map images to upload promises
        const uploadPromises = formData.files.map(async (imageObj) => {
            const formDataForFile = new FormData();
            formDataForFile.append("file", imageObj.file);

            try {
                const response = await SaveFile(formDataForFile);
                if (response) {
                    updatedFormData[imageObj.key] = response.data.id; // Update local copy
                }
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        });

        // Wait for all uploads to complete
        await Promise.all(uploadPromises);
        setFormData(updatedFormData); // Batch update once
        
        return updatedFormData;
    }

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
            const updatedFormData = await handleFileUpload();
            
            const response = await ApiService('items/insurance', 'post', updatedFormData)

            if (response) {
                setErrors({});
                setFormData(defaultFormData);
                Object.keys(fileInputsRef.current).forEach((key) => {
                    if (fileInputsRef.current[key]) fileInputsRef.current[key].value = null;
                });
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
                    <div className="col-lg-7 content-column">
                        <div className="inner-column">
                            <div className="boxcar-title">
                                <h2>Secure Your Ride with Comprehensive Car Insurance</h2>
                                <p>Reliable Coverage Tailored to Your Needs, Offering Peace of Mind, Financial Protection, and Hassle-Free Claims Processing</p>
                            </div>
                            <form className="row" onSubmit={handleSubmit}>
                                <div className="col-lg-4 mb-4">
                                    <div className="form_boxes">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder=""
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.name && <small className="text-danger">{errors.name}</small>}
                                </div>
                                <div className="col-lg-4 mb-4">
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
                                <div className="col-lg-4 mb-4">
                                    <div className="form_boxes">
                                        <label>Phone No.</label>
                                        <input
                                            type="number"
                                            name="phone_no"
                                            placeholder=""
                                            value={formData.phone_no}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.phone_no && <small className="text-danger">{errors.phone_no}</small>}
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="form_boxes">
                                        <label>Registration</label>
                                        <input
                                            type="file"
                                            name="registration"
                                            placeholder=""
                                            onChange={handleFileChange}
                                            ref={(el) => (fileInputsRef.current.file1 = el)}
                                        />
                                    </div>
                                    {errors.registration && <small className="text-danger">{errors.registration}</small>}
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="form_boxes">
                                        <label>Prev Insurance</label>
                                        <input
                                            type="file"
                                            name="prev_insurance"
                                            placeholder=""
                                            onChange={handleFileChange}
                                            ref={(el) => (fileInputsRef.current.file2 = el)}
                                        />
                                    </div>
                                    {errors.prev_insurance && <small className="text-danger">{errors.prev_insurance}</small>}
                                </div>
                                <div className="form-submit d-flex justify-content-end">
                                    <button type="submit" className="theme-btn btn-style-one hover-light" disabled={isSubmitting}>
                                        {isSubmitting ? "Submitting..." : "Request Quote"}
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

export default InsuranceForm;
