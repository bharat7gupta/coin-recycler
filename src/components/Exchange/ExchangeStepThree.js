import React from 'react';
import cx from 'classnames';

import styles from 'components/Exchange/Exchange.module.css';
import LocaleString from 'components/common/LocaleString';

export const ExchangeStepThree = () => {
	return (
		<div className={cx(styles["green-box"], "p-3vw-xs")}>
			<div className="row text-left">
				<div className="col-6 text-right font-16">
					<p><i className="fas fa-check d-color"></i></p>
				</div>
				<div className="col-6 text-left">
					<p className="f-liber font-14 font-weight-light">
						<LocaleString strKey='orderPlaced' />
					</p>
				</div>
			</div>
			<div className="row text-left">
				<div className="col-6 text-right font-16">
					<p><i className="fas fa-check d-color"></i></p>
				</div>
				<div className="col-6 text-left">
					<p className="f-liber font-14 font-weight-light">
						<LocaleString strKey='orderReceived' />
					</p>
				</div>
			</div>
			<div className="row text-left">
				<div className="col-6 text-right font-16">
					<p><i className="fas fa-check d-color"></i></p>
				</div>
				<div className="col-6 text-left">
					<p className="f-liber font-14 font-weight-light">
						<LocaleString strKey='orderInProgress' />
					</p>
				</div>
			</div>
			<div className="row text-left">
				<div className="col-6 text-right font-16">
					<p><i className="fas fa-check d-color"></i></p>
				</div>
				<div className="col-6 text-left">
					<p className="f-liber font-14 font-weight-light">
						<LocaleString strKey='orderSuccessful' />
					</p>
				</div>
			</div>

			<p className="font-14 m-0 mt-4 text-center">
				<LocaleString strKey='exchangeMessage' />
			</p>
		</div>
	);
};

export default ExchangeStepThree;
