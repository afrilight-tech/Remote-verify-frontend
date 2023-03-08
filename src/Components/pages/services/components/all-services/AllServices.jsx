import style from './assets/css/AllServices.module.css'
import { Link } from 'react-router-dom';
import { BsArrowReturnRight } from "react-icons/bs";
import { AllServicesData } from './data/AllServicesData';

function AllServices() {




    // default component rendered in the AllServices section
    return (
        <div className={style.AllServices}>





            {
                AllServicesData.map((data) => (
                    <div className={style.AllServicesInner}>
                        {/* left section */}

                        <div className={style.AllServicesBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">

                            <div className={style.AllServicesBoxIntro}>
                                <h3>{data.title}</h3>
                                <div className={style.line1} data-aos="fade-left" data-aos-duration="1200" />
                                <div className={style.line2} data-aos="fade-left" data-aos-duration="1200" />
                            </div>

                            <p>{data.details} </p>
                            <Link className={style.AllServicesBoxLink} to={data.slug}><button>Learn More  <BsArrowReturnRight className={style.AllServicesIcon} /></button></Link>
                        </div>

                        {/* right section */}
                        <div className={style.AllServicesBox} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                            <img src={data.image} alt="" />
                        </div>

                    </div>
                ))
            }



        </div>

    )
}

export default AllServices
