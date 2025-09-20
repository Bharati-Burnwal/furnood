import Place from '@mui/icons-material/Place';
import Call from '@mui/icons-material/Call';
import Mail from '@mui/icons-material/Mail';
import './css/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="logo mb-3">
              <img src="/images/flogo.png" alt="footer-logo" />
            </div>
              <p>Aenean lectus diam, tempus nec luctus vel, ultricies non augue. Nulla ac libero sit amet orci laor.</p>
                         
          </div>
          <div className="col-lg-2">
            <h4>Quick Links</h4>
           <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Shop</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
            </ul> 
          </div>
          <div className="col-lg-3">
            <h4>Quick Links</h4>
           <ul>
              <li><a href="/">Payment Option</a></li>
              <li><a href="/">Returns</a></li>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="/">Privacy & Policy</a></li>
            </ul> 
          </div>

          <div className="col-lg-3">
            <h4>Contact Us</h4>
            <ul className="location">
                <li><Place/><p className="mb-0">400 University Drive Suite 200 Coral Gables,
FL 33134 USA</p></li>
                <li><Call/><p className="mb-0">+91 233 789 65</p></li>
                <li><Mail/><p className="mb-0">Support@Funood.com</p></li>
              </ul> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
