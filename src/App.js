import React, { useState } from 'react';
import cx from 'classnames';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from 'components/common/Header';
import Home from 'components/Home';
import AboutBitcoin from 'components/AboutBitcoin';
import Mission from 'components/Mission';
import HowItWorks from 'components/HowItWorks';
import Exchange from 'components/Exchange';
import FAQAndSupport from 'components/FAQAndSupport';
import TrackOrder from 'components/TrackOrder';
import Team from 'components/Team';

import { UserProvider } from './UserContext';
import supportedLanguages from 'config/supported-languages.json';

import styles from './App.module.css';

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
							<Route path="/" exact component={ Home } />
							<Route path="/about-bitcoin" component={ AboutBitcoin } />
							<Route path="/mission" component={ Mission } />
							<Route path="/how-it-works" component={ HowItWorks } />
							<Route path="/exchange" component={ Exchange } />
							<Route path="/faq" component={ FAQAndSupport } />
							<Route path="/track-order" component={ TrackOrder } />
							<Route path="/team" component={ Team } />
						</Switch>
					</div>
				</div>
			</Router>
		</UserProvider>
	);
}

export default App;
