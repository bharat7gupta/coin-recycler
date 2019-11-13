import React from 'react';

import greenCloudSupport from 'images/green-cloud-support.svg';
import LocaleString from 'components/common/LocaleString';

export const FAQAndSupport = () => {
	return (
		<div className="n-position mt-10vh-xs center-all">
			<div className="container text-left">
				<h1 className="font-24 f-liber font-weight-bolder text-left">
					<LocaleString strKey='faqAndSupport' />
				</h1>
				<div className="row mt-10vh-xs">
					<div className="col-sm-5 my-auto">
						<img src={greenCloudSupport} alt="" className="img-fluid w-100" />
					</div>
					<div className="col-sm-6 my-auto p-5 f-avenir font-weight-bold">
						<h5 className="font-16 p-color mb-3">
							<LocaleString strKey='aboutCoinRecyclerTitle' />
						</h5>
						<p className="font-16 f-avenir font-weight-bold">
							<LocaleString strKey='whatIsCoinRecycler' />
						</p>

						<p className="font-16 f-avenir font-weight-bold">
							<LocaleString strKey='coinRecyclerSteps' />
						</p>

						<p className="font-16 f-avenir font-weight-bold">
							<LocaleString strKey='whyTrustYou' />
						</p>

						<p className="font-16 f-avenir font-weight-bold">
							<LocaleString strKey='buyCryptoCurrency' />
						</p>

						<p className="font-16 f-avenir font-weight-bold">
							<LocaleString strKey='whyCoinRecyclerIsPopular' />
						</p>

						<p className="font-16 f-avenir font-weight-bold">
							<LocaleString strKey='canRatesChange' />
						</p>

						<p className="font-16 f-avenir font-weight-bold">
							<LocaleString strKey='transactionFees' />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
