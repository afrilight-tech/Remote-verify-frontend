import style from './assets/css/Hero.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from './components/NextArrow';
import BeforeArrow from './components/BeforeArrow';
import { Link } from 'react-router-dom';
import { BsArrowReturnRight } from "react-icons/bs";

function Hero() {

    

    // react-slick settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // enable autoplay
        autoplaySpeed: 3000, // time between slides in milliseconds
        nextArrow: <NextArrow />, // custom next arrow component
        prevArrow: <BeforeArrow />, // custom prev arrow component
    }


    // default component rendered in the hero section
    return (
        <div className={style.hero}>

            <div className={style.hero_inner}>

                {/* slider */}
                <Slider {...settings}>
                    <div className={style.slide1}>

                        <div className={style.slide1Background}>

                        </div>

                        <div className={style.heroText}>
                            <div className={style.heroTextInner} data-aos="fade-right" data-aos-duration="1200">
                                <h3>The Number One No-code Identity Decisioning <br /> Platform.</h3>
                                <Link className={style.heroLink} to={'/services'}><button>Explore Now <BsArrowReturnRight className={style.heroTextIcon} /></button></Link>
                            </div>
                        </div>

                    </div>


                    <div className={style.slide2}>

                        <div className={style.slide2Background}>

                        </div>

                        <div className={style.heroText}>
                            <div className={style.heroTextInner} data-aos="fade-right" data-aos-duration="1200">
                                <h3>Get Ready To Solve Identity Verification And<br /> Scale Your Product.
                                </h3>
                                <Link className={style.heroLink} to={'/services'}><button>Explore Now <BsArrowReturnRight className={style.heroTextIcon} /></button></Link>
                            </div>
                        </div>

                    </div>


                </Slider>

                {/* slider */}

            </div>

        </div>
    )
}

export default Hero
