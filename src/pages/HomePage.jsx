import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Courses from '../components/Courses';
import Features from '../components/Features';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main>
                <Home />
                <Courses />
                <Features />
                <About />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;

