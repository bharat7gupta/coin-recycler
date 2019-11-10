import React from 'react';
import cx from 'classnames';

import Header from '../common/Header';
import greenCloudBitcoin from '../../images/green-cloud-btc.svg';

import styles from './AboutBitcoin.module.css';

export const AboutBitcoin = () => {
	return (
		<div className={cx("bg", styles["about-2-bg"])}>
			<Header />
			<div className="container-fluid center-all text-left n-position mt-10vh-xs">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 my-auto">
							<h2 className="font-24 f-liber font-weight-bolder">
								What is Bitcoin?
							</h2>
							<p className="font-12">
								From a white paper, some mathematics and cryptography — an idea
								was born that was so powerful it ignited a revolution. Bitcoin
								is a decentralized payment network that enables fast, secure,
								trustless transactions across the globe using the underlying
								technology called the Blockchain.
							</p>
							<p className="font-12">A section for description on coinrecycler.</p>
							<div className="font-12">
								Start stacking sats. Dump your altcoins for bitcoin and
								lightning in a simple, fast and secure way without spending any
								time creating an account on exchanges. We have partnered with
								some of the largest cryptocurrency exchanges and constantly
								fetch the best available price that’s available. If you are
								living on crypto, It’s never been easier to obtain a few
								satoshis into your Lightning Wallet and pay for that coffee.
							</div>
						</div>
						<div className="col-sm-6 m-auto text-center p-5">
							<img src={greenCloudBitcoin} alt="" className="img-fluid w-100 ml-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
