import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import data_en from '../../Assets/Translation/en/en.json';
import data_vn from '../../Assets/Translation/vn/vn.json';

const resources = {
	en: data_en.en,
	vn: data_vn.vn
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: 'vn'
	});

export default i18n;
