import style from './assets/css/ContactForm.module.css'
import React from "react";
import { FaStar } from "react-icons/fa";
import axios from 'axios'
import FormSent from "../formsent/FormSent";
import Spinner from "..//spinner/Spinner";
import { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import ReCAPTCHA from "react-google-recaptcha";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function ContactForm() {

    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
    const [formSent, setFormSent] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const options = useMemo(() => countryList().getData(), [])
    const [value, setValue] = useState('')
    const [isVerified, setIsVerified] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        job: '',
        country: '',
        reason: '',
        service: '',
        company: '',

    });


    // Initailizing the library used for the animations on scroll
    useEffect(() => {
        AOS.init();
    }, []);


    // this function handles the onchage event of the all form inputs except from country and captcha
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    // this function handles the onchage event of the list of countries
    const changeHandler = value => {
        setValue(value);
    }


    // this function handles the captcha challenge verification
    const onCaptchaChange = (value) => {
        setIsVerified(value);
    };



    // this function handles the submission of the form
    const handleSubmit = (e) => {
        e.preventDefault();

        // once the form is submitting the window scrolls to the top to make the loading and succes state visible
        window.scrollTo({ top: 40, behavior: "smooth" });


        //if the captcha is not verified this error would be rendered
        if (!isVerified) {
            setErrorMessage("Please, verify that you are human!");
            return;
        }

        // once all required fields are filled  the sending state is set to true and a new component is rendered
        setIsSending(true);



        // the form data is posted to the backend responsible for sending the form to the admin's mail and the user's mail
        const contactFormData = new FormData
        contactFormData.append('name', formData.name)
        contactFormData.append('email', formData.email)
        contactFormData.append('phone', formData.phone)
        contactFormData.append('message', formData.message)
        contactFormData.append('service', formData.service)
        contactFormData.append('company', formData.company)
        contactFormData.append('reason', formData.reason)
        contactFormData.append('country', value.label)
        contactFormData.append('job', formData.job)

        try {
            axios.post('https://remote-verify-backend.onrender.com/sendmail', contactFormData).then((res) => {
                console.log(res.message);
                setIsSending(false);
                setFormSent(true);
            })
        } catch (error) {
            console.log(error)
            setIsSending(false);
        }
    }



    // while the form is sending, a new component is displayed
    if (isSending) {
        return <Spinner />
    }


    // once the form is sent, a another component is displayed
    if (formSent) {
        return <FormSent name={formData.name} />
    }


    // the default component returned when the page is requested on the server
    return (


        <div className={style.contactForm} id="contactForm">

            <div className={style.contactFormInner}>


                <div className={style.contactOptions} data-aos="fade-right" data-aos-duration="1200">

                    <div className={style.contactOptionsIntro}>
                        <h3>Get In Touch</h3>
                        <div className={style.line1} />
                        <div className={style.line2} />
                        <p>Kindly fill the form to request a demo, report a problem or ak a question, you can also visit us at our office, or contact us directly using the details below</p>
                    </div>

                    <div className={style.contactDetails}>
                        <p> <FaLocationArrow className={style.contactDetailsIcon} /> 37, Adeniyi Jones Avenue, Ikeja Lagos.</p>
                        <a href="mailto: sales@remoteverify.com"> <p><FaEnvelope className={style.contactDetailsIcon} /> sales@remoteverify.com.</p></a>
                        <p><FaPhone className={style.contactDetailsIcon} /> <a href="tel:+234-8084128802">+234-8084128802 </a></p>
                    </div>

                </div>




                {/* Form warapper */}
                <div className={style.form_wrapper}>
                    <form method="POST" onSubmit={handleSubmit}>


                        {/* csrf_token */}
                        <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />


                        <div className={style.formGrid}>
                            {/* Full name */}
                            <div className={style.name} data-aos="fade-up" data-aos-duration="1200">
                                <div className={style.form_item}>
                                    <label htmlFor="name"><label>Full Name</label> <span>*</span></label>
                                    <input name='name' value={formData.name} type="text" placeholder="John Doe" onChange={handleChange} required id='name' />

                                    <p className={style.error}>This field is required</p>
                                </div>
                            </div>


                            {/* Email */}
                            <div className={style.email} data-aos="fade-up" data-aos-duration="1200">
                                <div className={style.form_item}>
                                    <label htmlFor="email"><label>Email</label> <span>*</span></label>
                                    <input name='email' type="email" placeholder="yourname@email.com" required onChange={handleChange} id='email' />

                                    <p className={style.error}>This field is required</p>
                                </div>
                            </div>
                        </div>


                        <div className={style.formGrid}>
                            {/* Phone */}
                            <div className={style.phone} data-aos="fade-up" data-aos-duration="1200">
                                <div className={style.form_item}>
                                    <label htmlFor="phone"><label>Phone</label> <span></span></label>
                                    <input name="phone" type="tel" placeholder="+234..." id='phone' onChange={handleChange} />
                                </div>
                            </div>



                            {/* Comapany */}
                            <div className={style.company} data-aos="fade-up" data-aos-duration="1200">
                                <div className={style.form_item}>
                                    <label htmlFor="company"><label>Company</label> <span></span></label>
                                    <input name="company" type="text" placeholder="Your Company" id='company' onChange={handleChange} />
                                </div>
                            </div>


                        </div>

                        <div className={style.formGrid}>
                            {/* Job */}
                            <div className={style.job} data-aos="fade-up" data-aos-duration="1200">
                                <div className={style.form_item}>
                                    <label htmlFor="company"><label>Job Title</label> <span></span></label>
                                    <input name="job" type="text" placeholder="Job Title" id='job' onChange={handleChange} />
                                </div>
                            </div>



                            {/* Country */}
                            <div className={style.country} data-aos="fade-up" data-aos-duration="1200">
                                <div className={style.form_item}>
                                    <label htmlFor="country"><label>Country</label> <span></span></label>
                                    <Select name="country" className={style.countrySelect} options={options} onChange={changeHandler} value={value} />
                                </div>
                            </div>

                        </div>


                        {/* Service */}
                        <div className={style.service} data-aos="fade-up" data-aos-duration="1200">
                            <div className={style.form_item}>
                                <label htmlFor="service"><label>Service</label> <span>*</span></label>
                                <select onChange={handleChange} required name="service" id="service">
                                    <option value="">Select your desired service</option>
                                    <option value="Identity Varication Platform">Identity Varication Platform</option>
                                    <option value="VaaS">VaaS</option>
                                    <option value="Phonexia Voice Biometrics">Phonexia Voice Biometrics</option>
                                    <option value="Death Certifcate verification">Death Certifcate verification</option>
                                </select>
                                <p className={style.error}>This field is required</p>
                            </div>
                        </div>

                        <div className={style.formGrid}>
                            {/* Reason */}
                            <div className={style.reason} data-aos="fade-up" data-aos-duration="1200">
                                <div className={style.form_item}>
                                    <label htmlFor="reason"><label>Reason For Contacting</label> <span>*</span></label>
                                    <textarea id="reason" name="reason" required onChange={handleChange} placeholder="E.g: Request a demo, Ask a question, Report a problem" />
                                    <p className={style.error}>This field is required</p>
                                </div>
                            </div>


                            {/* Message */}
                            <div className={style.message} data-aos="fade-up" data-aos-duration="1200">
                                <div className={style.form_item}>
                                    <label htmlFor="message"><label>Message</label> <span>*</span></label>
                                    <textarea id="message" name="message" required onChange={handleChange} placeholder="A detailed description of the request or issue" />
                                    <p className={style.error}>This field is required</p>
                                </div>
                            </div>
                        </div>

                        {/* Recaptcha */}
                        <div className={style.form_item} data-aos="fade-up" data-aos-duration="1200">
                            <ReCAPTCHA className={style.reCaptcha} sitekey="6LdNuCckAAAAAIx4ACAZbFiVmd2av7pbdR6zI1i6" onChange={onCaptchaChange} />
                            {errorMessage && <p className={style.captchaError}>{errorMessage}</p>}
                        </div>

                        {/* Submit */}
                        <div className={style.form_item}>
                            <div className={style.submit} data-aos="fade-up" data-aos-duration="1200">
                                <button type="submit">
                                    Reach Out
                                </button>
                            </div>
                        </div>

                    </form>


                </div>
                {/* Form warapper */}

            </div>
        </div>
    )
}

export default ContactForm