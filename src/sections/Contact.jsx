import React, { useState, useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import contactImage from '../images/support-img.png';
import { themeContext } from '../Context';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_aewoogl', 'template_13p0ugp', form.current, {
        publicKey: 'xcwXoOhdntMLsnIgs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="contact-form" id='Contact'>
        <div className="s-left">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
          <span>Contact me</span>
          <img src={contactImage} alt="contact" />
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name='user_name'
              className='user'
              placeholder='Name'
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name='user_email'
              className='user'
              placeholder='Email'
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            <textarea
              type="message"
              name='message'
              className='user'
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
              required
            />
            <input type="submit" value='Send' className='raise' />
            <span style={{ color: darkMode ? 'white' : '' }}>{done && "Thanks for contacting me!"}</span>
            <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
