import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Contact from './Components/pages/contact/Contact';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Home from './Components/pages/home/Home';
import Spinner from './Components/pages/contact/components/spinner/Spinner';
import FormSent from './Components/pages/contact/components/formsent/FormSent';
import WhyRiskIt from './Components/why-risk-it/WhyRiskIt';
import Services from './Components/pages/services/Services';
import VerificationAsAService from './Components/pages/services/components/verification-as-a-service/VerificationAsAService';
import IdentityVerificationAndFraudPrevention from './Components/pages/services/components/identity-verification-and-fraud-prevention/IdentityVerificationAndFraudPrevention';
import DeathCertificateVerification from './Components/pages/services/components/death-certificate-verification/DeathCertificateVerification';
import PhonexiaVoiceBiometrics from './Components/pages/services/components/phonexia-voice-biometrics/PhonexiaVoiceBiometrics';
import AboutUs from './Components/pages/about-us/AboutUs';
import Resources from './Components/pages/resources/Resources';
import NotFound from './Components/404/404';

function App() {

  const { pathname } = useLocation();


  // scroll to the top of a new page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);








  return (
    <div className="App">

      {/* header */}
      <Header />

      <Routes>

        {/* home */}
        <Route path='' element={<Home />} />

        {/* services */}
        <Route path='/services' element={<Services />} />

        {/* about */}
        <Route path='/about-us' element={<AboutUs />} />

        {/* resources */}
        <Route path='/resources' element={<Resources />} />

        {/* contact and shedudule a demo */}
        <Route path='/contact' element={<Contact />} />

        {/* Not found */}
        <Route path='*' element={<NotFound />}/>

        {/* each service routing */}
        <Route path='/services/verification-as-a-service' element={<VerificationAsAService />} />
        <Route path='/services/identity-verification-and-fraud-prevention' element={<IdentityVerificationAndFraudPrevention />} />
        <Route path='/services/death-certificate-verification' element={<DeathCertificateVerification />} />
        <Route path='/services/phonexia-voice-biometrics' element={<PhonexiaVoiceBiometrics />} />
        {/*  each service routing */}

      </Routes>


      {/* why risk it */}
      <WhyRiskIt />


      {/* footer */}
      <Footer />


    </div>
  )
}

export default App
