export const copyToClipboard = str => {
	const el = document.createElement('textarea');
	el.value = str;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
};

export const setItemToStorage = (key, value) => {
	window.localStorage.setItem(key, value);
}

export const getItemFromStorage = (key) => {
	return window.localStorage.getItem(key);
}
