import './assets/css/BenefitsOfDeathCertificateVerification.css'
import { BenefitsOfDeathCertificateVerificationData } from './data/BenefitsOfDeathCertificateVerificationData'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { BsFillCheckCircleFill } from "react-icons/bs";

function BenefitsOfDeathCertificateVerification() {


    // default component rendered in the Benefits Of Death Certificate Verification section
    return (
        <div className='BenefitsOfDeathCertificateVerification'>

            <div className="BenefitsOfDeathCertificateVerificationIntro">
                <h3>Benefits Of Death Certificate Verification</h3>
                <div className="line1" data-aos="fade-up" data-aos-duration="1200" />
                <div className="line2" data-aos="fade-up" data-aos-duration="1200" />

            </div>

            <div className='BenefitsOfDeathCertificateVerificationInner'>



                {
                    BenefitsOfDeathCertificateVerificationData.map((data) => (



                        <div className="BenefitsOfDeathCertificateVerificationBox" data-aos="fade-up" data-aos-duration="1200">
                               <BsFillCheckCircleFill className="BenefitsOfDeathCertificateVerificationBoxIcon" data-aos="fade-up" data-aos-duration="1200" />
                            <h3 >{data.title}</h3>
                            <p>{data.description}</p>
                        </div>


                    ))}



            </div>

        </div>
    )
}

export default BenefitsOfDeathCertificateVerification
