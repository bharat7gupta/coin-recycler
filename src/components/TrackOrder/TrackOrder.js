import React from 'react';
import cx from 'classnames';

import styles from './TrackOrder.module.css';
import LocaleString from 'components/common/LocaleString';

export const TrackOrder = () => {
	return (
		<div className="center-all n-position mt-10vh-xs">
			<div className="container">
				<div className={cx(styles["track-order-wrapper"], "input-group mb-3 m-auto")}>
					<input
						type="text"
						className={
							cx(
								styles["rounded-bg-grey"], 
								styles["track-order-input"], 
								"form-control f-liber font-weight-bolder"
							)
						}
						placeholder="1Bpvb85nX4wGXiRDiKAHXENtNtzDE9WWyP"
					/>
					<div className="input-group-append">
						<span className={cx(styles["input-group-text"], "f-liber font-weight-bolder")}>
							<LocaleString strKey='trackOrderButton' />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
