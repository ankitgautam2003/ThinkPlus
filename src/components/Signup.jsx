import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './Navbar';
import './Signup.css';

const Signup = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Validation
            if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
                setError('Please fill in all required fields');
                setIsSubmitting(false);
                return;
            }

            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match');
                setIsSubmitting(false);
                return;
            }

            if (formData.password.length < 6) {
                setError('Password must be at least 6 characters long');
                setIsSubmitting(false);
                return;
            }

            if (!formData.agreeToTerms) {
                setError('Please agree to the Terms and Conditions');
                setIsSubmitting(false);
                return;
            }

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            console.log('Signup attempt:', formData);
            
            // Navigate to home page after successful signup
            navigate('/');
            
        } catch (err) {
            setError('Signup failed. Please try again.');
        } finally {
            setIsSubmitting(false);
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
        <>
            <Navbar />
            <div className="signup-page">
            <div className="signup-container">
                <motion.div
                    className="signup-card"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="signup-header">
                        <motion.div
                            className="logo-large"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h1>Think<span>Plus</span></h1>
                        </motion.div>
                        <h2>Create Your Account</h2>
                        <p>Start your learning journey with us today</p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="signup-form">
                        {error && (
                            <motion.div
                                className="error-message"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <i className="fas fa-exclamation-circle"></i>
                                {error}
                            </motion.div>
                        )}

                        <motion.div
                            className="form-group"
                            variants={itemVariants}
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label htmlFor="name">
                                <i className="fas fa-user"></i> Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>

                        <motion.div
                            className="form-group"
                            variants={itemVariants}
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label htmlFor="email">
                                <i className="fas fa-envelope"></i> Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>

                        <motion.div
                            className="form-group"
                            variants={itemVariants}
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label htmlFor="phone">
                                <i className="fas fa-phone"></i> Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </motion.div>

                        <motion.div
                            className="form-group"
                            variants={itemVariants}
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label htmlFor="password">
                                <i className="fas fa-lock"></i> Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength={6}
                            />
                        </motion.div>

                        <motion.div
                            className="form-group"
                            variants={itemVariants}
                            whileFocus={{ scale: 1.02 }}
                        >
                            <label htmlFor="confirmPassword">
                                <i className="fas fa-lock"></i> Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                minLength={6}
                            />
                        </motion.div>

                        <motion.div
                            className="form-group"
                            variants={itemVariants}
                        >
                            <label className="terms-checkbox">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    required
                                />
                                <span>I agree to the <Link to="/terms">Terms and Conditions</Link> and <Link to="/privacy">Privacy Policy</Link></span>
                            </label>
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="btn btn-primary btn-large btn-block"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i> Creating Account...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-user-plus"></i> Create Account
                                </>
                            )}
                        </motion.button>

                        <motion.div
                            className="divider"
                            variants={itemVariants}
                        >
                            <span>OR</span>
                        </motion.div>

                        <motion.div
                            className="social-login"
                            variants={itemVariants}
                        >
                            <motion.button
                                type="button"
                                className="btn btn-social google"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i className="fab fa-google"></i> Continue with Google
                            </motion.button>
                            <motion.button
                                type="button"
                                className="btn btn-social facebook"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i className="fab fa-facebook"></i> Continue with Facebook
                            </motion.button>
                        </motion.div>

                        <motion.p
                            className="login-link"
                            variants={itemVariants}
                        >
                            Already have an account?{' '}
                            <Link to="/login">Sign In</Link>
                        </motion.p>
                    </form>
                </motion.div>

                <motion.div
                    className="signup-illustration"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="illustration-card"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <i className="fas fa-user-graduate"></i>
                        <h3>Join ThinkPlus Today</h3>
                        <p>Get access to expert courses, live classes, and comprehensive study materials</p>
                        <ul className="benefits-list">
                            <li><i className="fas fa-check"></i> Expert Faculty</li>
                            <li><i className="fas fa-check"></i> Live Interactive Classes</li>
                            <li><i className="fas fa-check"></i> 24/7 Doubt Clearing</li>
                            <li><i className="fas fa-check"></i> Comprehensive Study Material</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
        </>
    );
};

export default Signup;

