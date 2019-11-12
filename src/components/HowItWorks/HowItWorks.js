import React from 'react';

import rocketIcon from 'images/rocket-icon.svg';
import exchangeIcon from 'images/exchange-icon.svg';
import bitcoinIcon from 'images/bitcoin-icon.svg';

export const HowItWorks = () => {
	return (
		<div class="center-all n-position mt-10vh-xs">
			<div class="container">
				<h1 class="font-24 f-liber font-weight-bolder text-left">
					How it works
				</h1>
				<div class="row">
					<div class="col-sm-4 text-center">
						<img src={rocketIcon} alt="" class="mb-3 img-fluid mt-5" />
						<p class="font-12 d-sm-none">
							Exchange 500+ altcoins without creating
						</p>
					</div>
					<div class="col-sm-4 text-center">
						<img src={exchangeIcon} alt="" class="mb-3 img-fluid mt-5" />
						<p class="font-12 d-sm-none">
							Exchange 500+ altcoins without creating
						</p>
					</div>
					<div class="col-sm-4 text-center">
						<img src={bitcoinIcon} alt="" class="mb-3 img-fluid mt-5" />
						<p class="font-12 d-sm-none">
							Exchange 500+ altcoins without creating
						</p>
					</div>
				</div>
				<div class="row d-none d-sm-flex">
					<div class="col-sm-4 text-center">
						<p class="font-12">Exchange 500+ altcoins without creating</p>
					</div>
					<div class="col-sm-4 text-center">
						<p class="font-12">Exchange 500+ altcoins without creating</p>
					</div>
					<div class="col-sm-4 text-center">
						<p class="font-12">Exchange 500+ altcoins without creating</p>
					</div>
				</div>
			</div>
		</div>
	);
};
