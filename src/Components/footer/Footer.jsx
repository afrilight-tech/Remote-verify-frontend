import style from './assets/css/Footer.module.css'
import {FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import logo from './assets/images/removeverify.png'
import { Link } from 'react-router-dom';

function Footer() {

    // this sets the current year
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


    // the default component dispalyed on the footer component
    return (
        // footer
        <div className={style.footer}>

            <div className={style.footer_inner}>

                <div className={style.footer_box} data-aos="fade-up" data-aos-duration="1200">
                    <img src={logo} alt="" />
              </div>

                <div className={style.footer_box} data-aos="fade-up" data-aos-duration="1200" >
                    <h3>Useful Links</h3>
                    <ul>
                        <Link to={'/'}><li data-aos="fade-up" data-aos-duration="1200">Home</li></Link>
                        <Link to={'/services'}><li data-aos="fade-up" data-aos-duration="1200">Our Services</li></Link>
                        <Link to={'/about'}><li data-aos="fade-up" data-aos-duration="1200">About Us</li></Link>
                        <Link to={'/resources'}><li data-aos="fade-up" data-aos-duration="1200">Resources</li></Link>
                        <Link to={'/contact'}><li data-aos="fade-up" data-aos-duration="1200">Contact Us</li></Link>
                        <Link to={'/contact'}><li data-aos="fade-up" data-aos-duration="1200">Shedule A Demo</li></Link>
                    </ul>
                </div>

                <div className={style.footer_box} data-aos="fade-up" data-aos-duration="1200" >
                    <h3>Our Services</h3>
                    <ul>
                        <Link to={'/services/death-certificate-verification'}><li data-aos="fade-up" data-aos-duration="1200">Death Certificate Verification</li></Link>
                        <Link to={'/services/phonexia-voice-biometrics'}><li data-aos="fade-up" data-aos-duration="1200">Phonexia Voice Biometrics</li></Link>
                        <Link to={'/services/verification-as-a-service'}><li data-aos="fade-up" data-aos-duration="1200">Verification as a Service (VaaS)</li></Link>
                        <Link to={'/services/identity-verification-and-fraud-prevention'}><li data-aos="fade-up" data-aos-duration="1200">Identity Verification and fraud prevention</li></Link>
                    </ul>
                </div>

                <div className={style.footer_box} data-aos="fade-up" data-aos-duration="1200" >
                    <h3>Get In Touch</h3>
                    <p data-aos="fade-up" data-aos-duration="1200"> <FaLocationArrow className={style.footerIcon} /> 37, Adeniyi Jones Avenue, Ikeja Lagos</p>
                    <a href="mailto: sales@remoteverify.com"> <p data-aos="fade-up" data-aos-duration="1200"><FaEnvelope className={style.footerIcon} /> sales@remoteverify.com.</p></a>
                    <p data-aos="fade-up" data-aos-duration="1200"><FaPhone className={style.footerIcon} /> <a href="tel:+234-8084128802">+234-8084128802 </a></p>
                </div>

            </div>

            <div className={style.copywright}>
                <hr />
                <p >Copyright &#169;{currentYear} Remote Verify. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer 