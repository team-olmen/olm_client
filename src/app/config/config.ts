export const CONFIG: any = {
	urlOlmApi: () => {
		if (/localhost/.test(document.location.host)) {
			return 'http://localhost/olmen_api';
		} else if (/client-test/.test(document.location.host)) {
			return 'http://api-test.olmen.de';
		} else {
			return 'http://api.olmen.de';
		}
	}
};
