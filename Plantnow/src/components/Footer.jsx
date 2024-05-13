import logoImage from "../assets/plantnow.png";

function Footer() {
  return (
    <section className="footer">
      <footer>
        <div className="footer-container">
          <div className="sec footer-left">
            <div className="logo">
              <img src={logoImage} alt="logo" />
            </div>
            <p>
              Step into the world of PlantNow, where green aspirations meet
              sustainable living. Your prime haven for everything eco-friendly
              awaits!
            </p>

            <div className="social-links">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sec footer-center">
            <h3>Pages</h3>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="sec footer-right">
            <h3>Contact Us</h3>

            <ul className="info">
              <li>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span> Lagos, Nigeria</span>
              </li>

              <li>
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <p>
                  <a href="tel:+2347017500103">+234 701 750 0103</a>
                </p>
              </li>

              <li>
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <p>
                  <a href="mailto:shop@plantnow.ng">shop@plantnow.ng</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
