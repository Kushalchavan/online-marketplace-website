import "./Signup.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="signup-section">
      <div className="container-login">
        <h1>Sign Up</h1>

        <div className="form">
          <label>Email </label>
          <input type="email" placeholder=" Email" />

          <label>Username</label>
          <input type="text" placeholder="Username" />

          <label>Password</label>
          <input type="password" placeholder=" Password" />
        </div>

        <span className="checkbox">
          <input type="checkbox" />
          Email me special offers and artist news.
        </span>

        <button>Sign Up</button>

        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>

        <span className="instructions">
          By clicking Sign Up, you agree to our User Agreement and Privacy
          Policy.
        </span>

      </div>
    </section>
  );
};

export default Signup;
