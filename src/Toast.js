import toast from 'cogo-toast';
import { getLocaleString } from 'components/common/LocaleString/LocaleString';

const showToast = (toastFn, strKey) => {
	getLocaleString(strKey)
		.then(text => {
			toastFn(text, { position: 'bottom-center' });
		});
}

export const showErrorToast = (strKey) => {
	showToast(toast.error, strKey);
};

export const showInfoToast = (strKey) => {
	showToast(toast.info, strKey);
};
