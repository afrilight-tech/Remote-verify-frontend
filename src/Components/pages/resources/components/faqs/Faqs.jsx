import style from './assets/css/Faqs.module.css'
import { FaqsData } from './data/FaqsData'

function Faqs() {
    return (
        <div className={style.faqs} id="faqs">

            <div className={style.faqsIntro}>

                <h3>FAQs</h3>

                <div className={style.line1} data-aos="fade-up" data-aos-duration="1200" />
                <div className={style.line2} data-aos="fade-up" data-aos-duration="1200" />

            </div>

            <div className={style.faqsInner}>
                {
                    FaqsData.map((data) => (
                        <div className={style.faqsBox} data-aos="fade-up" data-aos-duration="1200">
                            <details >
                                <summary>{data.question}</summary>
                                <p data-aos="fade-up" data-aos-duration="1200">{data.answer}</p>
                            </details>
                        </div>
                    ))
                }

            </div>


        </div>


    )
}

export default Faqs 