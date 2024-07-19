import './Main.scss'
import MainImg from '../../assets/img/main-image1.jpg'

const Main = () => {
  return (
    <main>
      <div className="main-container">
        <img src={MainImg} alt="main-section-image" />
        <div className="heading">
          <h1>30% OFF EVERYTHING</h1>
          <p>There’s only one you. Dress like it. Express yourself with artist-made apparel and decor.</p>
          <button>shop now</button>
        </div>
      </div>
    </main>
  )
}

export default Main;