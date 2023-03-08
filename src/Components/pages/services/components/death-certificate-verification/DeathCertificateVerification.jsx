import style from './assets/css/DeathCertificateVerification.module.css'
import { Link } from 'react-router-dom';
import { BsArrowReturnRight } from "react-icons/bs";
import DeathCertificateVerificationHero from './components/hero/DeathCertificateVerificationHero';
import DeathCertificateVerificationImage from './assets/images/death-certificate.jpg'
import BenefitsOfDeathCertificateVerification from './components/benefits/BenefitsOfDeathCertificateVerification';
import { useEffect } from 'react';
function DeathCertificateVerification() {

    useEffect(() => {

        document.title = "Death Certificate Verification"
    })


    // default component rendered in the  Death Certificate Verification page
    return (
        <div className={style.DeathCertificateVerification}>

            <DeathCertificateVerificationHero />

            <div className={style.DeathCertificateVerificationInner}>

                <div className={style.DeathCertificateVerificationBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">

                    <p>We specialize in verifying death certificates issued by the National Population Commission (NPC), Private and Public Institutions, including conducting background checks on clients who are difficult to reach. Our service is highly reputable and trusted, and we take pride in our ability to provide round-the-clock customer support to all of our clients. </p>
                    <p>Our verification process is thorough and detailed, and we ensure that all the information provided on the death certificate is accurate and authentic. We verify the number on the certificate, GPS and photo of the issuing institution, and ensure that they match the information provided by the issuing agency. Our team of experts conduct extensive research to ensure that the death certificate is legitimate, and we take all necessary measures to prevent fraud and errors. </p>
                    <p>We understand the importance of death certificate verification in various industries such as insurance, banking, legal and government agencies, that's why we strive to deliver our service in a timely and efficient manner. We understand the sensitive nature of this information and assure you that we keep all data confidential and secure.</p>
                    <p>Looking for a dependable death certificate verification service? Contact us today! Our team of experts is ready to assist you with all your needs, providing accurate and efficient service. Trust us to handle your death certificate verification and have peace of mind knowing the information is authentic. </p>
                    <Link to={'/contact'} className={style.DeathCertificateVerificationLink}><button>Schedule a Demo <BsArrowReturnRight className={style.DeathCertificateVerificationIcon} data-aos="fade-up" data-aos-duration="1200" /></button></Link>

                </div>



            </div>

            <BenefitsOfDeathCertificateVerification />


        </div>

    )
}

export default DeathCertificateVerification
