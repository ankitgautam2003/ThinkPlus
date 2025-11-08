import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    
    // Don't show navbar navigation on login/signup pages
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

    useEffect(() => {
        if (isAuthPage) {
            setIsScrolled(false);
            return;
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Update active section based on scroll position
            if (location.pathname === '/') {
                const sections = ['home', 'courses', 'features', 'about', 'testimonials', 'contact'];
                const scrollPosition = window.scrollY + 100;

                sections.forEach((section) => {
                    const element = document.getElementById(section);
                    if (element) {
                        const { offsetTop, offsetHeight } = element;
                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            setActiveSection(section);
                        }
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isAuthPage, location.pathname]);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            // If not on home page, navigate to home first
            window.location.href = `/#${sectionId}`;
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'courses', label: 'Courses', path: '/#courses' },
        { id: 'features', label: 'Features', path: '/#features' },
        { id: 'about', label: 'About', path: '/#about' },
        { id: 'testimonials', label: 'Testimonials', path: '/#testimonials' },
        { id: 'contact', label: 'Contact', path: '/#contact' }
    ];

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <motion.div
                            className="logo"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <h2>Think<span>Plus</span></h2>
                        </motion.div>
                    </Link>

                    {!isAuthPage && (
                        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.id}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                        onClick={(e) => {
                                            if (link.id !== 'home') {
                                                handleNavClick(e, link.id);
                                            }
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    )}

                    <div className="nav-buttons">
                        <motion.button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <i className="fas fa-moon"></i>
                            ) : (
                                <i className="fas fa-sun"></i>
                            )}
                        </motion.button>
                        {!isAuthPage && (
                            <>
                                <Link to="/login">
                                    <motion.button
                                        className="btn btn-secondary"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Login
                                    </motion.button>
                                </Link>
                                <Link to="/signup">
                                    <motion.button
                                        className="btn btn-primary"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Sign Up
                                    </motion.button>
                                </Link>
                            </>
                        )}
                    </div>

                    <motion.div
                        className="hamburger"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className={isMobileMenuOpen ? 'active' : ''}></span>
                        <span className={isMobileMenuOpen ? 'active' : ''}></span>
                        <span className={isMobileMenuOpen ? 'active' : ''}></span>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;

