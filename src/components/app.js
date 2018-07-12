import React from 'react';
import '../assets/css/app.css';
import LandingPage from './landing-page';
import Header from './header';
import Footer from './footer';
import Scoreboard from './scoreboard';

const App = () => {
    return (
        <div className="app">
            <Scoreboard />
            <Header />
            <LandingPage />
            <Footer />
        </div>
    )
};

export default App;
