import style from './assets/css/Reports.module.css'
import { Link } from 'react-router-dom';
import { BsArrowReturnRight } from "react-icons/bs";
import ReportsImage from './assets/images/reports.png'

function Reports() {




    // default component rendered in the Reports section
    return (
        <div className={style.Reports}>

            <div className={style.ReportsInner}>


                {/* left section */}
                <div className={style.ReportsBox} id={style.image} data-aos="fade-right" data-aos-duration="1200">
                    <img src={ReportsImage} alt="" />
                </div>


                {/* right section */}
                <div className={style.ReportsBox} id={style.text} data-aos="fade-left" data-aos-duration="1200">

                    <div className={style.ReportsBoxIntro}>
                        <h3>Reports</h3>
                        <div className={style.line1} data-aos="fade-left" data-aos-duration="1200" />
                        <div className={style.line2} data-aos="fade-left" data-aos-duration="1200" />
                    </div>

                    <p>Review easy to understand reports that supply a clear audit trail and actionable data points to improve your workflows and rules for enhanced fraud detection, accelerated conversion and better real-time decisions. </p>

                </div>


            </div>

        </div>
    )
}

export default Reports
