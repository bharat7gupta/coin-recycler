import React from 'react';
import cx from 'classnames';

import homeLogo from 'images/home-logo.svg';

import styles from './SplashScreen.module.css';

export const SplashScreen = () => {
	return (
		<div className={cx(styles['home-bg'], "bg")}>
			<div className="center-all">
				<img src={homeLogo} alt="logo" />
			</div>
		</div>
	);
}
