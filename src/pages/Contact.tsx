import { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const MAX_MESSAGE_LENGTH = 500;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Phone validation - exactly 10 digits
    const phoneRegex = /^\d{10}$/;

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        // Full Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = "Name must be at least 2 characters";
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
            newErrors.phone = "Phone number must be exactly 10 digits";
        }

        // Subject validation
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        } else if (formData.subject.trim().length < 3) {
            newErrors.subject = "Subject must be at least 3 characters";
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        } else if (formData.message.length > MAX_MESSAGE_LENGTH) {
            newErrors.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        // For phone, only allow digits and limit to 10
        if (name === "phone") {
            const digitsOnly = value.replace(/\D/g, "");
            if (digitsOnly.length <= 10) {
                setFormData({ ...formData, [name]: digitsOnly });
            }
            return;
        }

        // For message, limit to MAX_MESSAGE_LENGTH
        if (name === "message" && value.length > MAX_MESSAGE_LENGTH) {
            return;
        }

        setFormData({ ...formData, [name]: value });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // EmailJS configuration - Uses environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

            // Template parameters
            const templateParams = {
                from_name: formData.fullName,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                phone: formData.phone,
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitStatus("success");

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);

        } catch (error) {
            console.error("Email send failed:", error);
            setSubmitStatus("error");

            // Clear error message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const messageCharsRemaining = MAX_MESSAGE_LENGTH - formData.message.length;

    return (
        <>
            <Header />

            <section className="relative w-full min-h-screen bg-[#080032] flex items-center px-6 md:px-12 lg:px-24 py-32">
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* LEFT SIDE - Heading */}
                    <div>
                        <p className="text-white/50 text-sm md:text-base mb-6">Contact Us</p>

                        <h1 className="font-display text-[80px] md:text-[100px] lg:text-[120px] font-bold text-[#4ab6ff] leading-none mb-8">
                            Let's Talk
                        </h1>

                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            <p className="text-white mb-2">Your next big ideas</p>
                            <p className="text-[#2a5266]">starts here. Lets make</p>
                            <p className="text-[#2a5266]">it real!</p>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Form */}
                    <div className="w-full">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className={`w-full bg-transparent border ${errors.fullName ? "border-red-400" : "border-white/30"
                                        } text-white placeholder-white/50 px-6 py-4 rounded-sm focus:outline-none focus:border-sky-400 transition-colors duration-300`}
                                />
                                {errors.fullName && (
                                    <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email address"
                                    className={`w-full bg-transparent border ${errors.email ? "border-red-400" : "border-white/30"
                                        } text-white placeholder-white/50 px-6 py-4 rounded-sm focus:outline-none focus:border-sky-400 transition-colors duration-300`}
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone (10 digits)"
                                    maxLength={10}
                                    className={`w-full bg-transparent border ${errors.phone ? "border-red-400" : "border-white/30"
                                        } text-white placeholder-white/50 px-6 py-4 rounded-sm focus:outline-none focus:border-sky-400 transition-colors duration-300`}
                                />
                                {errors.phone && (
                                    <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                                )}
                            </div>

                            {/* Subject */}
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className={`w-full bg-transparent border ${errors.subject ? "border-red-400" : "border-white/30"
                                        } text-white placeholder-white/50 px-6 py-4 rounded-sm focus:outline-none focus:border-sky-400 transition-colors duration-300`}
                                />
                                {errors.subject && (
                                    <p className="text-red-400 text-sm mt-2">{errors.subject}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    rows={4}
                                    className={`w-full bg-transparent border ${errors.message ? "border-red-400" : "border-white/30"
                                        } text-white placeholder-white/50 px-6 py-4 rounded-sm focus:outline-none focus:border-sky-400 transition-colors duration-300 resize-none`}
                                />
                                <div className="flex justify-between items-center mt-2">
                                    {errors.message ? (
                                        <p className="text-red-400 text-sm">{errors.message}</p>
                                    ) : (
                                        <div />
                                    )}
                                    <p className={`text-sm ${messageCharsRemaining < 50 ? "text-yellow-400" : "text-white/50"
                                        }`}>
                                        {messageCharsRemaining} characters remaining
                                    </p>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full font-semibold text-lg py-4 rounded-sm transition-all duration-300 ${isSubmitting
                                        ? "bg-white/50 text-[#132c3b]/50 cursor-not-allowed"
                                        : "bg-white/90 hover:bg-white text-[#132c3b] hover:shadow-lg"
                                    }`}
                            >
                                {isSubmitting ? "Sending..." : "Submit"}
                            </button>

                            {/* Status Messages */}
                            {submitStatus === "success" && (
                                <div className="bg-green-500/20 border border-green-500 text-green-400 px-6 py-4 rounded-sm">
                                    ✓ Message sent successfully! We'll get back to you soon.
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="bg-red-500/20 border border-red-500 text-red-400 px-6 py-4 rounded-sm">
                                    ✗ Failed to send message. Please try again or email us directly.
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </section>

            <Footer theme="dark" />
        </>
    );
};

export default Contact;
