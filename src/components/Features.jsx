import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: 'fa-video',
            title: 'Live Interactive Classes',
            description: 'Attend live classes with expert faculty and interact in real-time to clarify your doubts instantly.'
        },
        {
            icon: 'fa-user-friends',
            title: 'Expert Faculty',
            description: 'Learn from IIM alumni, industry experts, and experienced educators who are passionate about your success.'
        },
        {
            icon: 'fa-clock',
            title: '24/7 Doubt Clearing',
            description: 'Get your doubts resolved anytime, anywhere with our round-the-clock support system and AI-powered chatbot.'
        },
        {
            icon: 'fa-file-alt',
            title: 'Comprehensive Study Material',
            description: 'Access well-structured study materials, notes, and resources curated by subject matter experts.'
        },
        {
            icon: 'fa-chart-bar',
            title: 'Performance Analytics',
            description: 'Track your progress with detailed analytics, identify strengths and weaknesses, and improve strategically.'
        },
        {
            icon: 'fa-mobile-alt',
            title: 'Learn Anywhere, Anytime',
            description: 'Access courses on any device - desktop, tablet, or mobile - and learn at your own pace.'
        },
        {
            icon: 'fa-users',
            title: 'Peer Learning Community',
            description: 'Join a vibrant community of learners, participate in discussions, and grow together.'
        },
        {
            icon: 'fa-trophy',
            title: 'Proven Success Rate',
            description: 'Join thousands of successful students who have achieved their dream scores and secured admissions in top institutes.'
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

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="features" className="features">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Why Choose ThinkPlus?</h2>
                    <p className="section-subtitle">Experience the difference with our innovative learning platform</p>
                </motion.div>

                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            variants={itemVariants}
                            whileHover={{ 
                                y: -10, 
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            <motion.div
                                className="feature-icon"
                                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <i className={`fas ${feature.icon}`}></i>
                            </motion.div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;

