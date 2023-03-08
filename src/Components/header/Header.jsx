import React from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from './assets/css/Header.module.css'
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaSearch, FaRegTimesCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {


    // Initailizing the library used for the animations on scroll
    useEffect(() => {
        AOS.init();
    }, []);



    // this sets a default state for the navigation bar on small screen
    const [isNavExpanded, setIsNavExpanded] = useState(false)


    // this function closes the navigation bar on small screen once the menu links are clicked
    const close = () => {
        setIsNavExpanded(false);
    };


    // this function changes the background color of the header once the scroll is greater than 100
    useEffect(() => {
        let header = document.getElementById("header");
        let logotext = document.getElementById("logotext")
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                header.style.background = " #213547"
            } else {
                header.style.background = "transparent"
            }
        })
    })



    const handleScroll = (event) => {
        event.preventDefault()
        let aboutElement = document.getElementById("about")
        aboutElement.scrollIntoView({ behavior: "smooth" })
    }

    // default component rendered on the header for every page
    return (

        // header
        <div className={style.header} id="header" data-aos="fade-right" data-aos-duration="1200">
            <div className={style.header_inner} >
                <div className={style.logo}>
                    <Link to="/" onClick={close}>
                        <h3 id="logotext">REMOTEVERIFY.</h3> </Link>
                </div>


                {/* menu: on large screen classname is menu, and once the nav is expanded on small screen the classname changes to sm_menu */}
                <div className={isNavExpanded ? style.sm_menu : style.menu}>
                    <ul className={style.menu_links}>

                        <li className={style.menu_item}><Link activeClass="active" onClick={close}
                            to="/services" className={style.router_link}>Our Services </Link></li>




                        <li className={style.menu_item}><Link activeClass="active" onClick={close}
                            to="/about-us" className={style.router_link}>About Us</Link></li>

                        <li className={style.menu_item}><Link activeClass="active" onClick={close}
                            to="/resources" className={style.router_link}>Resources</Link></li>

                        <li className={style.menu_item}><a  onClick={close}
                            href="https://blog.remotverify.com/" target={"_blank"} className={style.router_link}>Blog</a></li>

                        <li className={style.menu_item}><Link activeClass="active" onClick={close}
                            to="/contact" className={style.router_link}>Contact Us</Link></li>

                        <li className={style.menu_item}><Link activeClass="active" onClick={close}
                            to="/contact" className={style.router_link}><button>Shedule A Demo</button> </Link></li>
                    </ul>

                </div>


                {/* sm_cntrl: this class is the parent of the two icons that controls the navigation bar on small screen, as written in the function above, once the first icon is clicked it changes the state of the navigation bar */}
                <div className={style.sm_cntrl}>
                    {!isNavExpanded ?
                        <HiBars3BottomRight className={style.cntrl} onClick={() =>
                            setIsNavExpanded(!isNavExpanded)
                        } /> : <FaRegTimesCircle className={style.cntrl} onClick={() =>
                            setIsNavExpanded(!isNavExpanded)
                        } />
                    }
                </div>

            </div>

        </div>
        // header
    )
}

export default Header