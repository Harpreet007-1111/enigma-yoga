import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-cont">
      <div className="p">
        <h1>Start healing your mind, body & soul</h1>
        <p>
          Embrace your journey to inner peace with Enigma Yoga — where every
          breath brings balance, and every pose nurtures healing. Join a
          sanctuary of strength, stillness, and soulful transformation.
        </p>
        <button onClick={() => navigate("/#contact")}>Consult Now!</button>
      </div>
    </div>
  );
}

export default Home;