import style from './assets/css/PhonexiaVoiceBiometrics.module.css'
import { Link } from 'react-router-dom';
import { BsArrowReturnRight } from "react-icons/bs";
import PhonexiaVoiceBiometricsHero from './components/hero/PhonexiaVoiceBiometricsHero';
import PhonexiaVoiceBiometricsImage from './assets/images/voice-biometrics.png'
import BenefitsOfPhonexiaVoiceBiometrics from './components/benefits/BenefitsOfPhonexiaVoiceBiometrics';
import PhonexiaVoiceBiometricsVideo from './assets/videos/voice-video.mov'
import { useEffect } from 'react';
function PhonexiaVoiceBiometrics() {

    useEffect(() => {

        document.title = "Phonexia Voice Biometrics "
    })



    // default component rendered in the  Phonexia Voice Biometrics page
    return (
        <div className={style.PhonexiaVoiceBiometrics}>

            <PhonexiaVoiceBiometricsHero />

            <div className={style.PhonexiaVoiceBiometricsInner}>

                <div className={style.PhonexiaVoiceBiometricsBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <div className={style.PhonexiaVoiceBiometricsBoxIntro}>
                        <h3>Identify Speakers by Their Voice with Extremely High Accuracy</h3>
                        <div className={style.line1} data-aos="fade-left" data-aos-duration="1200" />
                        <div className={style.line2} data-aos="fade-left" data-aos-duration="1200" />
                    </div>

                    <p>Phonexia Voice Biometrics creates for each person a voiceprint, which is a mathematical representation of the speaker’s vocal tract. This ensures that the technology identifies the speaker regardless of the language they speak, the contents of the speech, and health conditions of the speaker. </p>
                    <Link to={'/contact'} className={style.PhonexiaVoiceBiometricsLink}><button>Schedule a Demo <BsArrowReturnRight className={style.PhonexiaVoiceBiometricsIcon} data-aos="fade-up" data-aos-duration="1200" /></button></Link>

                </div>



                <div className={style.PhonexiaVoiceBiometricsBox} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={PhonexiaVoiceBiometricsImage} alt="" />
                </div>

            </div>


            <div className={style.PhonexiaVoiceBiometricsInner} id={style.integration}>

                <div className={style.PhonexiaVoiceBiometricsBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <div className={style.PhonexiaVoiceBiometricsBoxIntro}>
                        <h3>Integration Possibilities</h3>
                        <div className={style.line1} data-aos="fade-left" data-aos-duration="1200" />
                        <div className={style.line2} data-aos="fade-left" data-aos-duration="1200" />
                        <p>Voice Biometrics is part of Phonexia Speech Platform, which provides a complete portfolio of speech technologies, designed for easy integration. The platform allows the designing, integration, and deployment of a wide range of speech processing systems quickly and without extensive knowledge of speech technologies.</p>
                        <p>Phonexia Voice Biometrics supports integrations via a REST API and command-line interfaces, running on Windows 64-bit or Linux 64-bit operating systems.</p>
                    </div>
                </div>


            </div>



            <div className={style.PhonexiaVoiceBiometricsInner}>

                <div className={style.PhonexiaVoiceBiometricsBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <div className={style.PhonexiaVoiceBiometricsBoxIntro}>
                        <h3>Get Your Free Online Demo</h3>
                        <div className={style.line1} data-aos="fade-left" data-aos-duration="1200" />
                        <div className={style.line2} data-aos="fade-left" data-aos-duration="1200" />
                    </div>

                    <p>Create a voiceprint of your voice and test the voice verification for yourself with the Phonexia Voice Verify demo. </p>
                    <p>1. Register yourself to access the demo.</p>
                    <p>2. Follow the instructions sent in an email.</p>
                    <p>3. Verify your voice in 3 seconds.</p>
                    <Link to={'/contact'} className={style.PhonexiaVoiceBiometricsLink}><button>Schedule a Demo <BsArrowReturnRight className={style.PhonexiaVoiceBiometricsIcon} data-aos="fade-up" data-aos-duration="1200" /></button></Link>

                </div>



                <div className={style.PhonexiaVoiceBiometricsBox} id={style.video} data-aos="fade-left" data-aos-duration="1200">
                   <video src={PhonexiaVoiceBiometricsVideo} controls></video>
                </div>

            </div>

            <BenefitsOfPhonexiaVoiceBiometrics />


        </div>

    )
}

export default PhonexiaVoiceBiometrics
