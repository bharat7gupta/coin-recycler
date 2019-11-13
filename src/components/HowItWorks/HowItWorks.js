import React from 'react';

import rocketIcon from 'images/rocket-icon.svg';
import exchangeIcon from 'images/exchange-icon.svg';
import bitcoinIcon from 'images/bitcoin-icon.svg';
import LocaleString from 'components/common/LocaleString';

export const HowItWorks = () => {
	return (
		<div class="center-all n-position mt-10vh-xs">
			<div class="container">
				<h1 class="font-24 f-liber font-weight-bolder text-left">
					<LocaleString strKey='howItWorks' />
				</h1>
				<div class="row">
					<div class="col-sm-4 text-center">
						<img src={rocketIcon} alt="" class="mb-3 img-fluid mt-5" />
						<p class="font-12 d-sm-none">
							<LocaleString strKey='howItWorksStep1' />
						</p>
					</div>
					<div class="col-sm-4 text-center">
						<img src={exchangeIcon} alt="" class="mb-3 img-fluid mt-5" />
						<p class="font-12 d-sm-none">
							<LocaleString strKey='howItWorksStep2' />
						</p>
					</div>
					<div class="col-sm-4 text-center">
						<img src={bitcoinIcon} alt="" class="mb-3 img-fluid mt-5" />
						<p class="font-12 d-sm-none">
							<LocaleString strKey='howItWorksStep3' />
						</p>
					</div>
				</div>
				<div class="row d-none d-sm-flex">
					<div class="col-sm-4 text-center">
						<p class="font-12">
							<LocaleString strKey='howItWorksStep1' />
						</p>
					</div>
					<div class="col-sm-4 text-center">
						<p class="font-12">
							<LocaleString strKey='howItWorksStep2' />
						</p>
					</div>
					<div class="col-sm-4 text-center">
						<p class="font-12">
							<LocaleString strKey='howItWorksStep3' />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
