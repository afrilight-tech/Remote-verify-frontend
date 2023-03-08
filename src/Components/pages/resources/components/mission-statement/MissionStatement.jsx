import style from './assets/css/MissionStatement.module.css'

function MissionStatement() {
    return (
        <div className={style.MissionStatement} data-aos="fade-up" data-aos-duration="1200">

            <div className={style.MissionStatementBox}>
                <div className={style.MissionStatementIntro}>

                    <h3>Mission Statement</h3>

                    <div className={style.line1} data-aos="fade-up" data-aos-duration="1200" />
                    <div className={style.line2} data-aos="fade-up" data-aos-duration="1200" />

                </div>

                <p data-aos="fade-up" data-aos-duration="1200">Remote Verify is dedicated to revolutionizing the verification process through the use of innovative technology. Our mission is to provide a secure, efficient, and seamless experience for our clients, streamlining the verification process for individuals and organizations alike.</p>
            </div>
        </div>
    )
}

export default MissionStatement 