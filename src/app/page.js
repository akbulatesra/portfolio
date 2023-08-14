'use client';

import styles from './page.module.scss';
import Navbar from '@/components/navbar';
import '../i18n';
import Main from '@/components/main';
import About from '@/components/about';
import Works from '@/components/works';
import Skills from '@/components/skills';
import { useRef } from 'react';
import Contact from '@/components/contact';

export default function Home() {
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className={`${styles.wrapper}  ${styles.container}`}>
      <Navbar
        scrollToAbout={() => scrollToRef(aboutRef)}
        scrollToWorks={() => scrollToRef(worksRef)}
        scrollToSkills={() => scrollToRef(skillsRef)}
        scrollToContact={() => scrollToRef(contactRef)}
      />
      <Main />
      <About aboutRef={aboutRef} />
      <Works worksRef={worksRef} />
      <Skills skillsRef={skillsRef} />
      <Contact contactRef={contactRef} />
    </main>
  );
}
