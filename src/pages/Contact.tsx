import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const MAX_MESSAGE_LENGTH = 500;

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = "Name must be at least 2 characters";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        } else if (formData.subject.trim().length < 3) {
            newErrors.subject = "Subject must be at least 3 characters";
        }

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

        if (name === "message" && value.length > MAX_MESSAGE_LENGTH) return;

        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        const recipient = import.meta.env.VITE_CONTACT_EMAIL;

        const body = `Name: ${formData.fullName}\n\n${formData.message}`;

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    const messageCharsRemaining = MAX_MESSAGE_LENGTH - formData.message.length;

    return (
        <>
            <Header />

            <section className="relative w-full min-h-screen bg-theme-primaryBg1 flex items-center px-6 md:px-12 lg:px-24 py-32">
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* LEFT SIDE - Heading */}
                    <div>
                        <p className="text-white/50 text-sm md:text-base mb-6">Contact Us</p>

                        <h1 className="font-display text-[80px] md:text-[100px] lg:text-[120px] font-bold text-theme-primaryText leading-none mb-8">
                            Let's Talk
                        </h1>

                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.70] -space-y-6">
                            <p className="text-theme-primaryText mb-0 tracking-tight">Your next big idea</p>
                            <p className="text-theme-primaryText mb-0 tracking-tight">
                                <span className="text-theme-primaryText">starts here.</span> Let's make
                            </p>
                            <p className="text-theme-primaryText mb-0 tracking-tight">it real!</p>
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
                                        } text-white placeholder-white/50 px-6 py-4 rounded-sm focus:outline-none focus:border-theme-secondaryText transition-colors duration-300`}
                                />
                                {errors.fullName && (
                                    <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>
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
                                        } text-white placeholder-white/50 px-6 py-4 rounded-sm focus:outline-none focus:border-theme-secondaryText transition-colors duration-300`}
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
                                        } text-white placeholder-white/50 px-6 py-4 rounded-sm focus:outline-none focus:border-theme-secondaryText transition-colors duration-300 resize-none`}
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
                                className="w-full font-semibold text-lg py-4 rounded-sm transition-all duration-300 bg-theme-primaryBg2 hover:bg-theme-primaryBg1/90 text-theme-secondaryBg1 hover:shadow-lg"
                            >
                                Send
                            </button>

                        </form>
                    </div>

                </div>
            </section>

            <Footer theme="dark" />
        </>
    );
};

export default Contact;