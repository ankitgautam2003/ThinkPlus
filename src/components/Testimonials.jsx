import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Rajesh Kumar',
            role: 'CAT 2023 - 99.5%ile | IIM Ahmedabad',
            text: '"ThinkPlus Education transformed my CAT preparation journey. The expert faculty, comprehensive study material, and personalized mentorship helped me achieve a 99.5 percentile. Highly recommended!"',
            rating: 5
        },
        {
            id: 2,
            name: 'Priya Sharma',
            role: 'IPMAT 2023 | IIM Indore',
            text: '"The IPMAT course at ThinkPlus is exceptional! The live classes and mock tests helped me understand the exam pattern thoroughly. Thanks to the team, I\'m now at IIM Indore!"',
            rating: 5
        },
        {
            id: 3,
            name: 'Amit Verma',
            role: 'CLAT 2023 | NLU Delhi',
            text: '"Outstanding support and guidance throughout my CLAT preparation. The legal reasoning modules were particularly helpful. I secured admission in NLU Delhi with their help!"',
            rating: 5
        },
        {
            id: 4,
            name: 'Anjali Patel',
            role: 'CAT 2023 - 98.2%ile | IIM Bangalore',
            text: '"The best investment I made for my career! The course structure, faculty support, and study materials are top-notch. ThinkPlus truly cares about student success."',
            rating: 5
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">What Our Students Say</h2>
                    <p className="section-subtitle">Real stories from real students who achieved their dreams</p>
                </motion.div>

                <motion.div
                    className="testimonials-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            className="testimonial-card"
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10, 
                                scale: 1.02,
                                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className="testimonial-rating"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, type: "spring" }}
                            >
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.i
                                        key={i}
                                        className="fas fa-star"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                    />
                                ))}
                            </motion.div>
                            <motion.p
                                className="testimonial-text"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                {testimonial.text}
                            </motion.p>
                            <motion.div
                                className="testimonial-author"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <motion.div
                                    className="author-avatar"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <i className="fas fa-user"></i>
                                </motion.div>
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;

