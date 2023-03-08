import style from './assets/css/CustomRules.module.css'
import { Link } from 'react-router-dom';
import { BsArrowReturnRight } from "react-icons/bs";
import CustomRulesImage from './assets/images/custom-rules.png'

function CustomRules() {




    // default component rendered in the Custom Rules section
    return (
        <div className={style.CustomRules}>

            <div className={style.CustomRulesInner}>


                {/* left section */}
                <div className={style.CustomRulesBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">

                    <div className={style.CustomRulesBoxIntro}>
                        <h3>Custom rules</h3>
                        <div className={style.line1} data-aos="fade-right" data-aos-duration="1200" />
                        <div className={style.line2} data-aos="fade-right" data-aos-duration="1200" />
                    </div>

                    <p>Set up custom rules to automate your approve or decline decisions. Assess risk at every point in the user journey. </p>

                </div>


                {/* right section */}
                <div className={style.CustomRulesBox} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={CustomRulesImage} alt="" />
                </div>


            </div>

        </div>
    )
}

export default CustomRules
