import { useTranslation } from 'react-i18next';
import styles from '../../app/styles/About.module.scss';
const About = ({ aboutRef }) => {
  const { t } = useTranslation();
  return (
    <main className={styles.wrapper} ref={aboutRef}>
      <h2 className={styles.title}>{t('aboutMeTitle')}</h2>
      <h4>{t('aboutMeText1')}</h4>
      <h4>{t('aboutMeText2')}</h4>
    </main>
  );
};
export default About;
