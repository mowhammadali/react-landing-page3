import React, { Component } from 'react';

import styles from "../styles/Card.module.css";

import down from "../images/down.svg";
import up from "../images/up.svg";

class Card extends Component {

    constructor(){
        super();
        this.state = {
            number: 0,
        }
    }

    downHandler = () =>{
        this.setState(prevState => ({
            number: prevState.number - 1,
        }))

    }

    upHandler = () => {
        this.setState(prevState => ({
            number: prevState.number + 1,
        }))
    }

    render() {

        const {image , name , cost} = this.props;
        const {number} = this.state;
        const style = {opacity: .4 , cursor:"auto"};

        return (
            <div className={styles.card}>
                <img src={image} alt={name}/>
                <h1>{name}</h1>
                <p>{number ? `${cost}$ * ${number} = ${cost * number}$` : `${cost}$`}</p>
                <div className={styles.calculator}>
                    <img src={down} alt="down" onClick={number ? this.downHandler : null} style={number ? null : style}/>
                    <span>{number}</span>
                    <img src={up} alt="up" onClick={this.upHandler}/>
                </div>
            </div>
        );
    }
}

export default Card;