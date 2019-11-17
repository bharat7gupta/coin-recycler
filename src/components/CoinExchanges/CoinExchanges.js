import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cx from "classnames";

import { getAllExchanges } from "api/ApiCaller";

import styles from './CoinExchanges.module.css'
import LocaleString from 'components/common/LocaleString';

export const CoinExchanges = ({
	primaryCurrency,
	addSlideInClass,
	onCloseExchanges,
	onExchangeSelection
}) => {
	const [exchanges, setExchanges] = useState([]);
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	useEffect(() => {
		setLoading(true);
		getAllExchanges(primaryCurrency, 1)
			.then((response) => {
				setLoading(false);
				setExchanges(response.data.exchanges);
			});
	}, [primaryCurrency]);

	const handleExchangeSelection = (exchange) => {
		onExchangeSelection(exchange);
		history.push('/exchange');
	};

	const renderLoader = () => {
		return (
			<i className={cx(styles["loader"], "fa fa-circle-notch fa-spin")}></i>
		)
	};

	const renderExchanges = () => {
		return (
			<div
				className="d-flex flex-column text-center container p-5 p-5vw-xs"
			>

				{exchanges && exchanges.length > 0 ?
					exchanges.map((exchange, index) => (
						<div key={exchange.name}>
							<div className={styles['coin-exchange']} onClick={() => handleExchangeSelection(exchange)}>
								<div className={cx(styles["price-box-row-1"], "row")}>
									<div className="col-6 d-flex flex-column align-items-start">
										<img className="my-auto" src={`/static/media/${exchange.logo}`} alt={exchange.name} />
									</div>
									<div className="col-6 text-right">
										<p className="text-muted font-10">{exchange.lastUpdatedText}</p>
										<p className="font-10">
											<LocaleString strKey='dontMindWaiting' />
											<LocaleString strKey='bestPrice' className={styles["p-color"]} />
										</p>
									</div>
								</div>
								<div className={cx(styles["price-box-row-2"], "row")}>
									<div className="col-6 d-flex flex-column align-items-start">
										<p className="font-12 text-muted">
											<LocaleString strKey='amount' />
										</p>
										<p className="font-16 font-weight-bold">
											{exchange.estAmount}
											<span className="font-14 ml-2">BTC</span>
										</p>
									</div>
									<div className="col-6 text-right">
										<p className="font-12 text-muted">
											<LocaleString strKey='price' />
										</p>
										<p className="font-16 font-weight-bold">
											{exchange.btnPrice}<span className="font-14 ml-2">BTC</span>
										</p>
									</div>
								</div>
							</div>
						
							{(index !== exchanges.length - 1) &&
								<hr className="hr-nob short-hr" align="left" width="10%" />}

						</div>
					))
				: null}
			</div>
		)
	}

	return (
		<div className={
			cx(
				styles["exchanges"],
				{[styles['slide-in']]: addSlideInClass},
				styles["bg-green"],
				styles["minh-100vh"],
				"col-md-6 text-center p-4 m-0"
			)
		}>
			<div className="container-fluid d-flex">
				<p className="text-left d-color font-12 font-weight-bold">
					<LocaleString strKey='chooseExchanges' />
				</p>
				<i className={cx(styles["close"], "fa fa-times-circle ml-auto")} onClick={onCloseExchanges}></i>
			</div>

			{loading ? renderLoader() : renderExchanges()}
		</div>
	)
}
