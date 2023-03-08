import React from "react";
import style from './assets/css/Contact.module.css'
import ContactHero from "./components/hero/ContactHero";
import ContactForm from "./components/form/ContactForm";
import { Helmet } from "react-helmet-async";



function Contact() {

    // the default component returned when the contact page is requested on the server
    return (
        <>
            <Helmet>
                <title>Get In Touch With Us</title>
                <meta name="description" content="Get In Touch With Remote Verify" />
                <link rel="canonical" href="/contact" />
            </Helmet>


            <div className={style.contact} id="contact">

                <ContactHero />


                <ContactForm />

            </div>
        </>
    )
}

export default Contact