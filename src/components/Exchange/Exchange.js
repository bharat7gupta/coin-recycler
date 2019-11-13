import React, { useState } from 'react';

import Stepper from 'components/common/Stepper';
import ExchangeStepOne from './ExchangeStepOne';
import ExchangeStepTwo from './ExchangeStepTwo';
import ExchangeStepThree from './ExchangeStepThree';
import LocaleString from 'components/common/LocaleString';

export const Exchange = () => {

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

	const handleGoToNext = () => {
		if(currentStep < exchangeSteps.length - 1) {
			setCurrentStep(currentStep + 1);
		}
	};

	const renderExchangeStep = (currentStep) => {
		if (currentStep === 0) {
			return <ExchangeStepOne goToNext={handleGoToNext} />;
		}
		else if (currentStep === 1) {
			return <ExchangeStepTwo goToNext={handleGoToNext} />;
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
