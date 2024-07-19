import "./SellYourArt.scss";
import sellingImage from "../../assets/img/sellyourart1.png";

const SellYourArt = () => {
  return (
    <section className="sellYourArt">
      <div className="left-image">
        <img src={sellingImage} alt="selling image" />
      </div>
      <div className="right-heading">
        <h1>Creativity. Community. And sweet, sweet cash.</h1>
        <p>
          Sell your art printed on high-quality products to a global audience.
          It’s fun, easy, and quick to get started.
        </p>
        <button>Start Selling</button>
      </div>
    </section>
  );
};

export default SellYourArt;
