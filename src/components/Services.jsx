import React from "react";
import { BiTime } from "react-icons/bi";
import { GiAchievement } from "react-icons/gi";

function Services() {
  const data = [
    {
      id: 1,
      image: "/assets/basic.jpg",
      title: "Basic Yoga",
      description:
        "Discover the foundations of yoga with our Basic Yoga classes. Ideal for beginners or anyone revisiting the fundamentals, these sessions build strength, enhance flexibility, and cultivate mindfulness through a variety of asanas and pranayama techniques.",
      duration: "2",
      level: "Basic",
    },
    {
      id: 2,
      image: "/assets/advanced.jpg",
      title: "Advanced Yoga",
      description:
        "Elevate your practice with our Advanced Yoga classes. Designed for experienced yogis, these sessions feature challenging postures, inversions, and transitions that deepen both physical and spiritual aspects of your practice.",
      duration: "3",
      level: "Advanced",
    },
    {
      id: 3,
      image: "/assets/pregnancy.jpg",
      title: "Pregnancy Yoga",
      description:
        "Support your body and mind during pregnancy with our specialized classes. Gentle and mindful, these sessions help ease discomfort, improve circulation, and prepare you for childbirth through safe and empowering practices.",
      duration: "2",
      level: "Advanced",
    },
    {
      id: 4,
      image: "/assets/hatha.jpg",
      title: "Hatha Yoga",
      description:
        "Explore the classic path of Hatha Yoga. These sessions focus on breath, alignment, and mindful transitions between poses to cultivate balance, calm, and overall wellness.",
      duration: "4",
      level: "Advanced",
    },
    {
      id: 5,
      image: "/assets/child.jpg",
      title: "Children Yoga",
      description:
        "Introduce kids to the joy of yoga through playful and interactive sessions. These classes blend fun with focus, helping children develop physical strength, flexibility, and emotional resilience.",
      duration: "5",
      level: "Basic",
    },
    {
      id: 6,
      image: "/assets/vanasana.jpg",
      title: "Vinyasa Yoga",
      description:
        "Flow with energy and intention in our Vinyasa Yoga classes. Seamlessly connect breath and movement through dynamic sequences that enhance strength, flexibility, and body awareness.",
      duration: "5",
      level: "Intermediate",
    },
  ];

  return (
    <div className="service-cont">
      <section className="section">
        <div className="wrapper">
          <img src="/assets/lotus.png" alt="A lotus flower icon" />
          <h1>OUR SERVICES</h1>
          <p>HOME | OUR SERVICES</p>
        </div>
      </section>

      <main className="main-services">
        {data.map((item) => {
          return (
            <div className="cards" key={item.id}>
              <div className="wrapper">
                <img src={item.image} alt={item.title} />
                <div className="content">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="line">
                    <p>
                      <BiTime className="icons" title="Duration" /> {item.time}
                    </p>
                    <p>
                      <GiAchievement className="icons" title="Achievement" />{" "}
                      {item.goal}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Services;
