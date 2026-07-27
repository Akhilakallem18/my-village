import "./StatsSection.css";

const highlights = [
  {
    icon: "🌾",
    title: "Agriculture",
    description: "Paddy, cotton, maize, vegetables, and mango farming."
  },
  {
    icon: "🛕",
    title: "Temples",
    description: "Hanuman Temple, Ramula Gutta, and Pochamma Temple."
  },
  {
    icon: "🏫",
    title: "Schools",
    description: "Two government schools serving the village."
  },
  {
    icon: "🌸",
    title: "Cheruvu",
    description: "A beautiful lake filled with blooming lotus flowers."
  },
  {
    icon: "🥭",
    title: "Mango Farms",
    description: "Lush mango orchards during the farming season."
  },
  {
    icon: "🎉",
    title: "Festivals",
    description: "Traditional festivals celebrated with unity and joy."
  }
];

function StatsSection() {
  return (
    <section className="stats-section">
      <h2>TEST - Village Highlights</h2>

      <div className="stats-grid">
        {highlights.map((item) => (
          <div className="stat-card" key={item.title}>
            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;