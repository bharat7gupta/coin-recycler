import React from 'react';
import cx from 'classnames';

import logo from '../../images/home-logo.svg';

import styles from './SplashScreen.module.css';

export const SplashScreen = () => {
	return (
		<div className={cx(styles['home-bg'], "bg")}>
			<div className="center-all">
				<svg xmlns="http://www.w3.org/2000/svg" width="480" height="67"><g data-name="Group 8"><g data-name="Group 7" transform="translate(-235 -299)"><text transform="translate(370 356)" fill="#fff" font-size="40" font-family="HeliosRounded, Helios Rounded" letter-spacing=".02em"><tspan x="0" y="0">Coin </tspan> <tspan y="0" fill="#37d6ae">Recycler</tspan></text><g data-name="Ellipse 4" transform="translate(318.8 313.659)" fill="#fff" stroke="#37d6ae" stroke-width="6"><circle cx="12.469" cy="12.469" stroke="none" r="12.469"/><circle cx="12.469" cy="12.469" fill="none" r="9.469"/></g><path data-name="Path 6" d="M348.9 326.838H313l2.494 32.536c.232 3.364 2.262 5.626 5.626 5.626h19.661c3.364 0 5.336-2.262 5.626-5.626z" fill="#37d6ae"/><path data-name="Path 7" d="M348.958 306.737l-28.128-7.54c-4.35-1.16-5.51 3.132-6.09 5.336l36.828 9.859c.58-2.147 1.74-6.497-2.61-7.655z" fill="#37d6ae"/><circle data-name="Ellipse 5" cx="1" cy="1" r="1" transform="translate(334 302)" fill="#37d6ae"/><text data-name="CoinRecycler" transform="translate(370 356)" fill="#fff" font-size="40" font-family="HeliosRounded, Helios Rounded" letter-spacing=".02em"><tspan x="0" y="0">Coin </tspan> <tspan y="0" fill="#37d6ae">Recycler</tspan></text><g data-name="Ellipse 6" transform="translate(318.8 313.659)" fill="#fff" stroke="#37d6ae" stroke-width="6"><circle cx="12.469" cy="12.469" stroke="none" r="12.469"/><circle cx="12.469" cy="12.469" fill="none" r="9.469"/></g><path data-name="Path 8" d="M348.9 326.838H313l2.494 32.536c.232 3.364 2.262 5.626 5.626 5.626h19.661c3.364 0 5.336-2.262 5.626-5.626z" fill="#37d6ae"/><path data-name="Path 9" d="M348.958 306.737l-28.128-7.54c-4.35-1.16-5.51 3.132-6.09 5.336l36.828 9.859c.58-2.147 1.74-6.497-2.61-7.655z" fill="#37d6ae"/></g></g></svg>
			</div>
		</div>
	);
}
