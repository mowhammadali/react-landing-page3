import React , {Component} from "react";

import styles from "../styles/Navbar.module.css";
import me from "../images/me.webp";

class Navbar extends Component {

    constructor(){
        super();
        this.state = {
            isActive: false
        }
    }

    sideMenuHandler = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive,
        }))
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.listContainer}>
                    <div className={styles.hambergerMenu}>
                        <i class="bi bi-list" onClick={this.sideMenuHandler}></i>
                    </div>
                    <ul className={`${styles.list} ${this.state.isActive ? styles.active : null}`}>
                        <li onClick={this.sideMenuHandler}><i className="bi bi-x"></i></li>
                        <li><a href="@">Home Page</a></li>
                        <li><a href="@">Production</a></li>
                        <li><a href="@">About Us</a></li>
                    </ul>
                </div>
                <div className={styles.logo}>
                    <img src={me} alt="logo" />
                </div>
            </div>
        );
    }
}

export default Navbar;