import React, { useState } from 'react';
import supportedLanguages from '../../../config/supported-languages.json';

export const LocaleString = ({ strKey, className, contentStyle }) => {
	const [ text, setText ] = useState('');

	if (typeof strKey === 'undefined' || !strKey) {
		return null;
	}

	const languageCode = 'en-US';
	// const languageCode = window.localStorage.getItem("currentLanguage") || supportedLanguages[0].code;

	import('../../../config/strings-' + languageCode + '.json')
			.then(strings => {
				setText(strings[strKey]);
			});

	return (
		<span className={className} style={contentStyle}>
			{text}
		</span>
	);;
};
