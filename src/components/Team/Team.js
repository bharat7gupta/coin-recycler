import React from 'react';
import cx from 'classnames';

import styles from './Team.module.css';

export const Team = () => {
	return (
		<div className={cx(styles["team"], "bg")}>
			<div className="n-position center-all mt-10vh-xs">
				<div className="container">
					<h1 className="font-24 text-left f-liber font-weight-bolder">Team</h1>
					<div className="row">
						<div className="col-sm-4 text-center">
							<img src="/img/tm-1.svg" alt="" className="mb-3 img-fluid mt-5" />
							<p className="font-12 f-avenir font-weight-bold d-sm-none">
								Roshanaslam <br />
								<i className="fab fa-twitter mr-2"></i>
								<i className="fab fa-github mr-2"></i>
								<i className="fab fa-facebook-f"></i>
							</p>
						</div>
						<div className="col-sm-4 text-center">
							<img src="/img/tm-2.svg" alt="" className="mb-3 img-fluid mt-5" />
							<p className="font-12 f-avenir font-weight-bold d-sm-none">
								himanshu <br />
								<i className="fab fa-twitter mr-2"></i>
								<i className="fab fa-github mr-2"></i>
								<i className="fab fa-facebook-f"></i>
							</p>
						</div>
						<div className="col-sm-4 text-center">
							<img src="/img/tm-3.svg" alt="" className="mb-3 img-fluid mt-5" />
							<p className="font-12 f-avenir font-weight-bold d-sm-none">
								aradilla <br />
								<i className="fab fa-twitter mr-2"></i>
								<i className="fab fa-github mr-2"></i>
								<i className="fab fa-facebook-f"></i>
							</p>
						</div>
					</div>
					<div className="row d-none d-sm-flex">
						<div className="col-sm-4 text-center">
							<p className="font-12 f-avenir font-weight-bold">
								Roshanaslam <br />
								<i className="fab fa-twitter mr-2"></i>
								<i className="fab fa-github mr-2"></i>
								<i className="fab fa-facebook-f"></i>
							</p>
						</div>
						<div className="col-sm-4 text-center">
							<p className="font-12 f-avenir font-weight-bold">
								himanshu <br />
								<i className="fab fa-twitter mr-2"></i>
								<i className="fab fa-github mr-2"></i>
								<i className="fab fa-facebook-f"></i>
							</p>
						</div>
						<div className="col-sm-4 text-center">
							<p className="font-12 f-avenir font-weight-bold">
								aradilla <br />
								<i className="fab fa-twitter mr-2"></i>
								<i className="fab fa-github mr-2"></i>
								<i className="fab fa-facebook-f"></i>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
