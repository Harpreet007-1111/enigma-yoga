import React from 'react';

function About() {
  return (
    <div className='about-cont'>

      <section className='section'>
        <div className="wrapper">
      <img src="/assets/lotus.png" alt="A lotus flower icon" />
        <h1>ABOUT US</h1>
        <p>HOME | ABOUT US</p>
        </div>
      </section>

      <main className="main-about">
      <div className="content">
        <img src="/logo512.png" alt="Enigma Logo" />
          <h2>WHO WE ARE ?</h2>
          <p>Welcome to Enigma Yoga, where we embrace the transformative power of yoga to nurture mind, body, and spirit. Our studio offers a sanctuary for individuals of all levels to embark on a journey of self-discovery and holistic well-being. Through a blend of mindful movement, breathwork, and meditation, we strive to create a supportive community where you can cultivate strength, flexibility, and inner peace. Join us as we guide you towards a path of balance, vitality, and connection.</p>
      </div>

      <div className="images">
            <img id='img1' src="/assets/hero.jpg" alt="A woman meditating" />
            <img id='img2' src="/assets/stretch.jpg" alt="A woman doing salamba sirsasana yoga" />
            <img id='img3' src="/assets/up.jpg" alt="A group of women doing yoga" />
          </div>

      </main>
    </div>
  )
}

export default About;