import style from './assets/css/Customize.module.css'
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { CustomizeData } from './data/CustomizeData';

function Customize() {




    // default component rendered in the Customize section
    return (
        <div className={style.Customize}>

            <div className={style.CustomizeIntro}>

                <h3>Customize the way you see your customers</h3>

                <div className={style.line1} data-aos="fade-up" data-aos-duration="1200" />
                <div className={style.line2} data-aos="fade-up" data-aos-duration="1200" />

                <p data-aos="fade-up" data-aos-duration="1200">Choose from 100's of pre-integrated attributes to build powerful workflows for identity verification and fraud detection.</p>

            </div>


            <div className={style.CustomizeInner}>

                {/* data mapped from the CustomizeData.js */}
                {
                    CustomizeData.map((data) => (
                        <div className={style.CustomizeBox} id={style.text} data-aos="fade-up" data-aos-duration="1200">

                            <div className={style.CustomizeBoxIntro}>
                                <BsFillCheckCircleFill className={style.CustomizeBoxIcon} data-aos="fade-up" data-aos-duration="1200" />
                                <h3> {data.title} </h3>
                            </div>

                            <p>{data.detail} </p>

                        </div>
                    ))
                }



            </div>

        </div>
    )
}

export default Customize
