import React from 'react';

function Poses() {

  const images = [
    {
      id: 16,
      images: '/assets/pose16.png',
      title: "Sukhasana"
    },
    {
      id: 2,
      images: '/assets/pose2.png',
      title: " Konasana"
    },
    {
      id: 11,
      images: '/assets/pose11.png',
      title: "Dandasana"
    },
    {
      id: 10,
      images: '/assets/pose10.png',
      title: "Kapotasana"
    },
    {
      id: 1,
      images: '/assets/pose1.png',
      title: "Vrikshasana"
    },

    {
      id: 3,
      images: '/assets/pose3.png',
      title: "Dandasana"
    },
    {
      id: 4,
      images: '/assets/pose4.png',
      title: "Pavanamuktasana"
    },

    {
      id: 6,
      images: '/assets/pose6.png',
      title: "Vrikshasana"
    },
    {
      id: 7,
      images: '/assets/pose7.png',
      title: "Malasana"
    },
    {
      id: 8,
      images: '/assets/pose8.png',
      title: "Kapotasana"
    },
    {
      id: 5,
      images: '/assets/pose5.png',
      title: "Uttanasana"
    },
    {
      id: 9,
      images: '/assets/pose9.png',
      title: "Chandrasana"
    },
    {
      id: 15,
      images: '/assets/pose15.png',
      title: "Natarajasana"
    },
    {
      id: 14,
      images: '/assets/pose14.png',
      title: "Phalakasana"
    },
    {
      id: 12,
      images: '/assets/pose12.png',
      title: "Parshvottanasana"
    },
    {
      id: 13,
      images: '/assets/pose13.png',
      title: "Balasana"
    },
  ]

  return (
    <div className="poses-cont">

      <section className='section'>
        <div className="wrapper">
          <img src="/assets/lotus.png" alt="A lotus flower icon" />
          <h1>POSES</h1>
          <h3>HOME | POSES</h3>
        </div>
      </section>

      <main className='pose-main'>
        {images.map(image => {
          return (
            <div className="cards" key={image.id}>
              <img src={image.images} alt={image.title} />
              <h4>{image.title}</h4>
            </div>
          )
        })}
      </main>

    </div>
  )
}

export default Poses;