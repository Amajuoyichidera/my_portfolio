import React from "react";
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    });
  }, []);


  return (
    <div className="contact" data-aos="fade-up" data-aos-duration="2000">
      <h1>Get in Touch</h1>
      <p>Are you looking for a fast-performing and user-friendly website to represent your <br /> product or business? or looking for any kind of consultation? or want to ask questions? <br /> or have some advice for me or just want to say "Hi 👋" in any case feel free to Let me know. <br /> I will do my best to respond back. 😊 The quickest way to reach out to me is via <br /> an email.</p>
       <a href="mailto:amajuoyichideradavid@gmail.com">
         amajuoyichideradavid@gmail.com
       </a> 
    </div>
  );
}

export default Contact;