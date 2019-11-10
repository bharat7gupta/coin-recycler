import exchanges from './mockData/exchanges.json';

export const getAllExchanges = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(exchanges);
		})
	});
}
