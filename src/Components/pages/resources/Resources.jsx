import React from "react";
import style from './assets/css/Resources.module.css'
import Faqs from "./components/faqs/Faqs";
import ResourcesHero from "./components/hero/ResourcesHero";
import MissionStatement from "./components/mission-statement/MissionStatement";
import UseCases from "./components/use-cases/UseCases";
import { Helmet } from "react-helmet-async";

function Resources() {

    // the default component returned when the resources page is requested on the server
    return (

        <>
        <Helmet>
            <title>Resources</title>
            <meta name="description" content="Explore Our Mission Statements, Use Cases and More.." />
            <link rel="canonical" href="/resources" />
        </Helmet>

        <div className={style.Resources} id="Resources">

            <ResourcesHero />

            <MissionStatement />


            <UseCases/>

            <Faqs />


        </div>
        </>
    )
}

export default Resources