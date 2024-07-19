import { useState } from "react";
import "./ShopFanArt.scss";
import {
  section3Part1,
  section3Part2,
  upperFooter,
} from "../../constants/data";

const ShopFanArt = () => {
  const [borderland, setBorderlands] = useState(true);

  return (
    <section className="section-3">
      <div className="container">
        <h2>Shop fan art made by artists who love it too</h2>
        <div className="shop-buttons">
          <div className="buttons">
            <button
              onClick={() => setBorderlands(true)}
              className={borderland ? "borderland" : ""}
            >
              The Last Unicorn
            </button>
            <button
              onClick={() => setBorderlands(false)}
              className={borderland ? "" : "borderland"}
            >
              Borderlands
            </button>
          </div>
          <span>
            {borderland
              ? "Shop the Last Unicorn Merch"
              : "Shop Borderlands Merch"}
          </span>
        </div>

        {borderland ? (
          <div className="section-artists-1">
            {section3Part1.map((item, index) => (
              <div key={index} className="artists-section">
                <img src={item.image} alt="Image" />
                <p>{item.title}</p>
                <span>{item.author}</span>
                <span className="price">{item.price}</span>
                <span className="offer-price">{item.offerPrice}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="section-artists-1">
            {section3Part2.map((item, index) => (
              <div key={index} className="artists-section">
                <img src={item.image} alt="Image" />
                <p>{item.title}</p>
                <span>{item.author}</span>
                <span className="price">{item.price}</span>
                <span className="offer-price">{item.offerPrice}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="upperFooter">
        {upperFooter.map((item, index) => (
          <div key={index} className="items">
            <img src={item.image} alt="Svg" />
            <p>{item.title}</p>
            <span>{item.desc}</span>
            <button>Learn more</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopFanArt;
