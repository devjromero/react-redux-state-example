import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import langResources from '../../resources/lang/resources';

const i18nConfig = () => {
    i18next
        .use(initReactI18next)
        .init({
            resources: langResources,
            lng: 'es',
            fallbackLng: 'es',
            interpolation: {
                escapeValue: false
            }
        });
}

export default i18nConfig;

export const translator = i18next.t;