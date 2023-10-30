/** @format */

import React, { useState, useEffect } from "react";
import DogList from "../Components/DogList/DogList";
import Form from "../Components/Form/Form";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  const [dogsData, setDogsData] = useState([]);
  const [numberOfDogs, setNumberOfDogs] = useState(3);

  // And you will fetch the data with useEffect

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
      .then((response) => response.json())
      .then((data) => {
        setDogsData(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [numberOfDogs]); // useEffect will re-run whenever numberOfDogs changes

  return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState? */}

      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}

      <Form setNumberOfDogs={setNumberOfDogs} />

      <DogList dogsList={dogsData} />
    </div>
  );
}
