import { Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  return (
    <section className='login-section'>
      <div className="container-login">
        <h1>Log In</h1>
        <p>Need an account? <Link to='/signup' className='li'>Sign Up</Link></p>

        <div className='form' >
          <label>Email or Username</label>
          <input type="email"  placeholder='Enter email'/>

          <label>Password</label>
          <input type="password" placeholder='Enter password' />
        </div>

        <span>Lost password?</span>

        <span className='instructions'>By clicking Log In, you agree to our User Agreement</span>

        <button>Log In</button>

        <span className='instructions'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
      </div>
    </section>
  )
}

export default Login