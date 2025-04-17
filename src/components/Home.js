import React, { useEffect } from 'react';
import './Home.css';
import Typed from 'typed.js';  // Import Typed.js

function Home() {
    useEffect(() => {
        // Initialize Typed.js when the component mounts
        const options = {
            strings: [
                "Hi, I'm Ajay Santosh Gokhale."],
            typeSpeed: 50,  // Speed of typing
            backSpeed: 50,  // Speed of erasing
            backDelay: 1000,  // Delay before erasing
            loop: true,  // Keep looping
        };

        const typed = new Typed("#typed-element", options);

        return () => {
            typed.destroy(); // Cleanup when component unmounts
        };
    }, []);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h1 id="typed-element">Hi, I'm Ajay Santosh Gokhale</h1> {/* Element to apply typed effect */}
                <p>I'm a passionate Front-End Developer</p>
                <p>Skilled in HTML, CSS, JavaScript, and React</p>
                <p>Check out my portfolio and projects!</p>
            </div>
        </section>
    );
}

export default Home;
