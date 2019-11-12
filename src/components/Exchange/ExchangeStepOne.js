import React, { useState } from 'react';
import cx from 'classnames';
import QrReader from 'react-qr-reader';
import toast from 'cogo-toast';

import addressScanIcon from 'images/address-scan.svg';

import styles from 'components/Exchange/Exchange.module.css';

export const ExchangeStepOne = ({ goToNext }) => {
	let inputRef;

	const [showQRReader, setShowQRReader] = useState(false);
	const [bitcoinWalletAddress, setBitcoinWalletAddress] = useState('');

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
			goToNext();
		} else {
			toast.error('Please specify Bitcoin wallet address', {
				position: 'bottom-center',
			});
		}
	};

	const handleError = (data) => {
		toast.error('Please try again!', {
			position: 'bottom-center',
		});
	};

	const handleBitcoinWalletAddressChange = (e) => {
		setBitcoinWalletAddress(e.target.value);
	}

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
					ref={setInputRef}
					type="text"
					className="form-control d-inline-block"
					id="bitAccount"
					placeholder="0000-00000-0000-0000-00000"
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
				By clicking Next you agree to terms & privacy policy
			</p>
			<button type="button" className="btn f-avenir font-18" onClick={goToNextStep}>
				Next
			</button>
		</div>
	);
};

export default ExchangeStepOne;
