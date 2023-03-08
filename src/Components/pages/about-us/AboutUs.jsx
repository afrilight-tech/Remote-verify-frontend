import React from "react";
import WhyPartnerWithUs from "../home/components/why-partner-with-us/WhyPartnerWithUs";
import style from './assets/css/AboutUs.module.css'
import AboutUsWriteUp from "./components/about-us-write-up/AboutUsWriteUp";
import AboutUsHero from "./components/hero/AboutUsHero";
import { Helmet } from 'react-helmet-async'



function AboutUs() {

    // the default component returned when the page is requested on the server
    return (

        <>
            
            <Helmet>
                <title>About Us</title>
                <meta name="description" content="About Remote Verify" />
                <link rel="canonical" href="/about-us" />
            </Helmet>

        <div className={style.AboutUs} id="aboutUs">

            <AboutUsHero />


            <AboutUsWriteUp />

            <WhyPartnerWithUs />
        </div>
        </>
    )
}

export default AboutUs