import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate form submission (display only - no email sending)
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            // Reset form after showing success message
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    course: '',
                    message: ''
                });
                setSubmitStatus(null);
            }, 3000);
        }, 1000);
    };

    const contactInfo = [
        {
            icon: 'fa-map-marker-alt',
            title: 'Address',
            details: ['123 Education Street, Learning City,', 'India - 123456']
        },
        {
            icon: 'fa-phone',
            title: 'Phone',
            details: ['+91 98765 43210', '+91 98765 43211']
        },
        {
            icon: 'fa-envelope',
            title: 'Email',
            details: ['info@thinkpluseducation.com', 'support@thinkpluseducation.com']
        }
    ];

    const socialLinks = [
        { icon: 'fa-facebook', href: '#' },
        { icon: 'fa-twitter', href: '#' },
        { icon: 'fa-instagram', href: 'https://www.instagram.com/thinkpluseducation/?hl=en' },
        { icon: 'fa-linkedin', href: '#' },
        { icon: 'fa-youtube', href: 'https://www.youtube.com/@ThinkplusMBA/videos' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Have questions? We'd love to hear from you</p>
                </motion.div>

                <motion.div
                    className="contact-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div className="contact-info" variants={itemVariants}>
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                className="contact-item"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                            >
                                <motion.div
                                    className="contact-icon"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <i className={`fas ${info.icon}`}></i>
                                </motion.div>
                                <div className="contact-details">
                                    <h3>{info.title}</h3>
                                    {info.details.map((detail, i) => (
                                        <p key={i}>{detail}</p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                        <motion.div
                            className="social-links"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target={link.href !== '#' ? "_blank" : "_self"}
                                    rel={link.href !== '#' ? "noopener noreferrer" : ""}
                                    className="social-link"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <i className={`fab ${link.icon}`}></i>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        variants={itemVariants}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <motion.div
                                className="form-group"
                                whileFocus={{ scale: 1.02 }}
                            >
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>
                            <motion.div
                                className="form-group"
                                whileFocus={{ scale: 1.02 }}
                            >
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>
                            <motion.div
                                className="form-group"
                                whileFocus={{ scale: 1.02 }}
                            >
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Your Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </motion.div>
                            <motion.div
                                className="form-group"
                                whileFocus={{ scale: 1.02 }}
                            >
                                <select
                                    id="course"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a Course</option>
                                    <option value="cat">CAT Preparation</option>
                                    <option value="ipmat">IPMAT Preparation</option>
                                    <option value="clat">CLAT Preparation</option>
                                    <option value="iq">IQ+ Program</option>
                                    <option value="counseling">Career Counseling</option>
                                    <option value="test-series">Online Test Series</option>
                                </select>
                            </motion.div>
                            <motion.div
                                className="form-group"
                                whileFocus={{ scale: 1.02 }}
                            >
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </motion.div>
                            <motion.button
                                type="submit"
                                className="btn btn-primary btn-large"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                            {submitStatus === 'success' && (
                                <p style={{ color: 'var(--success-color)', marginTop: '1rem', textAlign: 'center' }}>
                                    Message sent successfully!
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p style={{ color: 'var(--accent-color)', marginTop: '1rem', textAlign: 'center' }}>
                                    Failed to send message. Please try again.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

