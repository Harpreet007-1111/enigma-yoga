import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  return (
    <div className='home-cont'>
      <div className="p">
      <h1>Start healing your mind, body & soul</h1>
      <p>Start Your Happy Life Today!</p>
      <button onClick={() => navigate('/#contact')}>Consult Now!</button>
      </div>
    </div>
  )
}

export default Home;