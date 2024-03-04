import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return <PlantCard id={plant.id} key={plant.id} name={plant.name} image={plant.image} price={plant.price} plants={plants}  setPlants={setPlants} stockSit = {plant.isInStock} />
      })}
      </ul>
  );
}

export default PlantList;

