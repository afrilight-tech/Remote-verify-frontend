import './assets/css/BenefitsOfIdentityVerificationAndFraudPrevention.css'
import { BenefitsOfIdentityVerificationAndFraudPreventionData } from './data/BenefitsOfIdentityVerificationAndFraudPreventionData'
import { BsFillCheckCircleFill } from "react-icons/bs";

function BenefitsOfIdentityVerificationAndFraudPrevention() {


    // default component rendered in the Benefits Of Identity Verification And Fraud Prevention section
    return (
        <div className='BenefitsOfIdentityVerificationAndFraudPrevention'>

            <div className="BenefitsOfIdentityVerificationAndFraudPreventionIntro">
                <h3>Benefits Of Our Fraud Prevention Service</h3>
                <div className="line1" data-aos="fade-up" data-aos-duration="1200" />
                <div className="line2" data-aos="fade-up" data-aos-duration="1200" />

            </div>

            <div className='BenefitsOfIdentityVerificationAndFraudPreventionInner'>


                {
                    BenefitsOfIdentityVerificationAndFraudPreventionData.map((data) => (



                        <div className="BenefitsOfIdentityVerificationAndFraudPreventionBox" data-aos="fade-up" data-aos-duration="1200">
                            <BsFillCheckCircleFill className="BenefitsOfIdentityVerificationAndFraudPreventionBoxIcon" data-aos="fade-up" data-aos-duration="1200" />
                            <h3 >{data.title}</h3>
                            <p>{data.description}</p>
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default BenefitsOfIdentityVerificationAndFraudPrevention
