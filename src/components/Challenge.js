import React, { useState } from "react";

import Logo from "../assets/Logo.png";
import ArrowFirst from "../assets/Arrow.png";
import ArrowLast from "../assets/Arrow (1).png";

function Challenge() {
  const [data, setData] = useState([
    { id: 1, url: Logo },
    { id: 2, url: Logo },
    { id: 3, url: Logo },
    { id: 4, url: Logo },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="df rw wp jcc aic carousel">
      <button onClick={handlePrevClick}>
        <img src={ArrowFirst} alt="ProFlight" />
      </button>
      <article className="carousel-items">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={item.url} alt={`Image ${item.id}`} />
          </div>
        ))}
      </article>
      <button onClick={handleNextClick}>
        <img src={ArrowLast} alt="ProFlight" />
      </button>
    </section>
  );
}

export default Challenge;
