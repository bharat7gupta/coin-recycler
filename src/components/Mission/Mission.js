import React from 'react';
import cx from 'classnames';

import greenCloud from '../../images/green-cloud.svg';

import styles from "./Mission.module.css";

export const Mission = () => {
	return (
		<div className={cx("bg", styles['mission'])}>
			<div className="container-fluid center-all text-left n-position mt-10vh-xs">
				<div className="container">
					<div className="row mt-10vh-xs">
						<div className="col-sm-6 my-auto">
							<h2 className="font-24 f-liber font-weight-bolder">Mission</h2>
							<p className="font-12">
								The cryptocurrency industry is the most revolutionary creation
								of this generation. However, this market is flooded with many
								tokens that aim to do promising things but fail. You might hold
								bags of such tokens and can’t really trade. We have enabled a
								platform where you can recycle all these altcoin bags for
								bitcoin, the truly proven cryptocurrency today that has been the
								longest in the space and has only gotten stronger. Bitcoin
								coupled with Lightning Network provides an applicable solution
								to the long-lasting debate of scaling.
							</p>
							<div className="font-12">
								We do not incline ourselves towards any sort of crypto
								maximalism. The crypto space is huge with multiple blockchains
								providing specific use-cases that aim to influence the way we
								interact in our daily lives. Ethereum is another revolutionary
								crypto technology that will change the way software is made and
								used, but we will list it as a base pair once the largest DAPP
								on it is NOT cryptokitties.
							</div>
						</div>
						<div className="col-sm-6 my-auto p-5">
							<img src={greenCloud} alt="" className="img-fluid w-100" />
						</div>
					</div>
				</div>
			</div>
		</div>	
	);
};
