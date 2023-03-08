import style from './assets/css/UseCases.module.css'
import { UseCasesData } from './data/UseCasesData'
function UseCases() {
    return (
        <div className={style.UseCases} data-aos="fade-up" data-aos-duration="1200">

            <div className={style.UseCasesBox}>
                <div className={style.UseCasesIntro}>

                    <h3>Use Cases</h3>

                    <div className={style.line1} data-aos="fade-up" data-aos-duration="1200" />
                    <div className={style.line2} data-aos="fade-up" data-aos-duration="1200" />

                </div>

{
    UseCasesData.map((data) => (
        <p data-aos="fade-up" data-aos-duration="1200">{data.title}: {data.details}</p>
        
    ))
}
            </div>
        </div>
    )
}

export default UseCases 