import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Bahadhurkhanpet</h2>

          <p>
            Bahadhurkhanpet is a peaceful village located in the Karimnagar
            district of Telangana. Surrounded by lush green fields and natural
            beauty, the village is known for its strong agricultural traditions,
            cultural heritage, and welcoming community.
          </p>

          <p>
            Agriculture is the backbone of the village, with farmers cultivating
            paddy, cotton, maize, vegetables, and mangoes. Festivals are
            celebrated with great enthusiasm, bringing everyone together as one
            family.
          </p>

          <p>
            The village is home to sacred places such as the Hanuman Temple,
            Pochamma Temple, and the beautiful Ramula Gutta, a Lord Rama Temple
            situated on a hill that offers scenic views of the surrounding area.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://placehold.co/600x400"
            alt="Bahadhurkhanpet Village"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;