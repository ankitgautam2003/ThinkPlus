import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Basic validation
            if (!formData.email || !formData.password) {
                setError('Please fill in all fields');
                return;
            }

            // Here you would typically make an API call to authenticate
            // For now, we'll just simulate a successful login
            console.log('Login attempt:', formData);
            
            // Navigate to home page after successful login
            navigate('/');
            
        } catch (err) {
            setError('Login failed. Please check your credentials and try again.');
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
            <div className="login-page">
            <div className="login-container">
                <motion.div
                    className="login-card"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="login-header">
                        <motion.div
                            className="logo-large"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h1>Think<span>Plus</span></h1>
                        </motion.div>
                        <h2>Welcome Back</h2>
                        <p>Sign in to continue your learning journey</p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="login-form">
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
                            <label htmlFor="password">
                                <i className="fas fa-lock"></i> Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>

                        <motion.div
                            className="form-options"
                            variants={itemVariants}
                        >
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <Link to="/forgot-password" className="forgot-password">
                                Forgot Password?
                            </Link>
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
                                    <i className="fas fa-spinner fa-spin"></i> Signing in...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-sign-in-alt"></i> Sign In
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
                            className="signup-link"
                            variants={itemVariants}
                        >
                            Don't have an account?{' '}
                            <Link to="/signup">Sign Up</Link>
                        </motion.p>
                    </form>
                </motion.div>

                <motion.div
                    className="login-illustration"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="illustration-card"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <i className="fas fa-graduation-cap"></i>
                        <h3>Start Learning Today</h3>
                        <p>Join thousands of students achieving their dreams</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
        </>
    );
};

export default Login;

