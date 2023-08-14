import { useTranslation } from 'react-i18next';
import styles from '../../app/styles/Contact.module.scss';
import Social from '../social';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ contactRef }) => {
  const { t } = useTranslation();
  const [myname, setMyName] = useState('');
  const [mymail, setMyMail] = useState('');
  const [mymessage, setMyMessage] = useState('');

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('name', myname);
    formData.append('mail', mymail);
    formData.append('message', mymessage);
    console.log(formData);
    e.preventDefault();
    emailjs.sendForm(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      formData,
      process.env.PUBLIC_KEY
    );
  };

  return (
    <main className={styles.wrapper} ref={contactRef}>
      <h2>{t('contact')}</h2>
      <section className={styles.wrapperInside}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            <h4>Name</h4>
            <input type="text" onChange={(e) => setMyName(e.target.value)} />
          </label>
          <label className={styles.label}>
            <h4>Email</h4>
            <input type="text" onChange={(e) => setMyMail(e.target.value)} />
          </label>
          <label className={styles.label}>
            <h4>Your Message</h4>
            <textarea onChange={(e) => setMyMessage(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
        <Social />
      </section>
    </main>
  );
};
export default Contact;
