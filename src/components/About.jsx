import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const statsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        statsRef.current.forEach((stat) => {
            if (stat) observer.observe(stat);
        });

        return () => observer.disconnect();
    }, []);

    const animateCounter = (element) => {
        const target = parseInt(element.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString() + (element.textContent.includes('%') ? '%' : '+');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString() + (element.textContent.includes('%') ? '%' : '+');
            }
        }, 16);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.8 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="about" className="about">
            <div className="container">
                <motion.div
                    className="about-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div className="about-text" variants={itemVariants}>
                        <motion.h2
                            className="section-title"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            About ThinkPlus Education
                        </motion.h2>
                        <motion.p
                            className="about-description"
                            variants={itemVariants}
                        >
                            ThinkPlus Education is a premier EdTech platform dedicated to helping students achieve their dreams
                            of getting into top management and law schools. With years of experience and a team of expert faculty,
                            we have successfully guided thousands of students towards their goals.
                        </motion.p>
                        <motion.p
                            className="about-description"
                            variants={itemVariants}
                        >
                            Our mission is to make quality education accessible to everyone, breaking down barriers and empowering
                            students with the knowledge and skills they need to excel in competitive exams. We believe in a
                            personalized approach to learning, ensuring each student receives the attention and guidance they deserve.
                        </motion.p>

                        <motion.div
                            className="about-stats"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="about-stat"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h3 ref={(el) => (statsRef.current[0] = el)} data-target="50000">
                                    0+
                                </h3>
                                <p>Happy Students</p>
                            </motion.div>
                            <motion.div
                                className="about-stat"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h3 ref={(el) => (statsRef.current[1] = el)} data-target="1000">
                                    0+
                                </h3>
                                <p>Expert Faculty</p>
                            </motion.div>
                            <motion.div
                                className="about-stat"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h3 ref={(el) => (statsRef.current[2] = el)} data-target="95">
                                    0%
                                </h3>
                                <p>Success Rate</p>
                            </motion.div>
                        </motion.div>

                        <motion.button
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => alert('Learn more about us!')}
                            variants={itemVariants}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="about-image"
                        variants={imageVariants}
                    >
                        <motion.div
                            className="about-card"
                            whileHover={{ rotate: 5, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                            >
                                <i className="fas fa-award"></i>
                            </motion.div>
                            <h3>Recognized Excellence</h3>
                            <p>Award-winning platform trusted by students nationwide</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

