import style from './assets/css/LeadToServices.module.css'
import { Link } from 'react-router-dom';
import { BsArrowReturnRight } from "react-icons/bs";
import LeadToServicesImage from './assets/images/lead-to-services.png'

function LeadToServices() {




    // default component rendered in the Lead To Services section
    return (
        <div className={style.LeadToServices}>

            <div className={style.LeadToServicesInner}>

                {/* left section */}
                <div className={style.LeadToServicesBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">

                    <div className={style.LeadToServicesBoxIntro}>
                        <h3>Our Services</h3>
                        <div className={style.line1} data-aos="fade-right" data-aos-duration="1200" />
                        <div className={style.line2} data-aos="fade-right" data-aos-duration="1200" />
                    </div>

                    <p>We provide services which ranges from Identity Verification to fraud prevention and Death Certificate Verification through our All-Encompassing, No-Code Remote Verify Platform. . </p>
                    <Link className={style.LeadToServicesBoxLink} to={'/services'}><button>See All Services <BsArrowReturnRight className={style.LeadToServicesIcon} /> </button></Link>
                </div>


                {/* right section */}
                <div className={style.LeadToServicesBox} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={LeadToServicesImage} alt="" />
                </div>


            </div>

        </div>
    )
}

export default LeadToServices
