import React, { useState, useEffect } from 'react';
import cx from "classnames";

import bitFinex from 'images/bitfinex.svg';
import shapeShift from 'images/shapeshift.svg';
import { getAllExchanges } from "../../api/ApiCaller";

import styles from './CoinExchanges.module.css'

export const CoinExchanges = ({ addSlideInClass, onCloseExchanges }) => {
	const [exchanges, setExchanges] = useState([]);

	useEffect(() => {
		getAllExchanges()
			.then((data) => {
				setExchanges(data);
			});
	}, []);

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
					Choose Exchanges
				</p>
				<i class={cx(styles["close"], "fa fa-times-circle ml-auto")} onClick={onCloseExchanges}></i>
			</div>
			<div
				className="d-flex flex-column text-center container p-5 p-5vw-xs"
			>

				{exchanges && exchanges.length > 0 ?
					exchanges.map((exchange, index) => (
						<React.Fragment>
							<div className={styles['coin-exchange']}>
								<div className={cx(styles["price-box-row-1"], "row")}>
									<div className="col-6 d-flex flex-column align-items-start">
										<img className="my-auto" src={bitFinex} alt="bitfinex" />
									</div>
									<div className="col-6 text-right">
										<p className="text-muted font-10">{exchange.lastUpdatedText}</p>
										<p className="font-10">
											Don’t mind waiting little get the
											<span className={styles["p-color"]}>Best price</span>
										</p>
									</div>
								</div>
								<div className={cx(styles["price-box-row-2"], "row")}>
									<div className="col-6 d-flex flex-column align-items-start">
										<p className="font-12 text-muted">Amount</p>
										<p className="font-16 font-weight-bold">
											{exchange.btnAmount}<span className="font-14 ml-2">BTC</span>
										</p>
									</div>
									<div className="col-6 text-right">
										<p className="font-12 text-muted">Price</p>
										<p className="font-16 font-weight-bold">
											{exchange.btnPrice}<span className="font-14 ml-2">BTC</span>
										</p>
									</div>
								</div>
							</div>
						
							{(index !== exchanges.length - 1) &&
								<hr className="hr-nob short-hr" align="left" width="10%" />}

						</React.Fragment>
					))
				: null}
			</div>
		</div>
	)
}
