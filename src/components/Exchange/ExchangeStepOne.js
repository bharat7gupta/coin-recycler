import React, { useState } from 'react';
import cx from 'classnames';
import QrReader from 'react-qr-reader';

import addressScanIcon from 'images/address-scan.svg';
import { showErrorToast } from 'Toast.js';
import styles from 'components/Exchange/Exchange.module.css';
import LocaleString from 'components/common/LocaleString';

export const ExchangeStepOne = ({ goToNext }) => {
	let inputRef;

	const [showQRReader, setShowQRReader] = useState(false);
	const [bitcoinWalletAddress, setBitcoinWalletAddress] = useState(window.localStorage.getItem("bitcoinAddress") || '');

	const setInputRef = (element) => {
		inputRef = element;
	};

	const scanQRCode = () => {
		setShowQRReader(!showQRReader);
	};

	const handleScan = (data) => {
		if (data !== null) {
			inputRef.value = data;
			setShowQRReader(false);
		}
	};

	const goToNextStep = () => {
		if (!!bitcoinWalletAddress && bitcoinWalletAddress.trim() !== "") {
			goToNext(bitcoinWalletAddress);
		} else {
			showErrorToast('emptyBitcoinAddressError');
		}
	};

	const handleError = (data) => {
		showErrorToast('tryAgain');
	};

	const handleBitcoinWalletAddressChange = (e) => {
		setBitcoinWalletAddress(e.target.value);
	}

	return (
		<div className={cx(styles["green-box"], "p-3vw-xs")}>
			<p className="text-right d-inline-block float-right">
				<span className={cx(styles["help-icon"])}>
					<i className="far fa-question-circle"></i>
				</span>
			</p>
			<h5 className="f-liber font-20 d-inline-block">
				<LocaleString strKey='enterWalletAddress' />
			</h5>
			<p className="f-liber font-14 font-weight-light">
				<LocaleString strKey='enterWalletAddressInfo' />
			</p>
			<div className="form-group mt-5 mb-5 d-flex">
				<input
					ref={setInputRef}
					type="text"
					className="form-control d-inline-block"
					placeholder="1L5wSMgerhHg8GZGcsNmAx5EXMRXSKR3He"
					value={bitcoinWalletAddress}
					onChange={handleBitcoinWalletAddressChange}
				/>
				<img
					src={addressScanIcon}
					className={cx(styles["address-scan-icon"], "float-right d-inline-block")}
					alt="Scan QR Code"
					title="Scan QR Code for Bitcoin wallet address"
					onClick={scanQRCode}
				/>
			</div>

			{showQRReader && (
				<QrReader
					delay={300}
					onError={handleError}
					onScan={handleScan}
					className={styles['qr-reader']}
				/>
			)}

			<p className="font-10 text-center m-0">
				<LocaleString strKey='tncAgreement' />
			</p>
			<button type="button" className="btn f-avenir font-18" onClick={goToNextStep}>
				<LocaleString strKey='next' />
			</button>
		</div>
	);
};

export default ExchangeStepOne;
