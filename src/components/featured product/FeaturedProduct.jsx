import Slider from "react-slick";
import "./FeaturedProduct.scss";
import { section2Image, slider2, sliderFirstImg } from "../../constants/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

const FeaturedProduct = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  }

  return (
    <section className="featured-products">
      <div className="container">
        <h2>Featured products</h2>
        <Slider {...settings}>
          {sliderFirstImg.map((item, index) => (
            <div key={index} className="slider-item">
              <img src={item.image} alt="slider image" />
              <p>{item.title}</p>
              <span>{item.author}</span>
              <span className="price">{item.price}</span>
              <span className="offer-price">{item.offerPrice}</span>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container-2">
        <div className="heading">
          <h2>Explore designs picked for you</h2>
          <span>See more</span>
        </div>
        <div className="section-2-slider">
          {section2Image.map((item, index) => (
            <div key={index} className="section-slider">
              <img src={item.image} alt="Image" />
              <p>{item.title}</p>
              <span>{item.author}</span>
              <span className="products">{item.products}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-3">
        <h2>Featured artists</h2>
        <div className="card">
          <Slider {...settings2}>
          {slider2.map((item, index) => (
            <div key={index} className="first-half">
              <img src={item.image} alt="Image" />
              <img src={item.profile} alt="profile" className="profile-image" />
              <p>{item.title}</p>
              <button>View Shop</button>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
