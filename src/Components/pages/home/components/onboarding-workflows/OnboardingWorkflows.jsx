import style from './assets/css/OnboardingWorkflows.module.css'
import { Link } from 'react-router-dom';
import { BsArrowReturnRight } from "react-icons/bs";
import OnboardingWorkflowsImage from './assets/images/onboarding-workflows.png'

function OnboardingWorkflows() {




    // default component rendered in the Onboarding Workflows section
    return (
        <div className={style.OnboardingWorkflows}>

            <div className={style.OnboardingWorkflowsInner}>


                {/* left section */}
                <div className={style.OnboardingWorkflowsBox} id={style.image} data-aos="fade-right" data-aos-duration="1200">
                    <img src={OnboardingWorkflowsImage} alt="" />
                </div>


                {/* right section */}
                <div className={style.OnboardingWorkflowsBox} id={style.text} data-aos="fade-left" data-aos-duration="1200">

                    <div className={style.OnboardingWorkflowsBoxIntro}>
                        <h3>Onboarding Workflows</h3>
                        <div className={style.line1} data-aos="fade-left" data-aos-duration="1200" />
                        <div className={style.line2} data-aos="fade-left" data-aos-duration="1200" />
                    </div>

                    <p>Create custom workflows for everything from onboarding, KYC, AML to transaction monitoring. Select from hundreds of input sources for phone , email, official databases, devices, behaviour, third-party data and more. </p>

                </div>


            </div>

        </div>
    )
}

export default OnboardingWorkflows
