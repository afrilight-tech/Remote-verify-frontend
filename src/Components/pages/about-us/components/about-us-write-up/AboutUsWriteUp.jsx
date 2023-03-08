import style from './assets/css/AboutUsWriteUp.module.css'

function AboutUsWriteUp() {
    return (
        <div className={style.AboutUsWriteUp} data-aos="fade-up" data-aos-duration="1200">

            <div className={style.AboutUsWriteUpBox}>
                <div className={style.AboutUsWriteUpIntro}>

                    <h3>What Do We Do?</h3>

                    <div className={style.line1} data-aos="fade-up" data-aos-duration="1200" />
                    <div className={style.line2} data-aos="fade-up" data-aos-duration="1200" />

                </div>

                <p data-aos="fade-up" data-aos-duration="1200">At Remote Verify, we strive to simplify the complex process of identity and risk management. Our no-code platform is a one-stop-shop for all your identity verification and fraud prevention needs, making it easy to centralize and automate crucial decisions related to know-your-customer (KYC) regulations, compliance requirements, and fraud detection. With Remote Verify, you can streamline your approval processes, increase conversion rates, and effectively combat fraud, all while customizing the way you see your customers.</p>
                <p data-aos="fade-up" data-aos-duration="1200">Our platform is designed to be flexible and user-friendly, offering 100's of pre-integrated attributes for building workflows for identity verification and fraud detection. Our pre-defined templates for various industries, including banking, insurance, fintech, crypto, gaming, and e-commerce, enable automated real-time risk decisions from day one.</p>
                <p data-aos="fade-up" data-aos-duration="1200">With Remote Verify, you can forget about vendor sprawl and enjoy the peace of mind that comes with having all your identity management, risk prevention, and compliance needs taken care of with a single API connection to thousands of data signals.</p>
                <p data-aos="fade-up" data-aos-duration="1200">Our onboarding workflows are designed to be custom-made, allowing you to create custom processes for everything from onboarding, KYC, AML, to transaction monitoring. With hundreds of input sources to choose from, including phone, email, official databases, devices, behavior, third-party data and more, you have the power to see your customers in a new light.</p>
                <p data-aos="fade-up" data-aos-duration="1200">At Remote Verify, we believe in the importance of custom rules and automated decision-making. Our platform allows you to set up custom rules to automate approve or decline decisions, assessing risk at every point in the user journey. With our easy-to-understand reports, you can review a clear audit trail and actionable data points to continuously improve your workflows and rules for enhanced fraud detection, accelerated conversion, and better real-time decisions.</p>
            </div>
        </div>
    )
}

export default AboutUsWriteUp 