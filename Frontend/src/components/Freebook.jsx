import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Freebook = () => {

  const[book,setBook] = useState([]);

  useEffect(() => {
    const getBook = async()=>{
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/book`);
        setBook(res.data);
      } catch (error) {
        console.log(error)
      }
    }

    getBook();
  }, [])

  const freeBook = book.filter((data) => data.category === "free");

  const [slidePercentage, setSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidePercentage(100);
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setSlidePercentage(50);
      } else {
        setSlidePercentage(33.33);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="freebook" className="md:pt-20 pt-14">
      <div className="md:px-20 px-5">
        <h1 className="font-semibold text-lg">Free Services</h1>
        <p className="mb-5">
        Get access to expert medical care without any cost. Our dedicated doctors are here to support your well-being, offering consultations, guidance, and treatment—absolutely free. <span className="text-pink-500">Your health, our priority!</span>
        </p>
      </div>

      <div className="md:px-16 md:py-8">
        <Carousel
          centerMode
          centerSlidePercentage={slidePercentage}
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          stopOnHover={true}
        >
          {freeBook.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Freebook;
