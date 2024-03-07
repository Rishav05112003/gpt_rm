import React from 'react';
import './App.css';
import {Navbar, Feature, Article, Brand, Cta} from './components';
import {Blog, Features, Header, Footer, Possibility, WhatGPT3} from './containers';
import './App.css';
const App = () => {
    return (
        <>
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
        </>
    )
};
  

export default App;