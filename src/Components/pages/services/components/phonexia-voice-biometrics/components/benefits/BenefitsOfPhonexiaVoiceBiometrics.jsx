import './assets/css/BenefitsOfPhonexiaVoiceBiometrics.css'
import { BenefitsOfPhonexiaVoiceBiometricsData } from './data/BenefitsOfPhonexiaVoiceBiometricsData'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { BsFillCheckCircleFill } from 'react-icons/bs'

function BenefitsOfPhonexiaVoiceBiometrics() {


    // default component rendered in the Benefits Of Phonexia Voice Biometrics section
    return (
        <div className='BenefitsOfPhonexiaVoiceBiometrics'>

            <div className="BenefitsOfPhonexiaVoiceBiometricsIntro">
                <h3>Benefits Of Phonexia Voice Biometrics</h3>
                <div className="line1" data-aos="fade-up" data-aos-duration="1200" />
                <div className="line2" data-aos="fade-up" data-aos-duration="1200" />

            </div>

            <div className='BenefitsOfPhonexiaVoiceBiometricsInner'>


                    {
                        BenefitsOfPhonexiaVoiceBiometricsData.map((data) => (


                                <div className="BenefitsOfPhonexiaVoiceBiometricsBox" data-aos="fade-up" data-aos-duration="1200">
                                      <BsFillCheckCircleFill className="BenefitsOfPhonexiaVoiceBiometricsBoxIcon" data-aos="fade-up" data-aos-duration="1200" />
                                    <h3 >{data.title}</h3>
                                    <p>{data.description}</p>
                                </div>

                        ))}

            </div>

        </div>
    )
}

export default BenefitsOfPhonexiaVoiceBiometrics
