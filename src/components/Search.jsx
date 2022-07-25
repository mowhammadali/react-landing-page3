import React, { Component } from 'react';

import styles from "../styles/Search.module.css";

class Search extends Component {

    constructor(){
        super();
        this.state = {
            text: "",
        }
    }

    changeHandler = (event) => {
        this.setState({
            text: event.target.value,
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>What You Want!</h1>
                <div className={styles.search}>
                    <input type="text" placeholder='Search...' onChange={this.changeHandler}/>
                    <span>{this.state.text}</span>
                </div>
            </div>
        );
    }
}

export default Search;