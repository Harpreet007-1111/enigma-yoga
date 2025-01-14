import React from "react";

function Poses() {
  const images = [
    {
      id: 6,
      images: "/assets/thunderbolt-pose.svg",
      title: "vajrasana",
    },
    {
      id: 16,
      images: "/assets/Camel-pose.svg",
      title: "ushtrasana",
    },
    {
      id: 8,
      images: "/assets/bow-pose.svg",
      title: "dhanurasana",
    },

    {
      id: 2,
      images: "/assets/handstand-pose.svg",
      title: "bakasana",
    },
    {
      id: 11,
      images: "/assets/knees-to-chest.svg",
      title: "pavanamuktasana",
    },
    {
      id: 3,
      images: "/assets/shoulder-stand-pose.svg",
      title: "sarvangasana",
    },
    {
      id: 1,
      images: "/assets/ragdoll-pose.svg",
      title: "padangushthasana",
    },
    {
      id: 10,
      images: "/assets/locust-pose.svg",
      title: "shalabhasana",
    },
    {
      id: 4,
      images: "/assets/standing-hand-pose.svg",
      title: "urdhva prasarita",
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

      <main className="main-pose">
        {images.map((image) => (
          <div className="cards" key={image.id}>
            <img src={image.images} alt={image.title} />
            <h4>{image.title}</h4>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Poses;
