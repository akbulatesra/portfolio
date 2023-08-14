/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import styles from '../../app/styles/Menu.module.scss';
const Menu = ({
  showMenu,
  visibleItemCount,
  setVisibleItemCount,
  scrollToAbout,
  scrollToWorks,
  scrollToSkills,
  setShowMenu,
}) => {
  const menuArr = ['aboutMeTitle', 'workTitle', 'skills'];
  const { t } = useTranslation();
  const handleRef = (item) => {
    item === 'aboutMeTitle' && scrollToAbout();
    item === 'workTitle' && scrollToWorks();
    item === 'skills' && scrollToSkills();
  };

  useEffect(() => {
    if (visibleItemCount < menuArr?.length) {
      const interval = setInterval(() => {
        setVisibleItemCount((prevCount) => prevCount + 1);
      }, 500);

      return () => clearInterval(interval);
    }
  }, [visibleItemCount, menuArr]);

  return (
    <main>
      {showMenu && (
        <ul className={styles.list}>
          {menuArr.map((item, i) => (
            <li
              key={i}
              className={i < visibleItemCount ? styles.show : styles.visible}
              onClick={() => {
                handleRef(item);
                setShowMenu(false);
              }}
            >
              {t(item)}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
export default Menu;
