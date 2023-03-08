import style from './assets/css/IdentityVerificationAndFraudPreventionHero.module.css'

function IdentityVerificationAndFraudPreventionHero() {


    // default component rendered in the Services hero section
    return (
        <div className={style.hero}>

            <div className={style.hero_inner}>


                        <div className={style.Background}>

                        </div>

                        <div className={style.heroText}>
                            <div className={style.heroTextInner} data-aos="fade-right" data-aos-duration="1200">
                                <h3>Identity Verification and fraud prevention </h3>
                           </div>
                        </div>


            </div>

        </div>
    )
}

export default IdentityVerificationAndFraudPreventionHero
