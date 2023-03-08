import SimpleSlider from "./components/hero/Hero"
import Hero from "./components/hero/Hero"
import style from './assets/css/Home.module.css'
import { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import FraudDetectionAutomation from "./components/Fraud-detection-automation/FraudDetectionAutomation";
import OnboardingWorkflows from "./components/onboarding-workflows/OnboardingWorkflows";
import CustomRules from "./components/custom-rules/CustomRules";
import Reports from "./components/reports/Reports";
import Customize from "./components/customize/Customize";
import WhyPartnerWithUs from "./components/why-partner-with-us/WhyPartnerWithUs";
import LeadToServices from "./components/lead-to-services/LeadToServices";
import { Helmet } from "react-helmet-async";

function Home() {
    // Initailizing the library used for the animations on scroll
    useEffect(() => {
        AOS.init();
    }, []);
    

    // the default component dispalyed on the home page
    return (

        <>
        <Helmet>
            <title>The Number One No Code Identity Platform</title>
            <meta name="description" content="The Number One No Code Identity Platform" />
            <link rel="canonical" href="/" />
        </Helmet>

        <div className={style.home}>

            {/* hero */}
            <Hero />


            {/* fraud detecion automation */}
            <FraudDetectionAutomation />


            {/* onboarding work flows */}
            <OnboardingWorkflows />


            {/* customize */}
            <Customize />


            {/* custom rules */}
            <CustomRules />


            {/* reports */}
            <Reports />


            {/* why partner with us */}
            <WhyPartnerWithUs />


            {/* lead to services */}
            <LeadToServices />

        </div>
</>
    )
}

export default Home   