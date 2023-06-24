import React, { useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi'

function Contact() {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const backURL = 'http://localhost:8080/contact';

  const handleSubmit = (e) => {
    e.preventDefault();

      fetch(backURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "firstName": firstName, "email": email, "message": message })
      })
      .then(Response => Response.json())
      .then(result => {
        if(result.status === 200 && result.success === true) {
            alert("Message sent successfully!");
        } else {
          alert(result.error);
        }
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
      <section className='section'>

        <div className="wrapper">
          <img src="/assets/lotus.png" alt="A lotus flower icon" />
          <h1>CONTACT US</h1>
          <h3>HOME | CONTACT US</h3>
        </div>
      </section>

      <main className="contact-main">
        <div className="wrapper">
          <div className="call">

            <div>
              <IoLocationOutline className="icons" />
              <div className="content">
              <h2>Location</h2>
              <p>Two Rivers, Nairobi</p>
              </div>
            </div>

            <div>
              <FiPhoneCall className='icons' />
              <div className="content">
              <h2>Call</h2>
              <p>+254 7016 03995</p>
              </div>
            </div>

            <div>
              <HiOutlineMail className='icons' />
              <div className="content">
              <h2>Email</h2>
              <p>mail@enigmayoga.co.ke</p>
              </div>
            </div>
          </div>

          <div className="message">
            <div>
            <h2>Get In Touch Today!</h2>
            <input type="text" placeholder='FirstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete='false' />
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='false' />
            <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </div>

          </div>
        </div>
      </main>

    </div>
  )
}

export default Contact;