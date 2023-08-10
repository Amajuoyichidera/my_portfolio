import React from "react";
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    });
  }, []);


  return (
    <div className="about" data-aos="fade-up" data-aos-duration="2000">
      <h1>About Me</h1>
      <p>I'm a logical and results-driven Front End developer <br /> dedicated to building and optimizing user focused <br /> websites for customers with various business objectives, <br /> judicious and creative when crafting effective websites, <br /> apps and platforms to propel competitive advantage and revenue growth, <br /> Technically proficient and analytically problem solver with calm and focused demeanor. <br />
       i love taking on challenges and solving problems</p>
    </div>
  );
}

export default About;