import React, { useState, useContext } from 'react';

import UserContext from 'UserContext';

export const LocaleString = ({ strKey, attributes, className }) => {
	const [ text, setText ] = useState('');
	const context = useContext(UserContext);

	if (typeof strKey === 'undefined' || !strKey) {
		return null;
	}

	const languageCode = context.data.currentLanguage;

	import('config/strings-' + languageCode + '.json')
		.then(strings => {
			const str = strings[strKey] || '';
			const children = TEMPLATE_PATTERN.test(str) ? interpolateString(str, attributes) : str;
			setText(children);
		});

	return className ? <span className={className}>{text}</span> : text;
};

export const getLocaleString = (strKey) => {
	// temporary hack. need to see what can be done to not read from localStorage but from context
	const languageCode = window.localStorage.getItem("currentLanguage");

	return new Promise(resolve => {
		import('config/strings-' + languageCode + '.json')
			.then(strings => resolve(strings[strKey]));
	})
};

const TEMPLATE_PATTERN = /{@\S+?}/g;
const REPLACE_PATTERN = /{@(\S+)}/;

export function interpolateString(str, attributes, props) {
	const splitString = str.split(TEMPLATE_PATTERN);
	const templates = str.match(TEMPLATE_PATTERN) || [];

	const stack = [splitString[0]];
	const splitLength = splitString.length;
	for (let idx = 1; idx < splitLength; idx++) {
		const str = splitString[idx];
		const templateName = templates[idx - 1] ? templates[idx - 1].replace(REPLACE_PATTERN, '$1') : null;
		let templateValue = attributes && attributes[templateName];

		// Normalize value if input is falsy value except 0
		if (!templateValue && templateValue !== 0) {
			templateValue = '';
		}
		
		if (React.isValidElement(templateValue)) {
			stack.push(templateValue);
			stack.push(str);
		} else {
			if (typeof templateValue === 'object') {
				templateValue = '';
			}

			const arrIdx = stack.length - 1;
			stack[arrIdx] = `${stack[arrIdx]}${templateValue}${str}`;
		}
	}

	if (stack.length > 1) {
		let key = 0;
		const stackLength = stack.length;
		for (let idx = 0; idx < stackLength; idx++) {
			const elem = stack[idx];
			if (React.isValidElement(elem)) {
				const newElem = React.cloneElement(elem, { key: key++ });
				stack[idx] = newElem;
			}
		}
	}

	return Array.isArray(stack) ? stack[0] : stack;
}