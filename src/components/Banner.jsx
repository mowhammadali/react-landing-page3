import React, { Component } from 'react';
import styles from "../styles/Banner.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import banner from "../images/banner.jpg";
import Aos from 'aos';

class Banner extends Component {

    componentDidMount = () => {
        AOS.init({
            delay: 300,
            duration:1600,
            easing:'ease-in-out'
        })
        Aos.refresh();
    }

    render() {
        return (
            <div className={styles.container}>
                <img src={banner} alt="banner"/>
                <div className={styles.textContainer}>
                    <h1 data-aos="flip-up">Programmer</h1>
                    <p data-aos="zoom-out-right">We're <span>React</span> Developer</p>
                </div>
            </div>
        );
    }
}

export default Banner;