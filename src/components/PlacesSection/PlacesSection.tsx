import "./PlacesSection.css";

const places = [
  {
    image: "https://placehold.co/400x300?text=Ramula+Gutta",
    title: "Ramula Gutta",
    description:
      "A beautiful Lord Rama temple situated on a mountain. It is a peaceful spiritual place with amazing views of the village."
  },
  {
    image: "https://placehold.co/400x300?text=Hanuman+Temple",
    title: "Hanuman Temple",
    description:
      "A sacred place where villagers gather for prayers and celebrations during festivals."
  },
  {
    image: "https://placehold.co/400x300?text=Cheruvu",
    title: "Village Cheruvu",
    description:
      "A beautiful lake surrounded by nature, known for its lotus flowers and peaceful atmosphere."
  },
  {
    image: "https://placehold.co/400x300?text=Pochamma+Temple",
    title: "Pochamma Temple",
    description:
      "An important traditional temple that represents the village's culture and beliefs."
  },
  {
    image: "https://placehold.co/400x300?text=Paddy+Fields",
    title: "Green Paddy Fields",
    description:
      "The beautiful agricultural lands where farmers grow paddy and other crops."
  },
  {
    image: "https://placehold.co/400x300?text=Mango+Farms",
    title: "Mango Farms",
    description:
      "Refreshing mango farms that add natural beauty to the village landscape."
  }
];

function PlacesSection() {
  return (
    <section className="places-section">

      <h2>Places of Bahadhurkhanpet</h2>

      <div className="places-grid">

        {places.map((place) => (
          <div className="place-card" key={place.title}>

            <img
              src={place.image}
              alt={place.title}
            />

            <div className="place-content">
              <h3>{place.title}</h3>

              <p>{place.description}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default PlacesSection;