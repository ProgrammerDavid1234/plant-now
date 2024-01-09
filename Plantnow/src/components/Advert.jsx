import React from "react";
import imageRectangle from "../assets/Rectangle 4.png";

function Advert() {
  return (
    <section className="advert" id="advert">
      <div className="container">
        <img src={imageRectangle} alt="image" />
        <div className="text">
          <h3>
            Sustainable Farming <br />
            Meets Technology: <br />
            Building a Greener Future
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Advert;
