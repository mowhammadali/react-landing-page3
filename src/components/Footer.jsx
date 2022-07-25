import React, { Component } from 'react';

import styles from "../styles/Footer.module.css";

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <h1>© All Rights Reserve 2022</h1>
            </div>
        );
    }
}

export default Footer;