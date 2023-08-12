import { useTranslation } from 'react-i18next';
import styles from '../../app/styles/Main.module.scss';
import Image from 'next/image';

const Main = () => {
  const { t } = useTranslation();
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>{t('mainText')}</h1>
      <Image
        src="/icons/blob.svg"
        alt="blob"
        width={600}
        height={600}
        className={styles.blob}
      />
    </main>
  );
};
export default Main;
