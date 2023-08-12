import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      contact: 'contact me!',
      mainText: `I'm Esra! \nLet's Breathe Life Into Your Codes!`,
      aboutMeTitle: 'Who am I?',
      aboutMeText1:
        "  Hi there! I'm Esra, a frontend developer with a background in nutrition and dietetics. I am currently working at Klinikya as a frontend developer. I am creating a website for Klinikya Application, Klinikya Admin Users and BlueJay Consulting.",
      aboutMeText2:
        'As of January 2022, I started my journey to become a Frontend Web Developer. While making this decision, I wanted to evaluate my strengths and weaknesses and direct my career in an area that I saw fit for me. I always enjoyed being a part of team and try to take responsibility. Now as a frontend developer I feel I have what I need. As a first step of this career journey I was learn by myself with reading documentations and reading other peoples codes. After that I enrolled Patika & Iyzico Frontend Practicum. With this course I communicated with other developers and revize my codes. During this bootcamp I joined Re:Coded Frontend Web Development Bootcamp. With this bootcamp I learned technical skills that I need in this industry and also worked projectsas a group member.\n\n My main goal is to have command of the technologies in my field and after this, to gain new knowledge in the side areas that will support my work.',
      workTitle: 'What I do?',
      recoded: 'Online Therapist App',
      patika: 'Star Wars Starships App',
      notes: 'Notes App',
      klinikya: 'Klinikya Web Application',
      skills: 'My Technical Competencies',
    },
  },
  tr: {
    translation: {
      contact: 'benimle iletişime geç!',
      recoded: 'Online Terapist Uygulaması',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
