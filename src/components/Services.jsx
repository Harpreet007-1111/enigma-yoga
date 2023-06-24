import React from 'react';
import { BiTime } from 'react-icons/bi';
import { GiAchievement } from 'react-icons/gi';

function Services() {

  const data = [
    {
      id: 1,
      image: '/assets/basic.jpg',
      title: 'Basic Yoga',
      description: 'Discover the foundations of yoga practice with our Basic Yoga classes. Perfect for beginners or those looking to revisit the fundamentals, these sessions focus on building strength, improving flexibility, and cultivating mindfulness through a variety of asanas (poses) and pranayama (breathing exercises).',
      time: '2',
      goal: 'Basic'
    },
    {
      id: 2,
      image: '/assets/advanced.jpg',
      title: 'Advanced Yoga',
      description: 'Take your practice to the next level with our Advanced Yoga classes. Designed for experienced yogis seeking a deeper challenge, these sessions incorporate more advanced postures, inversions, and transitions, allowing you to explore your limits and expand your practice both physically and spiritually.',
      time: '3',
      goal: 'Advanced'
    },
    {
      id: 3,
      image: '/assets/pregnancy.jpg',
      title: 'Pregnancy Yoga',
      description: 'Nurture your body and mind during this precious time with our Pregnancy Yoga classes. Tailored specifically for expectant mothers, these gentle sessions help alleviate pregnancy discomfort, improve circulation, promote relaxation, and strengthen the body in preparation for childbirth.',
      time: '2',
      goal: 'Advanced'
    },
    {
      id: 4,
      image: '/assets/hatha.jpg',
      title: 'Hatha Yoga',
      description: 'Immerse yourself in the ancient practice of Hatha Yoga, the union of breath and movement. Our Hatha Yoga classes emphasize balance, alignment, and mindful transitions between asanas. With a focus on cultivating a calm and steady mind, these sessions provide a holistic approach to wellness.',
      time: '4',
      goal: 'Advanced'
    },
    {
      id: 5,
      image: '/assets/child.jpg',
      title: 'Children Yoga',
      description: 'Introduce your little ones to the joy of yoga with our Children Yoga classes. Designed for kids of all ages, these playful and interactive sessions incorporate age-appropriate asanas, breathing exercises, and games, fostering physical strength, flexibility, and emotional well-being in a fun and engaging environment.',
      time: '5',
      goal: 'Basic'
    },
    {
      id: 6,
      image: '/assets/vanasana.jpg',
      title: 'Vinyasa Yoga',
      description: 'Flow with grace and fluidity in our Vinyasa Yoga classes. Characterized by dynamic sequences that synchronize breath with movement, these sessions offer a dynamic and energetic practice. Experience the seamless connection between body and breath as you build strength, increase flexibility, and find your flow on the mat.',
      time: '5',
      goal: 'Intermediate'
    }
  ]

  return (
    <div className='service-cont'>

      <section className='section'>
        <div className="wrapper">
          <img src="/assets/lotus.png" alt="A lotus flower icon" />
          <h1>OUR SERVICES</h1>
          <h3>HOME | OUR SERVICES</h3>
        </div>
      </section>

      <main className="main-services">
        {data.map(item => {
  return (
    <div className="cards" key={item.id}>
      <div className="wrapper">
        <img src={item.image} alt={item.title} />
        <div className="content">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <div className="line">
            <p><BiTime className="icons" title='Duration' /> {item.time}</p>
            <p><GiAchievement className='icons' title='Achievement' /> {item.goal}</p>
          </div>
        </div>
      </div>
    </div>
  )
        })}
      </main>

    </div>
  )
}

export default Services;