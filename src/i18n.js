import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
    en:{
        translation:{
            "Welcome" : "Welcome"
        }
    },
    es:{
        translation:{
            "Welcome" : "Bienvenido"
        }
    },
    cat:{
        translation:{
            "Welcome" : "Benvingut"
        }
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // init with resources
        resources,
        fallbackLng: 'en',
        keySeparator: false, // we use content as keys
        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ","
        },
        react: {
            wait: true
        }
});

export default i18n;