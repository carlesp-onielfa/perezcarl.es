import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
    en:{
        translation:
        {
            "Welcome" : "Welcome",
            "About me" : "About me",
            "Experience": "Experience",
            "Skills": "Skills",
            "Contact" : "Contact",
            "Programming Languages" : "Programming Languages",
            "Spoken Languages": "Spoken Languages",
            "Libraries and Frameworks": "Libraries and Frameworks",
            "Programs and Tools": "Programs and Tools",
            "English" : "English",
            "German" : "German",
            "Catalan" : "Catalan",
            "Spanish" : "Spanish"

        }
    },
    es:{
        translation:{
            "Welcome" : "Bienvenido",
            "About me" : "Sobre mi",
            "Experience": "Experiencia",
            "Skills" : "Competencias",
            "Contact":"Contacto",
            "Programming Languages" : "Lenguajes de Programación",
            "Spoken Languages": "Idiomas",
            "Libraries and Frameworks": "Librerías y Frameworks",
            "Programs and Tools": "Programas y Herramientas",
            "English" : "Inglés",
            "German" : "Alemán",
            "Catalan" : "Catalán",
            "Spanish" : "Español",
            "Native" : "Nativo"
        }
    },
    cat:{
        translation:{
            "Welcome" : "Benvingut",
            "About me" : "Sobre mi",
            "Experience": "Experiència",
            "Skills": "Competències",
            "Contact" : "Contacte",
            "Programming Languages" : "Llenguatges de Programació",
            "Spoken Languages": "Idiomes",
            "Libraries and Frameworks": "Llibreríes i Frameworks",
            "Programs and Tools": "Programes i Eines",
            "English" : "Anglès",
            "German" : "Alemany",
            "Catalan" : "Català",
            "Spanish" : "Espanyol",
            "Native" : "Natiu",
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