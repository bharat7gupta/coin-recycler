import React from 'react';
import cx from 'classnames';

import addressScanIcon from '../../images/address-scan.svg';

import styles from '../Exchange/Exchange.module.css';

export const ExchangeStepOne = ({ goToNext }) => {
	return (
		<div className={cx(styles["green-box"], "p-3vw-xs")}>
			<p className="text-right d-inline-block float-right">
				<a className={cx(styles["help-icon"])} href="#">
					<i className="far fa-question-circle"></i>
				</a>
			</p>
			<h5 className="f-liber font-20 d-inline-block">
				Enter your Bitcoin wallet address
			</h5>
			<p className="f-liber font-14 font-weight-light">
				Address for the wallet in which Bitcoin will be deposited
			</p>
			<div className="form-group mt-5 mb-5 d-flex">
				<input
					type="text"
					className="form-control d-inline-block"
					id="bitAccount"
					placeholder="0000-00000-0000-0000-00000"
				/>
				<img src={addressScanIcon} className={cx(styles["address-scan-icon"], "float-right d-inline-block")} alt="" />
			</div>

			<p className="font-10 text-center m-0">
				By clicking Next you agree to terms & privacy policy
			</p>
			<button type="button" className="btn f-avenir font-18" onClick={goToNext}>
				Next
			</button>
		</div>
	);
};
