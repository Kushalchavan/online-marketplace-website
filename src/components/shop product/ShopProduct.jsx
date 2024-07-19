  import "./ShopProduct.scss";
import image1 from "../../assets/img/section-2-images01.jpg";
import image2 from "../../assets/img/section-2-images02.jpg";
import image3 from "../../assets/img/section-2-images03.jpg";
import iconImage1 from "../../assets/img/section-2-images13.svg";
import iconImage2 from "../../assets/img/section-2-images14.svg";
import iconImage3 from "../../assets/img/section-2-images15.svg";
import { section2 } from "../../constants/data";

const ShopProduct = () => {
  return (
    <section>
      <div className="container">
        <h2>Shop Product Range</h2>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={image1} alt="first-image" />
            <button>Shop T-Shirts</button>
          </div>
          <div className="image-wrapper">
            <img src={image2} alt="second-image" />
            <button>Shop Stickers</button>
          </div>
          <div className="image-wrapper">
            <img src={image3} alt="third-image" />
            <button>Shop Posters</button>
          </div>
        </div>

        <div className="icons-images">
          <div className="icon-wraper">
            <img src={iconImage1} alt="icon-image1" />
            <div className="text">
              <p>Weirdly meaningful art</p>
              <span>Millions of designs on over 70 high quality products.</span>
            </div>
          </div>
          <div className="icon-wraper">
            <img src={iconImage2} alt="icon-image2" />
            <div className="text">
              <p>Purchases pay artists</p>
              <span>Money goes directly into a creative person's pocket.</span>
            </div>
          </div>
          <div className="icon-wraper">
            <img src={iconImage3} alt="icon-image3" />
            <div className="text">
              <p>Socially responsible production</p>
              <span>
                We're investing in programs to offset all carbon emissions.
              </span>
            </div>
          </div>
        </div>

        <div className="image-container">
          {section2.map((item, index) => (
            <div key={index} className="image-wrapper">
              <img src={item.image} alt={item.alt} />
              <button>{item.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopProduct;
