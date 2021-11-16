import { useTranslation as useI18nTranslation } from 'react-i18next';
import translationConfig from '../domain/i18n/translationConfig.type';

type Type = () => translationConfig;

const useTranslation: Type = () => {
    const { t} = useI18nTranslation();
    return { t};
}

export default useTranslation;