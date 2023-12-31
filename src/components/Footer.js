import React from 'react';
import david from '../assets/david.png';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Footer() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  return (
    <div>
        <section className='footOne' data-aos="fade-right" data-aos-duration="2000">
           <section>
             <img className='logo' src={david} alt={david} />
           </section>

           <section className='footTwo'>
             <p>+2348129405826</p>
             <p>amajuoyichideradavid@gmail.com</p>
             <section className='footThree'>
              
             <a href='https://github.com/Amajuoyichidera' target='blank'>
             <ion-icon name="logo-github"></ion-icon>
             </a>

             <a href='https://twitter.com/DavidAmajuoyi' target='blank'>
             <ion-icon name="logo-twitter"></ion-icon>
             </a>
             
             <a href='https://www.linkedin.com/in/david-amajuoyi-225b41234/' target='blank'>
             <ion-icon name="logo-linkedin"></ion-icon>
             </a>             
             </section>
           </section>
            
        </section>
        

        <section className='footFour' data-aos="fade-right" data-aos-duration="2000">
            <section className='footFive'>
                <p>Home</p>
                <p>About</p>
                <p>Technologies</p>
                <p>Projects</p>
                <p>Contact</p>
            </section>

            <section>
                <p>Designed and built by David Amajuoyi</p>
            </section>
        </section>
    </div>
  )
}

export default Footer