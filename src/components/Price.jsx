import React from 'react';
import { useNavigate } from 'react-router-dom';

function Price() {

  const plans = [
    {
      id: 1,
      title: 'Beginner',
      options: ['Fixed Schedule', '1 Month Membership', 'Free Sauna', 'Beginner Classes', 'Free Wifi'],
      price: '30'
    },
    {
      id: 2,
      title: 'Intermediate',
      options: ['Fixed Schedule', '1 Month Membership', 'Free Sauna', 'Advanced Classes', 'Free Wifi'],
      price: '50'
    },
    {
      id: 3,
      title: 'Advanced',
      options: ['Flexible Schedule', '1 Month Membership', 'Free Sauna', 'All Classes', 'Free Wifi'],
      price: '80'
    }
  ];

    const navigate = useNavigate();

  return (
    <div className="price-cont">
      <section className="section">
        <div className="wrapper">
          <img src="/assets/lotus.png" alt="A lotus flower icon" />
          <h1>PRICING</h1>
          <p>HOME | PRICING</p>
        </div>
      </section>

      <h2>OUR PLANS</h2>
      <p>
        At Enigma Yoga, we offer thoughtfully designed plans to support every
        stage of your wellness journey. Whether you're just beginning, looking
        to deepen your practice, or ready to challenge your limits, our
        Beginner, Intermediate, and Advanced plans are here to guide you with
        intention, balance, and grace.
      </p>
      <main className="price-main">
        {plans.map((plan) => {
          return (
            <div className="cards" key={plan.id}>
              <h2>{plan.title}</h2>
              {plan.options.map((option) => {
                return (
                  <ul>
                    <li key={plan.options[3]}>{option}</li>
                  </ul>
                );
              })}
              <h3>$ {plan.price}</h3>
              <button onClick={() => navigate("/contact")}>Get Started</button>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Price;