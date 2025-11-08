import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
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
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const handleScrollToCourses = () => {
        const element = document.getElementById('courses');
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-overlay"></div>
                <div className="hero-particles"></div>
            </div>
            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-text" variants={itemVariants}>
                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Unlock Your Potential with
                            <motion.span
                                className="highlight"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                ThinkPlus Education
                            </motion.span>
                        </motion.h1>
                        <motion.p
                            className="hero-description"
                            variants={itemVariants}
                        >
                            Transform your career with our expert-led coaching for CAT, IPMAT, CLAT, and more.
                            Join thousands of successful students who achieved their dream scores.
                        </motion.p>

                        <motion.div
                            className="hero-stats"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="stat"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h3 ref={(el) => (statsRef.current[0] = el)} data-target="50000">
                                    0
                                </h3>
                                <p>Students Enrolled</p>
                            </motion.div>
                            <motion.div
                                className="stat"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h3 ref={(el) => (statsRef.current[1] = el)} data-target="95">
                                    0%
                                </h3>
                                <p>Success Rate</p>
                            </motion.div>
                            <motion.div
                                className="stat"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h3 ref={(el) => (statsRef.current[2] = el)} data-target="1000">
                                    0+
                                </h3>
                                <p>Expert Faculty</p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="hero-buttons"
                            variants={itemVariants}
                        >
                            <motion.button
                                className="btn btn-primary btn-large"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleScrollToCourses}
                            >
                                Start Learning Today
                            </motion.button>
                            <motion.a
                                href="https://www.youtube.com/@ThinkplusMBA/videos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-large"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                <i className="fas fa-play"></i> Watch Demo
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-image"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="hero-card"
                            initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            whileHover={{ rotate: 5, scale: 1.05 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            >
                                <i className="fas fa-graduation-cap"></i>
                            </motion.div>
                            <h3>Expert Coaching</h3>
                            <p>Learn from industry leaders</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <i className="fas fa-chevron-down"></i>
            </motion.div>
        </section>
    );
};

export default Home;

