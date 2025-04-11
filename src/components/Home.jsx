import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-cont">
      <div className="p">
        <h1>You've carried enough. <br /> It's time to breathe again.</h1>
        <p>
          At Enigma Yoga, we hold space for your healing — whether you're
          feeling overwhelmed, out of balance, or just ready to reconnect. Every
          breath, every pose, every pause is an invitation back to yourself.
        </p>
        <button onClick={() => navigate("/#contact")}>
          Start Your Healing Journey
        </button>
      </div>
    </div>
  );
}

export default Home;