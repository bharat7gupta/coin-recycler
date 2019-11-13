const fs = require('fs');
const request = require('request');

const strings = require('../src/config/strings-en-US.json');
const supportedLanguages = require('../src/config/supported-languages.json');

const authRequest = {
	uri: 'https://crtranslator.cognitiveservices.azure.com/sts/v1.0/issuetoken',
	method: 'POST',
	headers: {
		'Ocp-Apim-Subscription-Key': 'f7875b35ca2b4dceb60f85c6e76efcdc'
	}
};

const keys = Object.keys(strings);
const values = Object.values(strings);
const requestBody = values.map(val => ({ Text: val }));
const translationSaveDir = 'src/config/';

request(authRequest, (e, r, body) => {
	const authToken = body;
	const stringifiedSource = JSON.stringify(requestBody);

	console.log(supportedLanguages
		.filter((language, index) => index !== 0));

	supportedLanguages
		.filter((language, index) => index !== 0)
		.map(language => {
			console.log(`*** Translating to: ${language.code} ***`);

			const translateRequest = {
				url: `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en-US&to=${language.code}`,
				method: 'POST',
				headers: {
					'Authorization': 'Bearer ' + authToken,
					'Content-Type': 'application/json',
				},
				body: stringifiedSource
			};

			request(translateRequest, (e, r, bodyWithTranslation) => {
				const translationResponse = JSON.parse(bodyWithTranslation);
				const translationArray = translationResponse.map(t => t.translations[0].text);

				let translation = {};

				keys.reduce((translation, key, currentIndex) => {
					translation[key] = translationArray[currentIndex];
					return translation;
				}, translation);

				fs.writeFile(
					translationSaveDir + `strings-${language.code}.json`, 
					JSON.stringify(translation, null, 4),
					'utf8', 
					function (err) {
						if (err) {
							console.log("An error occured while writing JSON Object to File.");
							return console.log(err);
						}

						console.log(`JSON file has been saved for language: ${language.name} (${language.code})`);
					});
			});
		});
});
