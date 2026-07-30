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



  useEffect(() => {


    async function loadEvents() {


      try {

        const data = await getEvents();

        console.log(
          "Events API Response:",
          data
        );

        setEvents(data);


      } catch(error) {

        console.error(
          "Failed to load events:",
          error
        );

      }


    }


    loadEvents();


  }, []);



  return (

    <section className="events-section">


      <h2>
        Festivals & Events of Bahadhurkhanpet
      </h2>


      <div className="events-grid">


        {events.map((event) => (

          <div
            className="event-card"
            key={event.id}
          >


            <img
              src={
                event.image ||
                "https://placehold.co/600x400"
              }
              alt={event.name}
            />


            <div className="event-content">


              <h3>
                {event.name}
              </h3>


              <p>
                {event.description}
              </p>


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