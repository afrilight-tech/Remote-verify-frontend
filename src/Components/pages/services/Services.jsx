import React from "react";
import style from './assets/css/Services.module.css'
import AllServices from "./components/all-services/AllServices";
import ServicesHero from "./components/hero/ServicesHero";
import { Helmet } from "react-helmet-async";



function Services() {

    // the default component returned when the Services page is requested on the server
    return (


        <>
        <Helmet>
            <title>Our Services</title>
            <meta name="description" content="Explore All Our Highly Effective Solutions.." />
            <link rel="canonical" href="/services" />
        </Helmet>

        <div className={style.services} id="services">

            <ServicesHero />

            <AllServices />

        </div>
        </>
    )
}

export default Services