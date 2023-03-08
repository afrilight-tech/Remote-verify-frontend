import style from './assets/css/IdentityVerificationAndFraudPrevention.module.css'
import { Link } from 'react-router-dom';
import { BsArrowReturnRight } from "react-icons/bs";
import IdentityVerificationAndFraudPreventionHero from './components/hero/IdentityVerificationAndFraudPreventionHero';
import IdentityVerificationAndFraudPreventionImage from './assets/images/identity-verification-and-fraud-prevention.png'
import BenefitsOfIdentityVerificationAndFraudPrevention from './components/benefits/BenefitsOfIdentityVerificationAndFraudPrevention';
import { useEffect } from 'react';

function IdentityVerificationAndFraudPrevention() {

    useEffect(() => {

        document.title = "Identity Verification And Fraud Prevention "
    })


    // default component rendered in the Identity Verification And Fraud Prevention page
    return (
        <div className={style.IdentityVerificationAndFraudPrevention}>

            <IdentityVerificationAndFraudPreventionHero />

            <div className={style.IdentityVerificationAndFraudPreventionInner}>
                {/* left section */}

                <div className={style.IdentityVerificationAndFraudPreventionBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">



                    <p>Spot bad actors early, before they become customers, and limit losses to your reputation and bottom line.</p>
                    <p>When transactions happen online instead of in person, it’s hard to know whether you’re dealing with a real customer or an imposter. And with large-scale breaches of personally identifiable information (PII) happening daily, it’s easier than ever for criminals to pose as someone else. Identity and business verification stop fraudsters from opening accounts, purchasing goods, or using your systems to carry out illegal schemes. </p>
                    <p>Protect your organization’s good name and the assets you’re entrusted with</p>
                    <Link to={'/contact'} className={style.IdentityVerificationAndFraudPreventionLink}><button>Schedule a Demo <BsArrowReturnRight className={style.IdentityVerificationAndFraudPreventionIcon} data-aos="fade-up" data-aos-duration="1200" /></button></Link>

                </div>

                {/* right section */}
                <div className={style.IdentityVerificationAndFraudPreventionBox} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={IdentityVerificationAndFraudPreventionImage} alt="" />
                </div>

            </div>

            <BenefitsOfIdentityVerificationAndFraudPrevention />


        </div>

    )
}

export default IdentityVerificationAndFraudPrevention
