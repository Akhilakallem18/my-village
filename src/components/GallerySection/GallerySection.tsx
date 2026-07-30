import { useEffect, useState } from "react";
import "./GallerySection.css";
import { getGallery } from "../../services/api";


type GalleryItem = {

  id: number;
  title: string;
  image: string;
  description: string;

};


function GallerySection() {


  const [gallery, setGallery] = useState<GalleryItem[]>([]);


  useEffect(() => {


    async function loadGallery() {

      try {

        const data = await getGallery();

        console.log("Gallery API Response:", data);

        setGallery(data);


      } catch(error) {

        console.error(
          "Failed to load gallery:",
          error
        );

      }

    }


    loadGallery();


  }, []);



  return (

    <section className="gallery-section">


      <h2>
        Gallery of Bahadhurkhanpet
      </h2>


      <div className="gallery-grid">


        {gallery.map((item) => (

          <div
            className="gallery-card"
            key={item.id}
          >


            <img
              src={
                item.image ||
                "https://placehold.co/600x400"
              }
              alt={item.title}
            />


            <div className="gallery-content">

              <h3>
                {item.title}
              </h3>


              <p>
                {item.description}
              </p>


            </div>


          </div>

        ))}


      </div>


    </section>

  );

}


export default GallerySection;