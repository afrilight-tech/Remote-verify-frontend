import style from './assets/css/FraudDetectionAutomation.module.css'
import { Link } from 'react-router-dom';
import { BsArrowReturnRight } from "react-icons/bs";
import FraudDetectionAutomationImage from './assets/images/fraud-detection-automation.png'

function FraudDetectionAutomation() {




    // default component rendered in the Fraud Detection Automation section
    return (
        <div className={style.FraudDetection}>

            <div className={style.FraudDetectionInner}>


                {/* left section */}
                <div className={style.FraudDetectionBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">

                    <div className={style.FraudDetectionBoxIntro}>
                        <h3>Fraud Detection Automation</h3>
                        <div className={style.line1} data-aos="fade-right" data-aos-duration="1200" />
                        <div className={style.line2} data-aos="fade-right" data-aos-duration="1200" />
                    </div>

                    <p>The Remote Verify platform streamlines the entire process of identity and risk management, from initial onboarding to ongoing compliance and fraud prevention. </p>
                    <p>The Remote Verify platform also allows the centralization and automation of crucial decisions related to know-your-customer (KYC) regulations, compliance requirements, and fraud detection, simplifying the process and ensuring that all of your decisions are made in a consistent and efficient manner. </p>

                    <p>Simply cordinate efficient real-time approval processes, increase conversion rates, and effectively combat fraud.</p>

                </div>


                {/* right section */}
                <div className={style.FraudDetectionBox} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={FraudDetectionAutomationImage} alt="" />
                </div>


            </div>

        </div>
    )
}

export default FraudDetectionAutomation
