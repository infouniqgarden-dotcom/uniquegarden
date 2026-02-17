"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
    location: string;
    projectType: string;
    projectDetails: string;
    companyName: string;
    faxNumber: string;
}

interface FormErrors {
    [key: string]: string;
}

function ContactFormContent() {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phoneNumber: "",
        location: "",
        projectType: "",
        projectDetails: "",
        companyName: "",
        faxNumber: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (!/^[\d\s+()-]+$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Please enter a valid phone number";
        }

        if (!formData.location.trim()) {
            newErrors.location = "Location is required";
        }

        if (!formData.projectType) {
            newErrors.projectType = "Please select a project type";
        }

        if (!formData.projectDetails.trim()) {
            newErrors.projectDetails = "Project details are required";
        } else if (formData.projectDetails.trim().length < 20) {
            newErrors.projectDetails = "Please provide at least 20 characters";
        } else if (formData.projectDetails.trim().length > 500) {
            newErrors.projectDetails = "Project details must not exceed 500 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.companyName || formData.faxNumber) {
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitStatus("success"); // Fake success
            }, 2000);
            return;
        }

        if (!validateForm()) {
            return;
        }

        if (!executeRecaptcha) {
            setErrorMessage("reCAPTCHA not ready. Please try again.");
            setSubmitStatus("error");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            // Get reCAPTCHA token
            const recaptchaToken = await executeRecaptcha("contact_form");

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 403) {
                    setErrorMessage("Security verification failed. Please try again.");
                } else {
                    setErrorMessage(data.error || "Submission failed");
                }
                throw new Error(data.error || "Submission failed");
            }

            setSubmitStatus("success");

            // Reset form after successful submission
            setFormData({
                name: "",
                email: "",
                phoneNumber: "",
                location: "",
                projectType: "",
                projectDetails: "",
                companyName: "",
                faxNumber: "",
            });

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="widget-wrapper form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div
                    style={{
                        position: "absolute",
                        left: "-9999px",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                    }}
                    aria-hidden="true"
                >
                    <label htmlFor="company-name">Company Name</label>
                    <input
                        type="text"
                        id="company-name"
                        name="companyName"
                        value={formData.companyName}
                        maxLength={100}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                        placeholder="Enter your company name"
                    />
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="name">
                            Name <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Zara Almasi"
                            autoComplete="name"
                            aria-required="true"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                            <span id="name-error" className="error-message" role="alert">
                                {errors.name}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            Email <span className="required">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="zaraalmasi@uniquegarden.com"
                            autoComplete="email"
                            aria-required="true"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                            <span id="email-error" className="error-message" role="alert">
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone-number">
                            Phone Number <span className="required">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            id="phone-number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="+971 50 123 4567"
                            autoComplete="tel"
                            aria-required="true"
                            aria-invalid={!!errors.phoneNumber}
                            aria-describedby={errors.phoneNumber ? "phone-error" : undefined}
                        />
                        {errors.phoneNumber && (
                            <span id="phone-error" className="error-message" role="alert">
                                {errors.phoneNumber}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">
                            Location <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Dubai, UAE"
                            autoComplete="address-level2"
                            aria-required="true"
                            aria-invalid={!!errors.location}
                            aria-describedby={errors.location ? "location-error" : undefined}
                        />
                        {errors.location && (
                            <span id="location-error" className="error-message" role="alert">
                                {errors.location}
                            </span>
                        )}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="project-type">
                        Project Type <span className="required">*</span>
                    </label>
                    <select
                        name="projectType"
                        id="project-type"
                        value={formData.projectType}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.projectType}
                        aria-describedby={errors.projectType ? "project-type-error" : undefined}
                    >
                        <option value="">Select a service</option>
                        <option value="Residential">Residential Landscaping</option>
                        <option value="Commercial">Commercial Landscaping</option>
                        <option value="Garden Design">Garden Design</option>
                        <option value="Maintenance">Maintenance Services</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.projectType && (
                        <span id="project-type-error" className="error-message" role="alert">
                            {errors.projectType}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="project-details">
                        Project Details <span className="required">*</span>
                    </label>
                    <textarea
                        name="projectDetails"
                        id="project-details"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        placeholder="Tell us about your project, vision, or requirements"
                        rows={6}
                        aria-required="true"
                        aria-invalid={!!errors.projectDetails}
                        aria-describedby={errors.projectDetails ? "project-details-error" : "project-details-help"}
                    />
                    <span id="project-details-help" className="help-text">
                        {formData.projectDetails.length}/500 characters (minimum 20)
                    </span>
                    {errors.projectDetails && (
                        <span id="project-details-error" className="error-message" role="alert">
                            {errors.projectDetails}
                        </span>
                    )}
                </div>

                <div
                    style={{
                        position: "absolute",
                        left: "-9999px",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                    }}
                    aria-hidden="true"
                >
                    <label htmlFor="fax-number">Fax Number</label>
                    <input
                        type="text"
                        id="fax-number"
                        name="faxNumber"
                        maxLength={100}
                        value={formData.faxNumber}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                        placeholder="Enter your fax number if applicable"
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                </div>

                {submitStatus === "success" && (
                    <div className="alert alert-success" role="alert">
                        Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                    </div>
                )}

                {submitStatus === "error" && (
                    <div className="alert alert-error" role="alert">
                        {errorMessage || "Something went wrong. Please try again or contact us directly."}
                    </div>
                )}
            </form>
        </div>
    );
}

export default function ContactForm() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}>
            <ContactFormContent />
        </GoogleReCaptchaProvider>
    );
}
