import "./GallerySection.css";

const galleryImages = [
  {
    image: "https://placehold.co/500x350?text=Ramula+Gutta",
    title: "Ramula Gutta",
    description: "Lord Rama Temple on the beautiful hill."
  },
  {
    image: "https://placehold.co/500x350?text=Cheruvu",
    title: "Village Cheruvu",
    description: "Beautiful lake with lotus flowers."
  },
  {
    image: "https://placehold.co/500x350?text=Paddy+Fields",
    title: "Paddy Fields",
    description: "Green fields showing the farming beauty of our village."
  },
  {
    image: "https://placehold.co/500x350?text=Mango+Farms",
    title: "Mango Farms",
    description: "Fresh mango farms surrounding the village."
  },
  {
    image: "https://placehold.co/500x350?text=Temples",
    title: "Village Temples",
    description: "Hanuman Temple and Pochamma Temple."
  },
  {
    image: "https://placehold.co/500x350?text=Festivals",
    title: "Village Festivals",
    description: "Traditional celebrations with happiness and unity."
  }
];

function GallerySection() {
  return (
    <section className="gallery-section">

      <h2>Gallery of Bahadhurkhanpet</h2>

      <div className="gallery-grid">

        {galleryImages.map((item) => (
          <div className="gallery-card" key={item.title}>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default GallerySection;