import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import greenRoller from 'images/green-roller.svg';
import Dropdown from 'components/common/Dropdown';
import LocaleString from 'components/common/LocaleString';
import CoinExchanges from 'components/CoinExchanges';

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
		}, 100);
	};

	const onCloseExchanges = () => {
		setAddExchangesSlideInClass(false);

		setTimeout(() => {
			setShowExchanges(false);
		}, 400);
	}

	return (
		<React.Fragment>
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
								<p className={cx(styles["heading"], "font-weight-light text-left")}>
									<LocaleString strKey='receiveBitcoin' />
								</p>
								<input
									className={cx(styles["transparent-input"], "form-control f-liber")}
									type="number"
									value="0.0022354"
									readonly
								/>
							</div>
							<div className="col-4 text-right flex-column d-flex f-liber p-3vw-xs">
								<Dropdown
									list={currencyList}
									idField='id'
									valueField='name'
									title="Select crypto currency"
								/>
								<p className={cx(styles["grey-color"], "font-20 mt-auto font-weight-bold mb-2")}>
									BTC
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 p-4 mt-10vh-sm text-left">
						<h4 className="font-22 f-liber">
							<LocaleString strKey='recycleAltCoins' />
						</h4>
						<p className="font-12">
							<LocaleString strKey='exchangeFromMultipleExchanges' />
						</p>
						<button
							type="button"
							className={cx(styles["green-button"], "btn f-avenir")}
							onClick={handleShowExchanges}
						>
							<LocaleString strKey='exchange' />
						</button>
					</div>
				</div>
			
				{/* Track Order */}
				<div className="d-flex pb-5">
					<Link
						className={cx(styles["green-border-button"], "btn f-liber mt-5 mt-20px-xs ml-auto")}
						to='track-order'
					>
						<LocaleString strKey='trackOrderButton' />
					</Link>
				</div>
			</div>

			{showExchanges && (
				<CoinExchanges
					addSlideInClass={addExchangesSlideInClass}
					onCloseExchanges={onCloseExchanges}
				/>
			)}
		</React.Fragment>
	);
}
