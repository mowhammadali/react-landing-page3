import React, { Component } from 'react';
import {v4} from "uuid";

import Card from "./Card";
import styles from "../styles/Cards.module.css";

import iphone10 from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";

class Cards extends Component {

    constructor(){
        super();
        this.state = {
            data:[
                {image:iphone10, name:"iphone10", cost:"500"},
                {image:iphone11, name:"iphone11", cost:"600"},
                {image:iphone12, name:"iphone12", cost:"800"},
                {image:s21, name:"S21", cost:"759"}
            ]
        }
    }

    render() {

        const {data} = this.state;

        return (
            <div className={styles.container}>
                {data.map(data => <Card key={v4()} image={data.image} name={data.name} cost={data.cost} />)}
            </div>
        );
    }
}

export default Cards;