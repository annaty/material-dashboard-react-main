import "./homepage.css";

function Homepage() {
  return (
    <div className="container">
      <div className="splash">
        <div className="nav">
          <div>
            <p>logo</p>
          </div>
          <div className="links">
            <a href="/authentication/sign-in">Sign In</a>
            <a href="/authentication/sign-up">Sign up</a>
          </div>
        </div>
        <div className="splash__text">
          <h1>Your story starts with us.</h1>
          <p>
            This is a simple example of a Landing Page you can build using Tailwind Starter Kit. It
            features multiple CSS components based on the Tailwindcss design system.
          </p>
        </div>
        <div className="info__triangle--top" />
      </div>
      <div className="info--grey">
        <div className="cards">
          <div className="card">
            <h6 className="card__title">Awarded Agency</h6>
            <p className="card__description">
              Divide details about your product or agency work into parts. A paragraph describing a
              feature will be enough.
            </p>
          </div>
          <div className="card">
            <h6 className="card__title">Free Revisions</h6>
            <p className="card__description">
              Divide details about your product or agency work into parts. A paragraph describing a
              feature will be enough.
            </p>
          </div>
          <div className="card">
            <h6 className="card__title">Verified Company</h6>
            <p className="card__description">
              Divide details about your product or agency work into parts. A paragraph describing a
              feature will be enough.
            </p>
          </div>
        </div>
        <div className="split">
          <div className="info__text">
            <h4>Working with us is a pleasure</h4>
            <p>
              Don&apos;t let your uses guess by attaching tooltips and popoves to any element. Just
              make sure you enable them first via JavaScript.
            </p>
            <p>
              The kit comes with three pre-built pages help you get started faster. You can change
              the text and images and you&apos;re Just make sure you enable them first via
              JavaScript.
            </p>
          </div>
          <div className="info__color-card">
            <div className="color-card__image" />
            <div className="triangle--card" />
            <div className="color-card__text">
              <h4>Top Notch Services</h4>
              <p>
                The Arctic Ocean freezes every winter and much of the sea-ice then thaws every
                summer, and that process will continue whatever happens.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="info__triangle--bottom" />
      <div className="info--white split">
        <div className="image-placeholder">
          <p> </p>
        </div>
        <div className="info__text">
          <h4>A Growing Company</h4>
          <p>
            The extension comes with three pre-built pages to help you get started faster. You can
            change the text and images and youre good to go.
          </p>
          <ul>
            <li>Carefully crafted components</li>
            <li>Amazing page examples</li>
            <li>Dynamic components</li>
          </ul>
        </div>
      </div>
      <div className="form__triangle--top" />
      <div className="contact-form">
        <h3>Build something</h3>
        <p>
          Put the potentially record low maximum sea ice extent tihs year down to low ice. According
          to the National Oceanic and Atmospheric Administration, Ted, Scambos.
        </p>
        <div className="contact-form__points">
          <div className="point">
            <h6>Excelent Services</h6>
            <p>
              Some quick example text to build on the card title and make up the bulk of the cards
              content.
            </p>
          </div>
          <div className="point">
            <h6>Excelent Services</h6>
            <p>
              Some quick example text to build on the card title and make up the bulk of the cards
              content.
            </p>
          </div>
          <div className="point">
            <h6>Excelent Services</h6>
            <p>
              Some quick example text to build on the card title and make up the bulk of the cards
              content.
            </p>
          </div>
        </div>
        <div className="form">
          <p>form</p>
        </div>
      </div>
      <div className="form__triangle--bottom" />
      <footer>
        <div className="row">
          <div className="column footer__links">
            <h6>USEFUL LINKS</h6>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Github</li>
            </ul>
          </div>
          <div className="column footer__links">
            <h6>OTHER RESOURCES</h6>
            <ul>
              <li>MIT License</li>
              <li>Terns & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="column footer__section">
            <h4>Lets keep in touch</h4>
            <p>Find us on any of the platforms</p>
            <ul className="link-row">
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright © 2020 Tailwind Starter Kit by Creative Tim.</p>
      </footer>
    </div>
  );
}

export default Homepage;
