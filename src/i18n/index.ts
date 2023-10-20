import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import MX from './MX.json';

export default (): void => {
  i18n.use(initReactI18next).init({
    interpolation: { escapeValue: false },
    lng: 'MX',
    fallbackLng: 'MX',
    resources: {
      MX,
    },
  });
};
