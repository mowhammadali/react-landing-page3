import React, { Component } from 'react';

import Navbar from "./Navbar"
import Banner from "./Banner"
import Cards from "./Cards";
import Search from "./Search";
import Logos from "./Logos";
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <Cards />
                <Search />
                <Logos />
                <Footer />
            </div>
        );
    }
}

export default App;