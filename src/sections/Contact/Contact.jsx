import React, { useState } from 'react';
import styles from './ContactStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error , setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.target;
    
    const serviceID = 'service_72yxjpq';
    const templateID = 'template_504635k';
    const userID = 'OR7IcAC4vr_ifMUCL'

    try {
      await emailjs.sendForm(serviceID, templateID, form,userID);
      setSubmitted(true);
    } catch (error) {
      setError(true)
      setLoading(false);
      setTimeout(()=> setError(false), 2000)
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
      setTimeout(()=> setSubmitted(false), 4000)
      form.reset(); 
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <button
          className={`${styles.button} ${loading ? styles.loading : ''} ${submitted ? styles.success : ''} ${error ? styles.error : ''}`}
          type="submit"
          disabled={loading}
        >
          {error ? "Error" : loading ? 'Sending...' : 'Submit'}
          {submitted && !loading && !error && <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />}
        </button>
      </form>
    </section>
  );
}

export default Contact;
