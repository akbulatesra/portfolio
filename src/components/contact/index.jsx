import { useTranslation } from 'react-i18next';
import styles from '../../app/styles/Contact.module.scss';
import Social from '../social';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = ({ contactRef }) => {
  const { t } = useTranslation();
  const [myname, setMyName] = useState('');
  const [mymail, setMyMail] = useState('');
  const [mymessage, setMyMessage] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then(
        (result) => {
          toast('Your email has been sent successfully!');
          setMyMail('');
          setMyMessage('');
          setMyName('');
        },
        (error) => {
          toast(
            'An error occurred while sending the email. Please try again later.'
          );
          setMyMail('');
          setMyMessage('');
          setMyName('');
        }
      );
  };

  return (
    <main className={styles.wrapper} ref={contactRef}>
      <h2>{t('contact')}</h2>
      <Toaster
        containerClassName={styles.toast}
        toastOptions={{
          duration: 8000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <section className={styles.wrapperInside}>
        <form className={styles.form} onSubmit={handleSubmit} ref={form}>
          <label className={styles.label}>
            <h4>Name</h4>
            <input
              type="text"
              name="name"
              value={myname}
              onChange={(e) => setMyName(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            <h4>Email</h4>
            <input
              type="text"
              name="email"
              value={mymail}
              onChange={(e) => setMyMail(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            <h4>Your Message</h4>
            <textarea
              name="message"
              value={mymessage}
              onChange={(e) => setMyMessage(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <Social />
      </section>
    </main>
  );
};
export default Contact;
