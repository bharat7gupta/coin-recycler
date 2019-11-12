import React from 'react';

import greenCloudSupport from 'images/green-cloud-support.svg';

export const FAQAndSupport = () => {
	return (
		<div className="n-position mt-10vh-xs center-all">
			<div className="container text-left">
				<h1 className="font-24 f-liber font-weight-bolder text-left">
					FAQ &amp; Support
				</h1>
				<div className="row mt-10vh-xs">
					<div className="col-sm-5 my-auto">
						<img src={greenCloudSupport} alt="" className="img-fluid w-100" />
					</div>
					<div className="col-sm-6 my-auto p-5 f-avenir font-weight-bold">
						<h5 className="font-16 p-color mb-3">
							About CoinSwitch
						</h5>
						<p className="font-16 f-avenir font-weight-bold">
							What is CoinSwitch?
						</p>

						<p className="font-16 f-avenir font-weight-bold">
							How to do cryptocurrency trading on CoinSwitch?
						</p>

						<p className="font-16 f-avenir font-weight-bold">
							Why should I trust you?
						</p>

						<p className="font-16 f-avenir font-weight-bold">
							How to buy cryptocurrency with credit card or fiat money on
							CoinSwitch?
						</p>

						<p className="font-16 f-avenir font-weight-bold">
							What makes CoinSwitch the largest cryptocurrency exchange?
						</p>

						<p className="font-16 f-avenir font-weight-bold">
							Can the rates change during the transaction?
						</p>

						<p className="font-16 f-avenir font-weight-bold">
							What is our transaction fees?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
