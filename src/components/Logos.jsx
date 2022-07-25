import React, { Component } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "../styles/Logos.module.css";

import apple from "../images/apple.jpg";
import samsung from "../images/samsung.jpg";
import xiaomi from "../images/xiaomi.png";
import Aos from 'aos';

class Logos extends Component {

    componentDidMount = () => {
        AOS.init({
            delay: 800,
            duration:1400,
            easing:'ease-in-out'
        })
        Aos.refresh();
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>Who Support Us?</h1>
                <div className={styles.logos}>
                    <img data-aos="fade-right" src={apple} alt="logo"/>
                    <img data-aos="fade-up" src={samsung} alt="logo"/>
                    <img data-aos="fade-left" src={xiaomi} alt="logo"/>
                </div>
            </div>
        );
    }
}

export default Logos;