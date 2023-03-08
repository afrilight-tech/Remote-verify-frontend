import style from './assets/css/WhyRiskIt.module.css'
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsArrowReturnRight } from "react-icons/bs";

function WhyRiskIt() {


    // the default component dispalyed on the Why Risk It component
    return (
        // WhyRiskIt
        <div className={style.WhyRiskIt}>

            <div className={style.WhyRiskItInner}>

                <div className={style.WhyRiskItImage}>

                </div>

                <div className={style.WhyRiskItText}>

                    <div className={style.WhyRiskItTextInner} data-aos="fade-up" data-aos-duration="1200">
                        <h3 data-aos="fade-up" data-aos-duration="1200">Why risk it?</h3>

                        <div className={style.line1} data-aos="fade-up" data-aos-duration="1200" />
                        <div className={style.line2} data-aos="fade-up" data-aos-duration="1200" />

                        <p data-aos="fade-up" data-aos-duration="1200">Obliterate fraud and get back to business today,
                            see how Remoteverify can lead the charge.
                        </p>

                        <Link to={'/contact'} className={style.WhyRiskItLink}><button>Schedule a Demo <BsArrowReturnRight className={style.WhyRiskItIcon} data-aos="fade-up" data-aos-duration="1200" /></button></Link>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default WhyRiskIt