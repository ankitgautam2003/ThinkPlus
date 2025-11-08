import React from 'react';
import { motion } from 'framer-motion';
import './Courses.css';

const Courses = () => {
    const courses = [
        {
            id: 1,
            title: 'CAT Preparation',
            icon: 'fa-chart-line',
            description: 'Master the Common Admission Test with our comprehensive course designed by IIM alumni and industry experts.',
            features: [
                'Live Interactive Classes',
                '500+ Mock Tests',
                'Personalized Mentorship',
                '24/7 Doubt Clearing'
            ],
            price: '₹29,999',
            featured: false
        },
        {
            id: 2,
            title: 'IPMAT Preparation',
            icon: 'fa-user-graduate',
            description: 'Excel in Integrated Programme in Management Aptitude Test with structured learning and expert guidance.',
            features: [
                'Comprehensive Study Material',
                'Mock Test Series',
                'One-on-One Sessions',
                'Performance Analytics'
            ],
            price: '₹24,999',
            featured: true
        },
        {
            id: 3,
            title: 'CLAT Preparation',
            icon: 'fa-balance-scale',
            description: 'Prepare for Common Law Admission Test with our specialized curriculum and expert legal faculty.',
            features: [
                'Legal Reasoning Focus',
                'Current Affairs Updates',
                'Practice Papers',
                'Exam Strategy Sessions'
            ],
            price: '₹19,999',
            featured: false
        },
        {
            id: 4,
            title: 'IQ+ Program',
            icon: 'fa-brain',
            description: 'Enhance your analytical and logical reasoning skills with our comprehensive IQ development program.',
            features: [
                'Cognitive Development',
                'Problem Solving Techniques',
                'Interactive Workshops',
                'Skill Assessment'
            ],
            price: '₹14,999',
            featured: false
        },
        {
            id: 5,
            title: 'Career Counseling',
            icon: 'fa-briefcase',
            description: 'Get personalized career guidance from experienced counselors to make informed decisions about your future.',
            features: [
                'Career Assessment',
                'Personalized Roadmap',
                'Industry Insights',
                'Ongoing Support'
            ],
            price: '₹9,999',
            featured: false
        },
        {
            id: 6,
            title: 'Online Test Series',
            icon: 'fa-laptop-code',
            description: 'Practice with our comprehensive test series designed to simulate real exam conditions and improve your performance.',
            features: [
                '1000+ Practice Tests',
                'Detailed Solutions',
                'Performance Reports',
                'All-India Rankings'
            ],
            price: '₹4,999',
            featured: false
        }
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

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const handleEnroll = (courseTitle) => {
        alert(`Thank you for your interest in ${courseTitle}! Please fill out the contact form, and we'll get back to you with enrollment details.`);
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const offsetTop = contactSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="courses" className="courses">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Our Courses</h2>
                    <p className="section-subtitle">Comprehensive preparation for your dream career</p>
                </motion.div>

                <motion.div
                    className="courses-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            className={`course-card ${course.featured ? 'featured' : ''}`}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {course.featured && (
                                <motion.div
                                    className="badge"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.3, type: "spring" }}
                                >
                                    Most Popular
                                </motion.div>
                            )}
                            <motion.div
                                className="course-icon"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <i className={`fas ${course.icon}`}></i>
                            </motion.div>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <ul className="course-features">
                                {course.features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <i className="fas fa-check"></i>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="course-footer">
                                <span className="course-price">{course.price}</span>
                                <motion.button
                                    className="btn btn-primary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleEnroll(course.title)}
                                >
                                    Enroll Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Courses;

