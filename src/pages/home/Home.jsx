import FeaturedProduct from "../../components/featured product/FeaturedProduct";
import Main from "../../components/main/Main";
import ShopFanArt from "../../components/shop fan art/ShopFanArt";
import ShopProduct from "../../components/shop product/ShopProduct";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="main-section">
        <Main />
      </div>
      <div className="section-2">
        <ShopProduct />
        <FeaturedProduct />
        <ShopFanArt />
      </div>
    </>
  );
};

export default Home;
