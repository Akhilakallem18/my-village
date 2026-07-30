import { useEffect, useState } from "react";
import "./VillageInfo.css";
import { getVillage } from "../../services/api";
import type { Village } from "../../types/village";


function VillageInfo() {

  const [village, setVillage] = useState<Village | null>(null);


  useEffect(() => {

    async function loadVillage() {

      try {

        const data = await getVillage();

        setVillage(data[0]);

      } catch(error) {

        console.error("Failed to load village:", error);

      }

    }


    loadVillage();

  }, []);



  if (!village) {
    return <h3>Loading village information...</h3>;
  }



  return (

    <section className="village-info">

      <h2>
        Welcome to {village.name}
      </h2>


      <p>
        {village.description}
      </p>


      <div className="village-details">


        <div>
          <h3>Location</h3>
          <p>
            {village.district}, {village.state}
          </p>
        </div>


        <div>
          <h3>Agriculture</h3>
          <p>
            {village.agriculture}
          </p>
        </div>


        <div>
          <h3>Culture</h3>
          <p>
            {village.culture}
          </p>
        </div>


        <div>
          <h3>Famous Places</h3>
          <p>
            {village.famous_places}
          </p>
        </div>


      </div>


    </section>

  );

}


export default VillageInfo;