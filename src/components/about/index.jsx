import { useTranslation } from 'react-i18next';
import styles from '../../app/styles/About.module.scss';
const About = ({ aboutRef }) => {
  const { t } = useTranslation();
  return (
    <main className={styles.wrapper} ref={aboutRef}>
      <h2 className={styles.title}>{t('aboutMeTitle')}</h2>
      <section className={styles.textWrapper}>
        <p>{t('aboutMeText1')}</p>
        <p>{t('aboutMeText2')}</p>
      </section>
    </main>
  );
};
export default About;
