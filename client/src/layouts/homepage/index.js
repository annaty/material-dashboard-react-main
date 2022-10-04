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
        <h1>Your story starts with us.</h1>
        <p>
          This is a simple example of a Landing Page you can build using Tailwind Starter Kit. It
          features multiple CSS components based on the Tailwindcss design system.
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <h3>Awarded Agency</h3>
          <p>
            Divide details about your product or agency work into parts. A paragraph describing a
            feature will be enough.
          </p>
        </div>
        <div className="card">
          <h3>Free Revisions</h3>
          <p>
            Divide details about your product or agency work into parts. A paragraph describing a
            feature will be enough.
          </p>
        </div>
        <div className="card">
          <h3>Verified Company</h3>
          <p>
            Divide details about your product or agency work into parts. A paragraph describing a
            feature will be enough.
          </p>
        </div>
      </div>
      <div className="info">
        <div className="info__text">
          <h2>Working with us is a pleasure</h2>
          <p>
            Don&apos;t let your uses guess by attaching tooltips and popoves to any element. Just
            make sure you enable them first via JavaScript. The kit comes with three pre-built pages
            pages help you get started faster. You can change the text and images and you&apos;re
            Just make sure you enable them first via JavaScript.
          </p>
        </div>
        <div className="info__color-card">
          <img src="" alt="" />
          <div>
            <h3>Top Notch Services</h3>
            <p>
              The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer,
              and that process will continue whatever happens.
            </p>
          </div>
        </div>
      </div>
      <div className="info">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>A Growing Company</h2>
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
      <div className="contact-form">
        <h2>Build something</h2>
        <p>
          Put the potentially record low maximum sea ice extent tihs year down to low ice. According
          to the National Oceanic and Atmospheric Administration, Ted, Scambos.
        </p>
        <div className="contact-form__points">
          <div className="point">
            <h3>Excelent Services</h3>
            <p>
              Some quick example text to build on the card title and make up the bulk of the cards
              content.
            </p>
          </div>
          <div className="point">
            <h3>Excelent Services</h3>
            <p>
              Some quick example text to build on the card title and make up the bulk of the cards
              content.
            </p>
          </div>
          <div className="point">
            <h3>Excelent Services</h3>
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
      <footer>
        <div className="column">
          <h3>Lets keep in touch</h3>
          <p>Find us on any of the platforms</p>
          <div className="link-row">
            <ul>
              <li>Twitter</li>
              <li>Twitter</li>
              <li>Twitter</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="column">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Github</li>
          </ul>
        </div>
        <div className="column">
          <h4>OTHER RESOURCES</h4>
          <ul>
            <li>MIT License</li>
            <li>Terns & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <hr />
        <p>Copyright © 2020 Tailwind Starter Kit by Creative Tim.</p>
      </footer>
    </div>
  );
}

export default Homepage;
