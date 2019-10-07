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
            "email": "me@perezcarl.es",
            "github": "https://github.com/carlesp-onielfa",
            "artstation": "https://www.artstation.com/sirope",
            "about description": 
            `Welcome to my personal website.
            I define myself as a great problem solver, I'm always eager to learn and I am able to do so swiftly.
            My areas of interest include web scraping, AI, algorithms as well as music production and digital art creation`,

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
            - Spiders (programs that extract data from the web) that were able to crawl Airbnb, Booking, Tripadvisor and Homeaway and scrape all the offerings in the region of Catalonia.
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
            "Native" : "Nativo",
            "about description": 
            `Bienvenido/a a mi web.
            Me defino como un buen solucionador de problemas, siempre estoy dispuesto a aprender y soy capaz de hacerlo rápidamente.
            Mis áreas de interés incluyen inteligencia artificial, algorítmica y scraping web así como la producción musical y la creación de arte digital.`,

            "education": 'Estudiante de Matemáticas e Ingenieria Informática en la Universidad de Barcelona',

            "experience 3 title": 'Profesor adjunto de programación',
            "experience 3 desc": 
            `Profesor adjunto de Bachillerato en la asignatura de Informática de programación.
            Mi trabajo como profesor adjunto es resolver dudas de los alumnos en sesiones de pràcticas, impartir clases de teoria puntuales y preparar prácticas y ejercicios para los alumnos.
            Además, soy co-tutor de dos trabajos de recerca de un total de 7 alumnos,`,

            "experience 2 title": 'Prácticas en la Generalitat de Catalunya',
            "experience 2 desc": 
            `Prácticas en el Departamento de Empresa y Conocimiento en la Generalitat de Catalunya, mi trabajo en el departamento consistía en ayudar con la detección de oferta turística ilegal en plataformas de internet como Airbnb, Homeaway y Booking.
            Como parte de mi trabajo desarrollé:
            · Algoritmos para filtrar, limpiar y depurar los datos extraídos de las plataformas, así como crear estadísticas basadas en los datos extraídos.
            · Programas capaces de navegar de Airbnb, Booking, Tripadvisor y extraer todas las ofertas de alojamiento en Cataluña.
            · Un programa de gestión que tiene como función asignar inspectores a las inspecciones a realizar y mantener un registro de las inspecciones realizadas`,

            "experience 1 title": 'Prácticas en Schenk Process gmbH',
            "experience 1 desc": 
            `60h de prácticas en la compañía Schenk Process gmbH, establecida en Darmstadt (Alemania) como asistente de almacén.
            Mis tareas como asistente de almacén consistían en preparar los pedidos de las compañías asegurándome de que figuraban todos los componentes.`,
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
            "about description": 
            `Benvingut/da a la meva web.
            Em defineixo com un bon solucionador de problemes, sempre estic disposat a aprendre i soc capaç de fer-ho ràpidament.
            Les meves àrees de interès inclouen la intel·ligència artificial, l'algorísmica i l'scraping web així com la producció musical i la creació d'art digital.`,

            "education": 'Estudiant de Matemàtiques i Enginyeria Informàtica a la Universitat de Barcelona',

            "experience 3 title": 'Professor adjunt de programació',
            "experience 3 desc": 
            `Professor adjunt de Batxillerat a l'assignatura d'Informàtica de programació.
            La meva feina com a professor adjunt és resoldre dubtes dels alumnes en sessions de practiques, impartir classes de teoria puntuals i preparar practiques y exercicis pels alumnes.
            A més, sóc cotutor de dos treballs de recerca d’un total de 7 alumnes.`,

            "experience 2 title": 'Prácticas en la Generalitat de Catalunya',
            "experience 2 desc": 
            `Prácticas en el Departamento de Empresa y Conocimiento en la Generalitat de Catalunya, mi trabajo en el departamento consistía en ayudar con la detección de oferta turística ilegal en plataformas de internet como Airbnb, Homeaway y Booking.
            Como parte de mi trabajo desarrollé:
            · Algoritmos para filtrar, limpiar y depurar los datos extraídos de las plataformas, así como crear estadísticas basadas en los datos extraídos.
            · Programas capaces de navegar de Airbnb, Booking, Tripadvisor y extraer todas las ofertas de alojamiento en Cataluña.
            · Un programa de gestión que tiene como función asignar inspectores a las inspecciones a realizar y mantener un registro de las inspecciones realizadas`,

            "experience 1 title": 'Prácticas en Schenk Process gmbH',
            "experience 1 desc": 
            `60h de prácticas en la compañía Schenk Process gmbH, establecida en Darmstadt (Alemania) como asistente de almacén.
            Mis tareas como asistente de almacén consistían en preparar los pedidos de las compañías asegurándome de que figuraban todos los componentes.`,
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