import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    const footerSections = [
        {
            title: 'Quick Links',
            links: [
                { label: 'Home', href: '#home' },
                { label: 'Courses', href: '#courses' },
                { label: 'Features', href: '#features' },
                { label: 'About Us', href: '#about' },
                { label: 'Testimonials', href: '#testimonials' }
            ]
        },
        {
            title: 'Courses',
            links: [
                { label: 'CAT Preparation', href: '#courses' },
                { label: 'IPMAT Preparation', href: '#courses' },
                { label: 'CLAT Preparation', href: '#courses' },
                { label: 'IQ+ Program', href: '#courses' },
                { label: 'Career Counseling', href: '#courses' }
            ]
        },
        {
            title: 'Contact',
            info: [
                { icon: 'fa-phone', text: '+91 98765 43210' },
                { icon: 'fa-envelope', text: 'info@thinkpluseducation.com' },
                { icon: 'fa-map-marker-alt', text: 'Learning City, India' }
            ]
        }
    ];

    const socialLinks = [
        { icon: 'fa-facebook', href: '#' },
        { icon: 'fa-twitter', href: '#' },
        { icon: 'fa-instagram', href: 'https://www.instagram.com/thinkpluseducation/?hl=en' },
        { icon: 'fa-linkedin', href: '#' },
        { icon: 'fa-youtube', href: 'https://www.youtube.com/@ThinkplusMBA/videos' }
    ];

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    };

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <motion.div
                    className="footer-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="footer-section" variants={itemVariants}>
                        <h3>ThinkPlus</h3>
                        <p>Empowering students to achieve their dreams through quality education and expert guidance.</p>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target={link.href !== '#' ? "_blank" : "_self"}
                                    rel={link.href !== '#' ? "noopener noreferrer" : ""}
                                    className="social-link"
                                    whileHover={{ y: -5, scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <i className={`fab ${link.icon}`}></i>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {footerSections.map((section, index) => (
                        <motion.div
                            key={index}
                            className="footer-section"
                            variants={itemVariants}
                        >
                            <h4>{section.title}</h4>
                            {section.links ? (
                                <ul>
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                onClick={(e) => handleLinkClick(e, link.href)}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul>
                                    {section.info.map((info, infoIndex) => (
                                        <li key={infoIndex}>
                                            <i className={`fas ${info.icon}`}></i>
                                            {info.text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p>Designed and Developed by <a href="https://www.linkedin.com/in/ankit-gautam-85a807259/" target="_blank" rel="noopener noreferrer">Ankit Gautam</a></p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

