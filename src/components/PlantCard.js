import React from "react";
import { useState } from "react";

function PlantCard({name, image, price, plants, setPlants, id, stockSit}) {

  const [stock, setStock] = useState(stockSit)

  const handlePatch = () => {
    
    fetch(`http://localhost:6001/plants/${id}`, {
      method:"PATCH",
      headers:{
        "Content-Type": "Application/JSON"
      },
      body:JSON.stringify({ isInStock: !stock })
    })
    .then((res)=> res.json())
    .then((data)=> {

      setStock(data.isInStock)
    })
    
   
  }

  
  const handleDelete = (id) => {

    const filtered = plants.filter((p)=> p.id !== id)

    fetch(`http://localhost:6001/plants/${id}`, {
      method:"DELETE",
    })
    .then((res)=> res.json())
    .then(() => setPlants(filtered))
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className="primary" onClick={handlePatch}>{!stock ? "sold out" : "In stock"}</button>
      <br></br>
      <button onClick={()=> handleDelete(id)}>❌</button>
    </li>
  );
}

export default PlantCard;
