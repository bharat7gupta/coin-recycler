import React from 'react';
import cx from 'classnames';

import styles from './Dropdown.module.css';

export const Dropdown = ({
	list,
	selectedValue,
	containerClass,
	caretClass,
	idField,
	valueField,
	title,
	onChange,
	direction = 'ltr'
}) => {

	const onSelectionChange = (e) => {
		onChange && onChange(e.target.value);
	}

	if(!list || list.length === 0) {
		return null;
	}

	return (
		<div className={styles["dropdown"]} title={title}>
			<select value={selectedValue} className={containerClass} onChange={onSelectionChange} dir={direction}>
				{list.map(item => (
					<option key={item[idField]} value={item[idField]}>{item[valueField]}</option>
				))}
			</select>

			<i className={cx("fa fa-caret-down", styles['caret'], caretClass)}></i>
		</div>
	)
};
