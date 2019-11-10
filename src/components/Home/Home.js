import React, { useState } from 'react';
import cx from 'classnames';

import greenRoller from 'images/green-roller.svg';
import Header from '../common/Header';
import Dropdown from '../common/Dropdown';
import LocaleString from '../common/LocaleString';
import CoinExchanges from '../CoinExchanges';

import styles from './Home.module.css';

export const Home = () => {
	const currencyList = [
		{
			id: 'ETH',
			name: 'ETH'
		},
		{
			id: 'RAV',
			name: 'RAV'
		},
		{
			id: 'BCC',
			name: 'BCC'
		},
	];

	const [ showExchanges, setShowExchanges ] = useState(false);
	const [ addExchangesSlideInClass, setAddExchangesSlideInClass ] = useState(false);

	const handleShowExchanges = () => {
		setShowExchanges(true);

		setTimeout(() => {
			setAddExchangesSlideInClass(true);
		}, 200);
	};

	const onCloseExchanges = () => {
		setAddExchangesSlideInClass(false);

		setTimeout(() => {
			setShowExchanges(false);
		}, 200);
	}

	return (
		<div className={cx(styles["home"], "bg")}>
			<Header />
			<div className="center-all container-fluid p-0-xs n-position-md mt-10vh-xs">
				<div className="row mx-0">
					<div className="col-md-6 p-0-xs">
						<div className={cx(styles["rounded-box"], "row mx-auto p-4 p-3vw-xs")}>
							<div className="col-2 d-flex flex-column p-3vw-xs">
								<img src={greenRoller} alt="" />
								<div className={styles["green-dotted-line"]}></div>
								<img className="mt-auto" src={greenRoller} alt="" />
							</div>
							<div className={cx(styles["coin-input-group"], "col-6 p-3vw-xs")}>
								<p className={cx(styles["heading"], "font-weight-light text-left")}>
									<LocaleString strKey="fromCurrencyLabel" />
								</p>
								<input
									className={cx(styles["transparent-input"], "form-control f-liber")}
									type="number"
									placeholder="0.00"
								/>
								<hr className={styles["hr-nob"]} align="left" width="15%" />
								<p className={cx(styles["heading"], "font-weight-light text-left")}>Receive Bitcoin</p>
								<input
									className={cx(styles["transparent-input"], "form-control f-liber")}
									type="number"
									value="0.0022354"
									readonly
								/>
							</div>
							<div className="col-4 text-right flex-column d-flex f-liber p-3vw-xs">
								<Dropdown list={currencyList} />
								<p className={cx(styles["grey-color"], "font-20 mt-auto font-weight-bold mb-2")}>
									BTC
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 p-4 mt-10vh-sm text-left">
						<h4 className="font-22 f-liber">Recycle your Alt-coins to Bitcoin</h4>
						<p className="font-12">
							Exchange 500+ altcoins without creating an account on any
							exchange.
						</p>
						<button
							type="button"
							className={cx(styles["green-button"], "btn f-avenir")}
							onClick={handleShowExchanges}
						>
							Exchange
						</button>
					</div>
				</div>
			
				{/* Track Order */}
				<div className="d-flex pb-5">
					<button
						className={cx(styles["green-border-button"], "btn f-liber mt-5 mt-20px-xs ml-auto")}
						type="button"
					>
						Track order
					</button>
				</div>
			</div>

			{showExchanges && (
				<CoinExchanges
					addSlideInClass={addExchangesSlideInClass}
					onCloseExchanges={onCloseExchanges}
				/>
			)}
		</div>
	);
}