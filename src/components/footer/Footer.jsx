import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className='footer-section'>
        <ul>
          <li>Shop</li>
          <li>Gift Guides</li>
          <li>Fan Art</li>
          <li>New Work</li>
          <li>Blog </li>
          <li>Student Discount</li>
          <li>Login</li>
          <li>Signup</li>
          <li>Bulk Orders</li>
        </ul>

        <ul>
          <li>About</li>
          <li>About Us</li>
          <li>Social Responsibility</li>
          <li>Partner Program</li>
          <li>Affiliates</li>
          <li>Sell your art</li>
          <li>Jobs</li>
          <li>Artist blog</li>
        </ul>


        <ul>
          <li>Help</li>
          <li>Delivery </li>
          <li>Returns</li>
          <li>Help Center</li>
          <li>Guidlines</li>
          <li>Copyright</li>
          <li>Investor Center</li>
          <li>Contact Us</li>
          <li>Cookie Center</li>
        </ul>

        <ul>
          <li>Social</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Tumblr</li>
          <li>Pinterest</li>
        </ul>

      </div>
      <hr/>
      <div className='user-agreement'> 
        <p>User Agreement </p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
      <hr />
      <p id='copywrite'>@Readbubble.All Rights Reserved</p>
    </footer>
  )
}

export default Footer;