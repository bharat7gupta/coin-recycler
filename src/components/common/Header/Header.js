import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './Header.module.css';
import Dropdown from '../Dropdown';

import supportedLanguages from '../../../config/supported-languages.json';

export const Header = () => {
	const [currentLanguage, setCurrentLanguage] = useState(
		window.localStorage.getItem("currentLanguage") || supportedLanguages[0].code
	);

	const handleLanguageChange = (languageCode) => {
		window.localStorage.setItem("currentLanguage", languageCode);
		setCurrentLanguage(languageCode);
	};

	return (
		<header>
			{/* nav bar for mobile view */}
        	<div className="content d-sm-none f-liber">
				<nav role="navigation">
					<div id="menuToggle">
						<input type="checkbox" />
						<span></span>
						<span></span>
						<span></span>
						<ul id="menu">
							<li><a href="javascript:void(0);">Bitcoin</a></li>
							<li><a href="javascript:void(0);">How it works</a></li>
							<li><a href="javascript:void(0);">About</a></li>
							<li><a href="javascript:void(0);">Mission</a></li>
							<li><a href="javascript:void(0);">Track order</a></li>
							<li>
								<a href="javascript:void(0);"><img src="/img/usa-flag.svg" alt="USA" /></a>
							</li>
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
					<Link to="about-bitcoin">Bitcoin</Link>
					<Link to="how-it-works">How it works</Link>
					<Link to="faq">About</Link>
					<Link to="mission">Mission</Link>
					<Link to="track-order">Track order</Link>
					<p>|</p>

					<a href="javascript:void(0);">
						<Dropdown
							list={supportedLanguages}
							selectedValue={currentLanguage}
							containerClass={styles['languages']}
							caretClass={styles['caret']}
							onChange={handleLanguageChange}
						/>
					</a>
				</div>
        	</div>
		</header>
	)
}
