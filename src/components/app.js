import React from 'react';
import '../assets/css/app.css';
import LandingPage from './landing-page';
import Footer from './footer';
import Scoreboard from './scoreboard';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import About from './about';
import Employees from './employee-profiles';
import Advertise from './advertise';
import Contact from './contact/contact';
import Employment from './employment';
import ListenLive from './listen-live';
import WinFreeStuff from './winfreestuff';
import HeaderChange from './header';
import NotFound from './not-found';
import ReactGA from 'react-ga';

const App = () => {
    function initializeReactGA() {
        ReactGA.initialize('UA-125643832-1');
        ReactGA.pageview('/homepage');
    }
    return (
        <div className="app">
            <Scoreboard />
            <HeaderChange />
            <ListenLive show="listen-on-app" />
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path='/on-air-shows' component={Employees} />
                <Route path='/win-free-stuff' component={WinFreeStuff} />
                <Route path='/advertise' component={Advertise} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/employment' component={Employment} />
                <Route path='/listen-live' component={ListenLive} />
                <Route path='/*' component={NotFound} />
            </Switch>
            <Footer />
        </div>
    )
};

export default App;
