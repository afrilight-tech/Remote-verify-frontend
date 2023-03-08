import style from './assets/css/WhyPartnerWithUs.module.css'
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { WhyPartnerWithUsData } from './data/WhyPartnerWithUsData';

function WhyPartnerWithUs() {




    // default component rendered in the Why Partner With Us  section
    return (

        <div className={style.WhyPartnerWithUs}>

            <div className={style.WhyPartnerWithUsIntro}>

                <h3>Why Partner With Us?</h3>

                <div className={style.line1} data-aos="fade-up" data-aos-duration="1200" />
                <div className={style.line2} data-aos="fade-up" data-aos-duration="1200" />

            </div>


            <div className={style.WhyPartnerWithUsInner}>


                {/* data mapped from the  WhyPartnerWithUsData.js */}
                {

                    WhyPartnerWithUsData.map((value) => (
                        <div className={style.WhyPartnerWithUsBox} id={style.text} data-aos="fade-up" data-aos-duration="1200">
                            <div className={style.WhyPartnerWithUsBoxIntro}>
                                <BsFillCheckCircleFill className={style.WhyPartnerWithUsBoxIcon} data-aos="fade-up" data-aos-duration="1200" />
                                <h3>{value.data} </h3>
                            </div>
                        </div>


                    ))
                }


            </div>

        </div>
    )
}

export default WhyPartnerWithUs
