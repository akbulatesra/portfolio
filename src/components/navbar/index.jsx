'use client';

import Image from 'next/image';
import styles from '../../app/styles/Navbar.module.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '../menu';

const Navbar = ({ scrollToAbout, scrollToWorks, scrollToSkills }) => {
  const [lang, setLang] = useState('en');
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [visibleItemCount, setVisibleItemCount] = useState(0);

  return (
    <nav className={styles.navbar}>
      <section className={styles.navbarInside}>
        <section className={styles.dot}>
          <Image
            src="/icons/circle-solid.svg"
            alt="circle"
            width={15}
            height={15}
          />
          <Image
            src="/icons/circle-solid.svg"
            alt="circle"
            width={15}
            height={15}
          />
        </section>
        <section className={styles.wrapperRight}>
          <h4 onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}>
            {lang === 'en' ? 'TR' : 'EN'}
          </h4>
          <div className={styles.contact}>
            <h4>{t('contact')}</h4>
            <Image
              src="/icons/arrow-up-solid.svg"
              alt="arrow"
              width={15}
              height={15}
            />
          </div>
          <Image
            src="/icons/bars-solid.svg"
            alt="menu"
            width={15}
            height={15}
            className={styles.menu}
            onClick={() => {
              setVisibleItemCount(0);
              setShowMenu(!showMenu);
            }}
          />
        </section>
      </section>

      <Menu
        showMenu={showMenu}
        setVisibleItemCount={setVisibleItemCount}
        visibleItemCount={visibleItemCount}
        scrollToAbout={scrollToAbout}
        scrollToWorks={scrollToWorks}
        scrollToSkills={scrollToSkills}
      />
    </nav>
  );
};
export default Navbar;
