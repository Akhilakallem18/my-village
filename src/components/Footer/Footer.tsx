import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>🏡 Bahadhurkhanpet</h2>

          <p>
            A beautiful village in Karimnagar district, Telangana,
            known for agriculture, traditions, temples, and a
            strong community spirit.
          </p>
        </div>


        <div className="footer-location">
          <h3>Location</h3>

          <p>
            📍 Bahadhurkhanpet
            <br />
            Karimnagar District
            <br />
            Telangana, India
          </p>
        </div>


        <div className="footer-links">

          <h3>Explore</h3>

          <p>Home</p>
          <p>About</p>
          <p>Places</p>
          <p>Gallery</p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Bahadhurkhanpet Village. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;