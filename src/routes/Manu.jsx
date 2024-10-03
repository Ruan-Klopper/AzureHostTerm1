// Manu.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderGallery from "../components/SliderGallery/SliderGallery";

const RaceDetails = ({ race }) => {
  return (
    <div>
      <h2>Race Details</h2>
      <p>Track: {race.track}</p>
      <p>Time: {race.time}</p>
      {/* Add more details as needed */}
    </div>
  );
};

const Manu = () => {
  const [race, setRace] = useState(null);

  useEffect(() => {
    const fetchRacecards = async () => {
      const racecardsOptions = {
        method: "GET",
        url: "https://horse-racing.p.rapidapi.com/racecards",
        params: { date: "2020-03-12" },
        headers: {
          "X-RapidAPI-Key":
            "760d5078f9msh46aad0bfc90c7f3p11f496jsn4bbc447edfaf",
          "X-RapidAPI-Host": "horse-racing.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(racecardsOptions);
        console.log(response.data);
        // Assuming response.data is an array of races, you can select one race
        if (response.data.length > 0) {
          setRace(response.data[0]); // Set the first race details
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRacecards();
  }, []);

  return (
    <div>
      <h1>API Call Exercise</h1>
      <SliderGallery />
      {/* Render RaceDetails component if race exists */}
      {race && <RaceDetails race={race} />}
    </div>
  );
};

export default Manu;
