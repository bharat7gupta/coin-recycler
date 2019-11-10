import React from 'react';
import cx from 'classnames';

import styles from '../Exchange/Exchange.module.css';

export const ExchangeStepThree = () => {
	return (
		<div className={cx(styles["green-box"], "p-3vw-xs")}>
			<div className="row text-left">
				<div className="col-6 text-right font-16">
					<p><i className="fas fa-check d-color"></i></p>
				</div>
				<div className="col-6 text-left">
					<p className="f-liber font-14 font-weight-light">
						Order Placed
					</p>
				</div>
			</div>
			<div className="row text-left">
				<div className="col-6 text-right font-16">
					<p><i className="fas fa-check d-color"></i></p>
				</div>
				<div className="col-6 text-left">
					<p className="f-liber font-14 font-weight-light">
						Order recieved
					</p>
				</div>
			</div>
			<div className="row text-left">
				<div className="col-6 text-right font-16">
					<p><i className="fas fa-check d-color"></i></p>
				</div>
				<div className="col-6 text-left">
					<p className="f-liber font-14 font-weight-light">
						Your order is in process
					</p>
				</div>
			</div>
			<div className="row text-left">
				<div className="col-6 text-right font-16">
					<p><i className="fas fa-check d-color"></i></p>
				</div>
				<div className="col-6 text-left">
					<p className="f-liber font-14 font-weight-light">
						Successful
					</p>
				</div>
			</div>

			<p className="font-14 m-0 mt-4 text-center">
				Exchange will automatically initiate once deposit is detected on
				below address Track order
			</p>
		</div>
	);
};
