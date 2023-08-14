/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'react-i18next';
import styles from '../../app/styles/Works.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
const Works = ({ worksRef }) => {
  const { t } = useTranslation();
  const [list, setList] = useState('');
  const [visibleItemCount, setVisibleItemCount] = useState(0);
  const klinikya = [
    'Klinikya Landing Page',
    'Website for Klinikya Web Application',
    'Microsoft Cognitive Search integration for search',
    'Hub Connection integration for users chat',
    'Twilio integration for online video appointments',
    'Moka integration for paying system',
  ];
  const recoded = [
    'Website for patients and therapist that allows to contact each other.',
    'Patient can create a profile, adding credit card, buy tickets and with them book an appointment from therapist.',
    'Also therapist can create a profile.',
    'React for creating project',
    'Firebase integrated to store users information',
    'i18n integration was made to serve in different languages',
    'Added google and facebook accounts option to login Redux toolkit for state management',
    'Tailwind for styling',
    'Prettier and Eslint for clean code',
    'This was a group project and I worked sign up, add card and buy tickets page. I integrate firebase and i18n to project.',
  ];
  const starwars = [
    'Website for listing and searching among starship and read details of a specific starship from Star Wars Movie.',
    'React and Vite for creating project',
    'Swapi Api for datas',
    'Axios for fetching datas to project',
    'Use Sound for adding sound to website',
    'Pure Css for styling',
    'Font Awesome for different fonts',
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleItemCount((prevCount) => prevCount + 1);
    }, 500);

    return () => clearInterval(interval);
  }, [visibleItemCount, list]);
  console.log(visibleItemCount);
  return (
    <main className={styles.wrapper} ref={worksRef}>
      <Image
        src="/icons/blob.svg"
        alt="blob"
        width={600}
        height={600}
        className={styles.blob}
      />
      <h2 className={styles.titleText}>{t('workTitle')}</h2>
      <section className={styles.boxes}>
        <div>
          <Link
            href="https://klinikya.com/"
            target="_blank"
            className={styles.box}
            onMouseEnter={() => setList('klinikya')}
            onMouseLeave={() => {
              setList('');
              setVisibleItemCount(0);
            }}
          >
            <p className={styles.title}>{t('klinikya')}</p>
            <img
              src="/icons/circle.svg"
              alt="circle"
              className={styles.circle}
            />
          </Link>
          {list === 'klinikya' && (
            <ul className={styles.list}>
              {klinikya.map((item, number) => (
                <li
                  key={number}
                  className={
                    number < visibleItemCount ? styles.show : styles.visible
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <Link
            href="https://unboxed-capstone-project.netlify.app/"
            target="_blank"
            className={styles.box}
            onMouseEnter={() => setList('recoded')}
            onMouseLeave={() => {
              setList('');
              setVisibleItemCount(0);
            }}
          >
            <p className={styles.title}>{t('recoded')}</p>
            <img
              src="/icons/circle.svg"
              alt="circle"
              className={styles.circle}
            />
          </Link>
          {list === 'recoded' && (
            <ul className={styles.list}>
              {recoded.map((item, number) => (
                <li
                  key={number}
                  className={
                    number < visibleItemCount ? styles.show : styles.visible
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <Link
            href="https://mystarwarsuniverse.vercel.app/"
            target="_blank"
            className={styles.box}
            onMouseEnter={() => setList('starwars')}
            onMouseLeave={() => {
              setList('');
              setVisibleItemCount(0);
            }}
          >
            <p className={styles.title}>{t('patika')}</p>
            <img
              src="/icons/circle.svg"
              alt="circle"
              className={styles.circle}
            />
          </Link>
          {list === 'starwars' && (
            <ul className={styles.list}>
              {starwars.map((item, number) => (
                <li
                  key={number}
                  className={
                    number < visibleItemCount ? styles.show : styles.visible
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
};
export default Works;
