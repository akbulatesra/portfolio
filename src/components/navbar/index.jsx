'use client';

import Image from 'next/image';
import styles from '../../app/styles/Navbar.module.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '../menu';
import Link from 'next/link';

const Navbar = ({
  scrollToAbout,
  scrollToWorks,
  scrollToSkills,
  scrollToContact,
}) => {
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
          <div className={styles.contact}>
            <p onClick={scrollToContact}>{t('contact')}</p>
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
            role="button"
            tabIndex={0}
            aria-label="Show Navbar Items"
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
        setShowMenu={setShowMenu}
      />
    </nav>
  );
};
export default Navbar;
