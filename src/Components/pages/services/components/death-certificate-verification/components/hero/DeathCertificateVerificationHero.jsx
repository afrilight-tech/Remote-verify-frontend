import style from './assets/css/DeathCertificateVerificationHero.module.css'

function DeathCertificateVerificationHero() {


    // default component rendered in the Services hero section
    return (
        <div className={style.hero}>

            <div className={style.hero_inner}>


                        <div className={style.Background}>

                        </div>

                        <div className={style.heroText}>
                            <div className={style.heroTextInner} data-aos="fade-right" data-aos-duration="1200">
                                <h3>Death Certificate Verification</h3>
                           </div>
                        </div>


            </div>

        </div>
    )
}

export default DeathCertificateVerificationHero
