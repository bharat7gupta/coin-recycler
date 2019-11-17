import { simpleErrorToast } from "Toast";

const apiRoot = 'https://api.coinrecycler.io/dev';

export const getAllTokens = () => {
	return fetch(`${apiRoot}/tokens`)
		.then(response => response.json());
}

export const getAllExchanges = (primaryCurrency, amount) => {
	const requestBody = {
		priCurr: primaryCurrency,
		secCurr: 'BTC',
		amount: amount.toString()
	};

	return sendPostRequest('/recycle/get/price', requestBody);
}

export const createOrder = (params) => {
	const requestBody = {
		wAddress: params.walletAddress,
		priCurr: params.fromCurrency,
		secCurr: params.toCurrency,
		priAmount: params.primaryAmount,
		secAmount: params.secondaryAmount,
		exchange: params.exchange
	};

	return sendPostRequest('/recycle/order/create', requestBody);
};

const sendPostRequest = (url, requestBody) => {
	return fetch(`${apiRoot}${url}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestBody)
	})
	.then(response => {
		if (response.ok) {
			return response.json().then(data => {
				errorHandler(data);
				return data;
			});
		} else {
			return Promise.reject({error: true});
		}
	})
	.catch(errorHandler);
};

const errorHandler = (response) => {
	if (response.error) {
		simpleErrorToast(response.message || 'Something went wrong. Please try again!');
	}
};
