import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants, search, setSearch}) {
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search plants={plants} setPlants={setPlants} search={search} setSearch={setSearch}/>
      <PlantList plants={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
