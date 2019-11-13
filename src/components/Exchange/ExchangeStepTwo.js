import React from 'react';
import cx from 'classnames';

import qrCode from 'images/qr-code.svg';
import copyIcon from 'images/copy-icon.svg';

import styles from 'components/Exchange/Exchange.module.css';
import LocaleString from 'components/common/LocaleString';

export const ExchangeStepTwo = ({ goToNext }) => {
	return (
		<div className={cx(styles["green-box"], "p-3vw-xs")}>
			<p className="text-right d-inline-block float-right">
				<span className={cx(styles["help-icon"])}>
					<i className="far fa-question-circle"></i>
				</span>
			</p>
			<h5 className="f-liber font-20 d-inline-block">
				<LocaleString strKey='sendCurrencyToAddress' attributes={{ count: 4, currency: 'ETH' }} />
			</h5>
			<p className="f-liber font-14 font-weight-light">
				<LocaleString strKey='exchangeMessage' />
			</p>
			<div className="d-flex">
				<img className="mx-auto" src={qrCode} alt="" />
			</div>
			<div className="d-flex mt-4 text-center">
				<p className={cx(styles["text-wrap"], "f-liber font-16 font-weight-bold d-color text-center")}>
					0x5937606132bdd16774b4a5bd501746e5dd498bdd
				</p>
				<span className="text-center">
					<img className={styles["copy-icon"]} src={copyIcon} alt=""/>
				</span>
			</div>

			<p className="font-10 m-0">
				<LocaleString strKey='ordeId' />
				: 5383c2f3-e7bd-4876-a707-1fb9217fdbeb
				<br />
				<LocaleString strKey='recipientAddress' />
				: 12t9YDPgwueZ9NyMgw519p7AA8isjr6SMw
			</p>

			<button type="button" className="btn f-avenir font-18" onClick={goToNext}>
				<LocaleString strKey='next' />
			</button>
		</div>
	);
};

export default ExchangeStepTwo;
