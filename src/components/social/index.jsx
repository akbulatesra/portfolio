import Image from 'next/image';
import Link from 'next/link';
import styles from '../../app/styles/Social.module.scss';
import { useTranslation } from 'react-i18next';
const Social = () => {
  const { t } = useTranslation();
  return (
    <main className={styles.wrapper}>
      <section className={styles.social}>
        <Link
          href="https://github.com/akbulatesra"
          target="_blank"
          aria-label="Navigate to Github"
        >
          <Image
            src={'/icons/github.svg'}
            height={60}
            width={60}
            alt="github"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/esra-akbulat/"
          target="_blank"
          aria-label="Navigate to Linkedin"
        >
          <Image
            src={'/icons/icons8-linkedin-circled.svg'}
            height={60}
            width={60}
            alt="linkedin"
          />
        </Link>{' '}
        <Link
          href="https://medium.com/@a.esra.akbulat"
          target="_blank"
          aria-label="Navigate to Medium"
        >
          <Image
            src={'/icons/icons8-medium.svg'}
            height={60}
            width={60}
            alt="medium"
          />
        </Link>
      </section>
    </main>
  );
};
export default Social;
