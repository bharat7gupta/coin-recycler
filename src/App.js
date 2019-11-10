import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import AboutBitcoin from './components/AboutBitcoin';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
import ExchangeStepOne from './components/ExchangeStepOne';
import ExchangeStepTwo from './components/ExchangeStepTwo';
import ExchangeStepThree from './components/ExchangeStepThree';
import Exchange from './components/Exchange';
import FAQAndSupport from './components/FAQAndSupport';
import TrackOrder from './components/TrackOrder';
import Team from './components/Team';

import styles from './App.module.css';

function App() {
	return (
		<div className={styles['App']}>
			<Router>
				<Switch>
					<Route path="/" exact component={ SplashScreen } />
					<Route path="/home" component={ Home } />
					<Route path="/about-bitcoin" component={ AboutBitcoin } />
					<Route path="/mission" component={ Mission } />
					<Route path="/how-it-works" component={ HowItWorks } />
					<Route path="/step-1" component={ ExchangeStepOne } />
					<Route path="/step-2" component={ ExchangeStepTwo } />
					<Route path="/step-3" component={ ExchangeStepThree } />
					<Route path="/exchange" component={ Exchange } />
					<Route path="/faq" component={ FAQAndSupport } />
					<Route path="/track-order" component={ TrackOrder } />
					<Route path="/team" component={ Team } />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
