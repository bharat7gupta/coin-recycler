import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Dropdown from 'components/common/Dropdown';
import LocaleString from 'components/common/LocaleString';
import supportedLanguages from 'config/supported-languages.json';
import UserContext from 'UserContext';
import { setItemToStorage } from 'utils';

import styles from './Header.module.css';

export const Header = () => {
	const [currentLanguage, setCurrentLanguage] = useState(
		window.localStorage.getItem("currentLanguage") || supportedLanguages[0].code
	);

	const context = useContext(UserContext);

	const handleLanguageChange = (languageCode) => {
		setItemToStorage("currentLanguage", languageCode);
		setCurrentLanguage(languageCode);
		context.updateCurrentLanguage(languageCode);
	};

	const getBitcoinLink = () => {
		return (
			<Link to="about-bitcoin">
				<LocaleString strKey="bitcoinLink" />
			</Link>
		)
	};

	const getHowItWorksLink = () => {
		return (
			<Link to="how-it-works">
				<LocaleString strKey="howItWorksLink" />
			</Link>
		)
	};

	const getFAQLink = () => {
		return (
			<Link to="faq">
				<LocaleString strKey="faqLink" />
			</Link>
		)
	};

	const getMissionLink = () => {
		return (
			<Link to="mission">
				<LocaleString strKey="missionLink" />
			</Link>
		)
	};

	const getTrackOrderLink = () => {
		return (
			<Link to="track-order">
				<LocaleString strKey="trackOrderLink" />
			</Link>
		)
	};

	const getLanguageDropdown = () => {
		return (
			<Dropdown
				list={supportedLanguages}
				selectedValue={currentLanguage}
				containerClass={styles['languages']}
				caretClass={styles['caret']}
				idField='code'
				valueField='name'
				title="Select Language"
				onChange={handleLanguageChange}
			/>
		)
	};

	return (
		<header>
			{/* nav bar for mobile view */}
        	<div className="content d-sm-none f-liber">
				<nav role="navigation">
					<div className={styles["menuToggle"]}>
						<input type="checkbox" />
						<span></span>
						<span></span>
						<span></span>
						<ul className={styles["menu"]}>
							<li>{getBitcoinLink()}</li>
							<li>{getHowItWorksLink()}</li>
							<li>{getFAQLink()}</li>
							<li>{getMissionLink()}</li>
							<li>{getTrackOrderLink()}</li>
							<li>{getLanguageDropdown()}</li>
						</ul>
					</div>
				</nav>
			</div>

			{/* nav bar for desktop view */}
        	<div className="row">
				<Link to="/" className="mr-auto mt-3 nav-logo">
					<svg xmlns="http://www.w3.org/2000/svg" width="131.697" height="20.423"><defs><clipPath id="a"><path fill="none" d="M0 0h131.697v20.423H0z"/></clipPath></defs><g data-name="Component 3 – 1" clip-path="url(#a)"><path d="M5.835 1.271a8.846 8.846 0 018.728 8.94 8.846 8.846 0 01-8.728 8.941v1.271a10.1 10.1 0 009.968-10.211A10.1 10.1 0 005.835 0z" fill="#fff"/><path d="M5.957 4.133a6.018 6.018 0 015.957 6.078 6.018 6.018 0 01-5.957 6.078A6.018 6.018 0 010 10.211a6.018 6.018 0 015.957-6.078z" fill="#37d6ae"/><path data-name="Intersection 1" d="M6.236 5.768a4.365 4.365 0 110 8.731z" fill="#fff"/><text data-name="Coin Recycle" transform="translate(23.697 15.027)" fill="#fff" font-size="15" font-family="HeliosRounded, Helios Rounded"><tspan x="0" y="0">Coin</tspan> <tspan y="0" fill="#37d6ae">Recycle</tspan></text></g></svg>
				</Link>
				<div className={cx(styles["top-nav"], "ml-auto mt-3  d-none d-sm-flex")}>
					{getBitcoinLink()}
					{getHowItWorksLink()}
					{getFAQLink()}
					{getMissionLink()}
					{getTrackOrderLink()}
					<p>|</p>
					<p>{getLanguageDropdown()}</p>
				</div>
        	</div>
		</header>
	)
}
