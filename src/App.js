import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import AboutBitcoin from './components/AboutBitcoin';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
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
					<Route path="/" exact component={ Home } />
					<Route path="/about-bitcoin" component={ AboutBitcoin } />
					<Route path="/mission" component={ Mission } />
					<Route path="/how-it-works" component={ HowItWorks } />
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
