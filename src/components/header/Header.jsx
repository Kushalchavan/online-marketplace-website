import "./Header.scss";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="top-navbar">
          <div className="left">
            <Link to="/">
              <img src="/public/Daco_4795395.png" alt="logo" />
            </Link>
            <div className="input">
              <input type="text" />
              <button className="search-button">
                <IoSearch  className="search-icon"/>
              </button>
            </div>
          </div>
          <div className="right">
            <ul>
              <li>
                <Link to="/selling">Sell your art</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/" className="icon">
                  <FaRegHeart />
                </Link>
              </li>
              <li>
                <Link to="/" className="icon">
                  <FiShoppingCart />
                  <span className="cart-amount">0</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-navbar">
          <ul>
            <li>
              Explore
              <ul className="submenu">
                <li>Explore Design</li>
                <li>Fresh Finds</li>
                <li>Funny</li>
                <li>Aesthetic</li>
                <li>Pop Culture</li>
                <li>Animal & Nature</li>
                <li>Anime & stickers</li>
                <li>Netflix</li>
              </ul>
            </li>
            <li>
              Clothing
              <ul className="submenu">
                <li>All Clothing</li>
                <li>T-Shirts</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Hats</li>
                <li>Socks</li>
                <li>Dresses</li>
                <li>Taktops</li>
                <li>Leggings</li>
              </ul>
            </li>
            <li>
              Stickers
              <ul className="submenu">
                <li>All Stickers</li>
                <li>Magnets</li>
              </ul>
            </li>
            <li>
              Phone Cases
              <ul className="submenu">
                <li>All Phone cases</li>
                <li>iPhone cases</li>
                <li>Samsung Galaxy</li>
              </ul>
            </li>
            <li>
              Wall Art
              <ul className="submenu">
                <li>All Wall Art</li>
                <li>Posters</li>
                <li>Photographic Prints</li>
                <li>Art Prints</li>
                <li>Tapestries</li>
                <li>Canvas print</li>
              </ul>
            </li>
            <li>
              Home & Living
              <ul className="submenu">
                <li>All Home Living</li>
                <li>Mugs</li>
                <li>Throw Pellows</li>
                <li>Throw Blankets</li>
                <li>Tapestries</li>
                <li>Magnet</li>
                <li>Apron</li>
              </ul>
            </li>
            <li>
              Kids & Babies
              <ul className="submenu">
                <li>All Kids Cloths</li>
                <li>Kids T-Shirt</li>
                <li>Baby T-Shirts</li>
                <li>Kids Pullover</li>
                <li>Toddler Pullover</li>
                <li>Kids Masks</li>
              </ul>
            </li>
            <li>
              Accessories
              <ul className="submenu">
                <li>All Accessories</li>
                <li>Hats</li>
                <li>Socks</li>
                <li>Pins</li>
                <li>Backpack</li>
                <li>Tech Accessories</li>
                <li>Makeup Bags</li>
              </ul>
            </li>
            <li>
              Stationary & Office
              <ul className="submenu">
                <li>All Stationary & Office</li>
                <li>Greeting Cards</li>
                <li>Spiral Notebooks</li>
                <li>Postcards</li>
                <li>Mouse Pads & Desk Mats</li>
                <li>Harkcover Journals</li>
              </ul>
            </li>
            <li>Gifts</li>
          </ul>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
