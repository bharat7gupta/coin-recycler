import React, { useState } from 'react';

import Stepper from 'components/common/Stepper';
import ExchangeStepOne from './ExchangeStepOne';
import ExchangeStepTwo from './ExchangeStepTwo';
import ExchangeStepThree from './ExchangeStepThree';
import LocaleString from 'components/common/LocaleString';
import { setItemToStorage, getItemFromStorage } from 'utils';
import { createOrder } from 'api/ApiCaller';

export const Exchange = () => {

	const [bitcoinWalletAddress, setBitcoinWalletAddress ] = useState('');
	const [currencyExchangeAddress, setCurrencyExchangeAddress ] = useState('');

	const exchangeSteps = [
		{
			id: 'ENTER_ADDRESS',
			name: <LocaleString strKey='enterAddress' />
		},
		{
			id: 'SEND_LINK',
			name: <LocaleString strKey='sendLink' />
		},
		{
			id: 'INITIATE_EXCHANGE',
			name: <LocaleString strKey='initiateExchange' />
		}
	];

	const [ currentStep, setCurrentStep ] = useState(0);

	const handleGoToSecondStep = (bitcoinWalletAddress) => {
		setBitcoinWalletAddress(bitcoinWalletAddress);
		setItemToStorage("bitcoinAddress", bitcoinWalletAddress);
		goToNext();
	};

	const handleGoToLastStep = () => {
		createOrder({
			walletAddress: getItemFromStorage('bitcoinAddress'),
			fromCurrency: getItemFromStorage('fromCurrency'),
			toCurrency: 'BTC',
			primaryAmount: getItemFromStorage('amount'),
			secondaryAmount: getItemFromStorage('amount'), // TODO: should this really be passed?
			exchange: getItemFromStorage('exchange')
		}).then(response => {
			console.log(response);
		});

		// setCurrencyExchangeAddress(currencyExchangeAddress);
		goToNext();
	};

	const goToNext = () => {
		if(currentStep < exchangeSteps.length - 1) {
			setCurrentStep(currentStep + 1);
		}
	}

	const renderExchangeStep = (currentStep) => {
		if (currentStep === 0) {
			return <ExchangeStepOne goToNext={handleGoToSecondStep} />;
		}
		else if (currentStep === 1) {
			return <ExchangeStepTwo goToNext={handleGoToLastStep} />;
		}
		else if (currentStep === 2) {
			return <ExchangeStepThree />;
		}

		return null;
	};

	return (
		<div className="center-all n-position mt-10vh-xs">
			<div className="container maxw-600 p-0-xs">

				<Stepper steps={exchangeSteps} currentStep={currentStep} />

				{renderExchangeStep(currentStep)}
			</div>
		</div>
	);
};
