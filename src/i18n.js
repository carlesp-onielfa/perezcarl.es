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
            "Spanish" : "Spanish",
            "email": "me (at) perezcarl.es",
            "github": "https://github.com/carlesp-onielfa",
            "about description": 
            `Studying double degree of Maths and Computer science
            Great problem solving capability thanks to my maths background
            I can apply that knowledge to what im programming
            Special interest in algorismica, web scraping and data science
            Eager to learner and the capability to do so fast. An example of that is this page, which I developed completely self-taught in X months with no prior knowledge of React or even Javascript`,

            "education": 'Studying Maths and Computer Science at the University of Barcelona',

            "experience 3 title": 'Adjunct programming teacher',
            "experience 3 desc": 
            `Adjunct teacher of A Levels/High school (Bachillerato) in the curricular subject of computer programming.
            My job as an adjunct teacher of computer science is to solve doubts of the students in practice sessions, teach specific theory classes and sometimes prepare practices and problems for students.
            In addition, I am the co-tutor of two end of High school projects (treballs de recerca) of 7 students.`,

            "experience 2 title": 'Internship at Generalitat de Catalunya',
            "experience 2 desc": 
            `Intership at the department of Enterprise and Knowledge at the "Generalitat de Catalunya", my tasks there were based around aiding the detection of illegal turistic offerings in internet platforms such as Airbnb, Homeaway and Booking
            As part of my job there I developed:
            - Excel based algorithms to filter, clean, debug the data scraped from the platforms as well as creating statistics based on the data.
            - Spiders that were able to crawl Airbnb, Booking, Tripadvisor and Homeaway and scrape all the offerings in the region of Catalonia.
            - A management program that helps assign and keep a record of the inspections carried out by the deparment.`,

            "experience 1 title": 'Internship at Schenk Process gmbH',
            "experience 1 desc": 
            `60h of internship in the company Schenk Process gmbH, based in Darmstadt (Germany) as a warehouse assistant.
            My duty as a warehouse assistant was to prepare the orders of several companies by collecting all the necessary components, which were in various industrial units.`,



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