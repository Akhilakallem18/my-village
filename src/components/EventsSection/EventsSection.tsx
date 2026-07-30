import { useEffect, useState } from "react";
import "./EventsSection.css";
import { getEvents } from "../../services/api";

type Event = {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  image: string;
};

function EventsSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load events.");
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  if (loading) return <h3>Loading events...</h3>;
  if (error) return <h3>{error}</h3>;
  if (events.length === 0) return <h3>No events available.</h3>;

  return (
    <section className="events-section">
      <h2>Village Festivals & Events</h2>

      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <img
              src={
                event.image ||
                "https://placehold.co/600x400?text=Event"
              }
              alt={event.name}
            />

            <div className="event-content">
              <h3>{event.name}</h3>

              <p>{event.description}</p>

              <small>
                <strong>Date:</strong> {event.date}
              </small>

              <br />

              <small>
                <strong>Location:</strong> {event.location}
              </small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventsSection;