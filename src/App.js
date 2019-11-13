import React, { useState } from 'react';
import cx from 'classnames';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from 'components/common/Header';

import { UserProvider } from './UserContext';
import supportedLanguages from 'config/supported-languages.json';

import AsyncComponent from './AsyncComponent';

import styles from './App.module.css';

/* Dynamic routes */
const home = () => import(/* webpackChunkName: "home" */ 'components/Home');
const aboutBitcoin = () => import(/* webpackChunkName: "about-bitcoin" */ 'components/AboutBitcoin');
const mission = () => import(/* webpackChunkName: "mission" */ 'components/Mission');
const howItWorks = () => import(/* webpackChunkName: "how-it-works" */ 'components/HowItWorks');
const exchage = () => import(/* webpackChunkName: "exchange" */ 'components/Exchange');
const faqAndSupport = () => import(/* webpackChunkName: "faq-and-support" */ 'components/FAQAndSupport');
const trackOrder = () => import(/* webpackChunkName: "track-order" */ 'components/TrackOrder');
const team = () => import(/* webpackChunkName: "team" */ 'components/Team');

function App() {
	let languageCode = window.localStorage.getItem('currentLanguage');

	if (!languageCode) {
		languageCode = supportedLanguages[0].code;
		window.localStorage.setItem('currentLanguage', languageCode);
	}

	// App component state is used as context value
	const [ state, setState ] = useState({
		currentLanguage: languageCode // default language setting
	});

	const contextData = {
		data: state,
		updateCurrentLanguage: (languageCode) => {
			setState({ ...state, currentLanguage: languageCode });
		}
	};

	return (
		<UserProvider value={contextData}>
			<Router>
				<div className={cx(styles["App-container"], "bg")}>
					<Header />
					<div className={styles['App-content']}>
						<Switch>
							<Route path="/" exact component={() => <AsyncComponent moduleProvider={home} />} />
							<Route path="/about-bitcoin" component={() => <AsyncComponent moduleProvider={aboutBitcoin} />} />
							<Route path="/mission" component={() => <AsyncComponent moduleProvider={mission} />} />
							<Route path="/how-it-works" component={() => <AsyncComponent moduleProvider={howItWorks} />} />
							<Route path="/exchange" component={() => <AsyncComponent moduleProvider={exchage} />} />
							<Route path="/faq" component={() => <AsyncComponent moduleProvider={faqAndSupport} />} />
							<Route path="/track-order" component={() => <AsyncComponent moduleProvider={trackOrder} />} />
							<Route path="/team" component={() => <AsyncComponent moduleProvider={team} />} />
						</Switch>
					</div>
				</div>
			</Router>
		</UserProvider>
	);
}

export default App;
