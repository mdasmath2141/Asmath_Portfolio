import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import sudipta from "../../img/sudipta.jpeg";
import sayon from "../../img/SAYON.jpg";
// import namrata from "../../img/namrata.jpg";
import profilePic2 from "../../img/saikat.jpeg";
// import profilePic3 from "../../img/anisha.jpeg";
// import profilePic4 from "../../img/tuhina.jpeg";
import profilePic5 from "../../img/bablu.jpeg";
import profilePic6 from "../../img/rozario.jpeg";
import faizimg from "../../img/faiz.jpeg";
import kausarimg from "../../img/kausar.jpeg";


const Testimonial = () => {
  const clients = [
    {
      name:"SUDIPTA DAS",
      img: sudipta,
      review:
        "Hello, I’m really worried that the project isn’t going complete on the stipulated time. I can call over many friends and later talk to Asmath and get my questions answered in an instant. Asmath do handle everything. 💖🥰🎇💖 ",
    },
    {
      name:"SAIKAT SARKAR",
      img: profilePic2,
      review:
        "Asmath , I have seen many people in this world but as a friend like Asmath,is a different one . When I see Asmath he is all strict about his work but when i see him outside of the home , he changes completely and frankly to conversation with everyone🥰💖 ",
    },
    {
      name:"SAYON CHAKRABORTY",
      img: sayon,
      review:
        "Hello Asmath , I am very happy to have a friend like you in my life . I had fallen behind a lot in my life and Asmath helped me figure out how to move forward , Its really changed my mindset and try myself to forward . Thank you my best friend Asmath 💘🥰💘",
    },
 
    {
      name:"FAIZ KHAN",
      img: faizimg,
      review:
        "Hii Asmath ,  Thank you so much for the warm welcome. I am glad to have made your acquaintance on the first day. I am very excited to work with you and look forward to succeeding together. I have work with many people but Asmath has different personality 🤗💚",
    },
    {
      name:"MOHD KAUSAR MIZAN",
      img: kausarimg,
      review:
        "Hello Asmath , you are very fabulous . I have worked with many people in my life but Asmath as a friend has always taught me a lot of things about career or any technology related part and explained briefly and learned a lot from him 🎇🎆💛",
    },
    {
      name:"BABLU GHORAMI",
      img: profilePic5,
      review:
        "Hii Asmath , Asmath's working style is totally different , and he as a team leader knows perfectly how to complete the work very quickly , how to distribute it among teammates and get it done very easily. Asmath is completely strict ✌💕🌹🌹🖤 ",
    },
   
    {
      name:"BILINA CHRISTINA",
      img: profilePic6,
      review:
        "Hii Asmath, you are the one who never pushes people back but easily helps to people move forward . I am really happy to have a friend like you, I only know the struggle you have gone through. I want you to go far and be a motivational speaker to all the other young guys ,. Love you Asmath, go ahead💖😘🤩💖 ",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Here’s what</span>
        <span> client's saying </span>
        <span>about me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span className="cli-name">{client.name}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
