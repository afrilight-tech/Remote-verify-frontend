import './assets/css/BenefitsOfVaas.css'
import { BenefitsOfVaasData } from './data/BenefitsOfVaasData'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { BsFillCheckCircleFill } from 'react-icons/bs'

function BenefitsOfVaas() {


    // default component rendered in the Benefits Of Vaas section
    return (
        <div className='BenefitsOfVaas'>

            <div className="BenefitsOfVaasIntro">
                <h3>Benefits Of Vaas</h3>
                <div className="line1" data-aos="fade-up" data-aos-duration="1200" />
                <div className="line2" data-aos="fade-up" data-aos-duration="1200" />

            </div>

            <div className='BenefitsOfVaasInner'>

                {
                    BenefitsOfVaasData.map((data) => (


                        <div className="BenefitsOfVaasBox" data-aos="fade-up" data-aos-duration="1200">
                            <BsFillCheckCircleFill className="BenefitsOfVaasBoxIcon" data-aos="fade-up" data-aos-duration="1200" />
                            <h3 >{data.title}</h3>
                            <p>{data.description}</p>
                        </div>


                    ))}


            </div>

        </div>
    )
}

export default BenefitsOfVaas
