/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'react-i18next';
import styles from '../../app/styles/Skills.module.scss';
import { useState, useEffect } from 'react';
const Skills = ({ skillsRef }) => {
  const { t } = useTranslation();
  const [showList, setShowList] = useState();
  const skills = [
    {
      key: 'Software',
      value: [
        'Javascript',
        'React',
        'Redux',
        'Redux Toolkit',
        'TypeScript',
        'HTML5',
      ],
    },
    {
      key: 'Style',
      value: ['Tailwind', 'Styled\nComponent', ' SASS', 'CSS3', 'Bootstrap'],
    },
    {
      key: 'Third Party',
      value: ['GIT', 'Firebase', 'Twilio', 'Hub Connection'],
    },

    ,
  ];

  const [visibleItemCount, setVisibleItemCount] = useState(0);

  useEffect(() => {
    if (visibleItemCount < showList?.value?.length) {
      const interval = setInterval(() => {
        setVisibleItemCount((prevCount) => prevCount + 1);
      }, 500);

      return () => clearInterval(interval);
    }
  }, [visibleItemCount, showList]);

  return (
    <main className={styles.wrapper} ref={skillsRef}>
      <h2 className={styles.title}>{t('skills')}</h2>
      <div className={styles.skills}>
        {skills.map((item, i) => (
          <div key={i}>
            <div
              className={styles.textWrapper}
              onMouseEnter={() => {
                setShowList(item);
                setVisibleItemCount(0);
              }}
              onMouseLeave={() => setShowList('')}
            >
              <h3 className={styles.text}>{item?.key}</h3>
            </div>
            <div className={styles.valueWrapper}>
              {item?.key === showList?.key &&
                showList?.value
                  ?.slice(0, visibleItemCount)
                  ?.map((el, number) => (
                    <h4
                      key={number}
                      className={
                        number + 1 < visibleItemCount
                          ? styles.show
                          : styles.visible
                      }
                    >
                      {el}
                    </h4>
                  ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Skills;
