import React from 'react';

import greenCloud from 'images/green-cloud.svg';
import LocaleString from 'components/common/LocaleString';

export const Mission = () => {
	return (
		<div className="container-fluid center-all text-left n-position mt-10vh-xs">
			<div className="container">
				<div className="row mt-10vh-xs">
					<div className="col-sm-6 my-auto">
						<h2 className="font-24 f-liber font-weight-bolder">
							<LocaleString strKey='missionTitle' />
						</h2>
						<p className="font-12">
							<LocaleString strKey='missionLine1' />
						</p>
						<div className="font-12">
							<LocaleString strKey='missionLine2' />
						</div>
					</div>
					<div className="col-sm-6 my-auto p-5">
						<img src={greenCloud} alt="" className="img-fluid w-100" />
					</div>
				</div>
			</div>
		</div>
	);
};
