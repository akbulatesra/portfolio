/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'react-i18next';
import styles from '../../app/styles/Works.module.scss';
import Image from 'next/image';
import Link from 'next/link';
const Works = ({ worksRef }) => {
  const { t } = useTranslation();
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
        <Link
          href="https://klinikya.com/"
          target="_blank"
          className={styles.box}
        >
          <p className={styles.title}>{t('klinikya')}</p>
          <img src="/icons/circle.svg" alt="circle" className={styles.circle} />
        </Link>
        <Link
          href="https://unboxed-capstone-project.netlify.app/"
          target="_blank"
          className={styles.box}
        >
          <p className={styles.title}>{t('recoded')}</p>
          <img src="/icons/circle.svg" alt="circle" className={styles.circle} />
        </Link>
        <Link
          href="https://mystarwarsuniverse.vercel.app/"
          target="_blank"
          className={styles.box}
        >
          <p className={styles.title}>{t('patika')}</p>
          <img src="/icons/circle.svg" alt="circle" className={styles.circle} />
        </Link>
      </section>
    </main>
  );
};
export default Works;
