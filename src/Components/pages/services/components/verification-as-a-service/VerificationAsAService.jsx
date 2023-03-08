import style from './assets/css/VerificationAsAService.module.css'
import { Link } from 'react-router-dom';
import { BsArrowReturnRight } from "react-icons/bs";
import VerificationAsAServiceHero from './components/hero/VerificationAsAServiceHero';
import VerificationAsAServiceImage from './assets/images/vaas.png'
import BenefitsOfVaas from './components/benefits/BenefitsOfVaas';
import { useEffect } from 'react';
function VerificationAsAService() {


    useEffect(() => {

        document.title = "Verification As A Service"
    })



    // default component rendered in the Verification As A Service page
    return (
        <div className={style.VerificationAsAService}>

            <VerificationAsAServiceHero />

            <div className={style.VerificationAsAServiceInner}>
                {/* left section */}

                <div className={style.VerificationAsAServiceBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">



                    <p>Convert and onboard more real customers while stopping bad actors with Remote Verify’s Identity Verification solution. With all the biometric verifications (Facial, Fingerprints, voice) possible on our platform, we offer the fastest and easiest way to convert more users, prevent fraud, and comply with regulations. </p>
                    <p>Verification as a Service is our solution that help our customers to verify the identities of their employees and customers. It offers a range of verification methods, including email, phone, Voice, Fingerprints IRIS or government-issued identification, which can be used to validate the identity of individuals Example, National Identity Number (NIN) Driver’s License, or International Passport. </p>
                    <Link to={'/contact'} className={style.VerificationAsAServiceLink}><button>Schedule a Demo <BsArrowReturnRight className={style.VerificationAsAServiceIcon} data-aos="fade-up" data-aos-duration="1200" /></button></Link>

                </div>

                {/* right section */}
                <div className={style.VerificationAsAServiceBox} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={VerificationAsAServiceImage} alt="" />
                </div>

            </div>

            <BenefitsOfVaas />


        </div>

    )
}

export default VerificationAsAService
