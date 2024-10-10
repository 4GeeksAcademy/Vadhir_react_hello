import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


const Home = () => {
  const cardData = [
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/XoloLarge1.jpg/640px-XoloLarge1.jpg",
      title: "Xoloitzcuintle",
      description: "Una de las razas mexicanas de perros. Dato curioso: No tiene pelo.",
      buttonLabel: "Quiero saber más!",
      buttonUrl: "https://www.purina.es/encuentra-mascota/razas-de-perro/xoloitzcuintle-mediano"
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Chihuahuasmoothcoat.jpg/220px-Chihuahuasmoothcoat.jpg",
      title: "Chihuahueño",
      description: "Su nombre es Chihuahueño, no Chihuahua.",
      buttonLabel: "Quiero saber más!",
      buttonUrl: "https://www.muyinteresante.com.mx/historia/38466.html"
    },
    {
      imageUrl: "https://t1.ea.ltmcdn.com/es/razas/1/8/7/calupoh-o-perro-lobo-mexicano_781_0_600.jpg",
      title: "Calupoh",
      description: "También se le conoce como Perro Lobo Mexicano",
      buttonLabel: "Quiero saber más!",
      buttonUrl: "http://www.calupoh.com/"
    },
    {
      imageUrl: "https://i.ytimg.com/vi/j734Rvf4yhU/hqdefault.jpg",
      title: "Chamuco",
      description: "También conocido como Pitbull Mexicano",
      buttonLabel: "Quiero saber más!",
      buttonUrl: "https://notasdemascotas.com/pitbull-mexicano-caracteristicas-cuidados/"
    },
  ];

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container my-5">
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-3 mb-4">
              <Card
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
                buttonLabel={card.buttonLabel}
                buttonUrl={card.buttonUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

