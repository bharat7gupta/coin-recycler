import React from 'react';

import LocaleString from 'components/common/LocaleString';
import greenCloudBitcoin from 'images/green-cloud-btc.svg';

export const AboutBitcoin = () => {
	return (
		<div className="container-fluid center-all text-left n-position mt-10vh-xs">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 my-auto">
						<h2 className="font-24 f-liber font-weight-bolder">
							<LocaleString strKey='whatIsBitcoin' />
						</h2>
						<p className="font-12">
							<LocaleString strKey='bitcoinDef' />
						</p>
						<p className="font-12">
							<LocaleString strKey='coinRecyclerIntro' />
						</p>
						<div className="font-12">
							<LocaleString strKey='bitcoinMoreDef' />
						</div>
					</div>
					<div className="col-sm-6 m-auto text-center p-5">
						<img src={greenCloudBitcoin} alt="" className="img-fluid w-100 ml-auto" />
					</div>
				</div>
			</div>
		</div>
	);
};
