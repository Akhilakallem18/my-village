import { useEffect, useState } from "react";
import "./PlacesSection.css";
import { getPlaces } from "../../services/api";

import type { Place } from "../../types/village";

function PlacesSection() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPlaces() {
      try {
        const data = await getPlaces();

        console.log("Places API Response:", data);

        setPlaces(data);

      } catch (error) {

        console.error("Failed to load places:", error);

        setError("Unable to load places");

      } finally {

        setLoading(false);

      }
    }

    loadPlaces();
  }, []);


  // ADD THESE HERE
  if (loading) {
    return <h3>Loading places...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  if (places.length === 0) {
    return <h3>No places available</h3>;
  }


  return (
    <section className="places-section">

      <h2>Places of Bahadhurkhanpet</h2>

      <div className="places-grid">

        {places.map((place) => (
          <div className="place-card" key={place.id}>

            <img
              src={
                place.image ||
                "https://placehold.co/400x300?text=No+Image"
              }
              alt={place.name}
            />

            <div className="place-content">

              <h3>{place.name}</h3>

              <p>{place.description}</p>

              <small>
                <strong>Category:</strong> {place.category}
              </small>

              <br />

              <small>
                <strong>Location:</strong> {place.location}
              </small>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
export default PlacesSection;