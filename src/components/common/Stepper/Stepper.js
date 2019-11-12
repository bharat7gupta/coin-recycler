import React from 'react';
import cx from 'classnames';

import progressDotFill from 'images/progress-dot-fill.svg';
import progressDotEmpty from 'images/progress-dot-empty.svg';

import styles from './Stepper.module.css';

export const Stepper = ({ steps, currentStep }) => {
	if (!steps || steps.length === 0) {
		return null;
	}

	return (
		<div className={cx(styles["progress-div"], "row font-10 mx-auto")}>
			{
				steps.map((step, index) => (
					<div className="col-4 row m-0 p-0">
						<div className="col-7 p-0">
							<img
								className="mr-2"
								src={index <= currentStep ? progressDotFill : progressDotEmpty}
								alt=""
							/>
							<p
								className={
									cx(
										"d-inline-block",
										styles["break-text-sm"],
										{
											[styles["highlight-color"]]: index <= currentStep
										}
									)
								}>
									{step.name}
							</p>
						</div>

						{index !== steps.length - 1 && (
							<div className="col-5 p-0">
								<div className={cx(styles["progress-line-empty"], "w-100 d-inline-block")}></div>
							</div>
						)}
					</div>
				))
			}
		</div>
	)
};
