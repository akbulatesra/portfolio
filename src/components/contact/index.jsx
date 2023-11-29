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
    mymail === '' || mymessage === '' || myname === ''
      ? toast('Please fill in all fields')
      : emailjs
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
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <section className={styles.wrapperInside}>
        <form className={styles.form} onSubmit={handleSubmit} ref={form}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={myname}
            onChange={(e) => setMyName(e.target.value)}
            placeholder="Please Type Your Name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={mymail}
            onChange={(e) => setMyMail(e.target.value)}
            placeholder="Please Type Your Email"
            id="email"
          />
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            value={mymessage}
            onChange={(e) => setMyMessage(e.target.value)}
            placeholder="Please Type Your Message"
            id="message"
          />
          <button type="submit" aria-label="Submit Form">
            Submit
          </button>
        </form>
        <Social />
      </section>
    </main>
  );
};
export default Contact;
