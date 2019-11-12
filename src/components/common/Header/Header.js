import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Dropdown from 'components/common/Dropdown';
import supportedLanguages from 'config/supported-languages.json';
import navLogo from 'images/nav-logo.svg';

import styles from './Header.module.css';

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
					<div className={styles["menuToggle"]}>
						<input type="checkbox" />
						<span></span>
						<span></span>
						<span></span>
						<ul className={styles["menu"]}>
							<li><Link to="about-bitcoin">Bitcoin</Link></li>
							<li><Link to="how-it-works">How it works</Link></li>
							<li><Link to="faq">About</Link></li>
							<li><Link to="mission">Mission</Link></li>
							<li><Link to="track-order">Track order</Link></li>
							<li>
								<a href="javascript:void(0);">
									<Dropdown
										list={supportedLanguages}
										selectedValue={currentLanguage}
										containerClass={styles['languages']}
										caretClass={styles['caret']}
										idField='code'
										valueField='name'
										onChange={handleLanguageChange}
									/>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>

			{/* nav bar for desktop view */}
        	<div className="row">
				<Link to="/" className="mr-auto mt-3 nav-logo">
					<img src={navLogo} alt="" />
				</Link>
				<div className={cx(styles["top-nav"], "ml-auto mt-3  d-none d-sm-flex")}>
					<Link to="about-bitcoin">Bitcoin</Link>
					<Link to="how-it-works">How it works</Link>
					<Link to="faq">About</Link>
					<Link to="mission">Mission</Link>
					<Link to="track-order">Track order</Link>
					<p>|</p>

					<a href="javascript:void(0);" title="Select Language">
						<Dropdown
							list={supportedLanguages}
							selectedValue={currentLanguage}
							containerClass={styles['languages']}
							caretClass={styles['caret']}
							idField='code'
							valueField='name'
							onChange={handleLanguageChange}
						/>
					</a>
				</div>
        	</div>
		</header>
	)
}
