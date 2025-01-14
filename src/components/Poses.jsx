import React from "react";

function Poses() {
  const images = [
    {
      id: 1,
      images: "/assets/thunderbolt-pose.svg",
      title: "vajrasana",
    },
    {
      id: 2,
      images: "/assets/camel-pose.svg",
      title: "ushtrasana",
    },
    {
      id: 3,
      images: "/assets/backbend.svg",
      title: "dhanurasana",
    },
    {
      id: 4,
      images: "/assets/bow-pose.svg",
      title: "bhekasana",
    },
    {
      id: 5,
      images: "/assets/knees-to-chest.svg",
      title: "apanasana",
    },
    {
      id: 6,
      images: "/assets/locust-pose.svg",
      title: "shalabhasana",
    },
    {
      id: 7,
      images: "/assets/ragdoll-pose.svg",
      title: "padahastasana",
    },
    {
      id: 8,
      images: "/assets/shoulder-stand-pose.svg",
      title: "sarvangasana",
    },
    {
      id: 9,
      images: "/assets/standing-hand-pose.svg",
      title: "parivritta",
    },
  ];

  return (
    <div className="poses-cont">
      <section className="section">
        <div className="wrapper">
          <img src="/assets/lotus.png" alt="A lotus flower icon" />
          <h1>POSES</h1>
          <h3>HOME | POSES</h3>
        </div>
      </section>

      <main className="pose-main">
        {images.map((image) => {
          return (
            <div className="cards" key={image.id}>
              <img src={image.images} alt={image.title} />
              <h4>{image.title}</h4>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Poses;
