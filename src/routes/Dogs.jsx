import React, { useEffect, useState } from "react";
import axios from "axios";

const Dogs = () => {
  const [dogImageUrl, setDogImageUrl] = useState("");
  const [racecards, setRacecards] = useState([]);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setDogImageUrl(response.data.message);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      }
    };

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
        setRacecards(response.data);
      } catch (error) {
        console.error("Error fetching race cards data:", error);
      }
    };

    fetchDogImage();
    fetchRacecards();
  }, []);

  const handleFetchDogImage = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDogImageUrl(response.data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.dogsContainer}>
        <h1 style={styles.heading}>Random Dog Image</h1>
        <div style={styles.imageContainer}>
          <img src={dogImageUrl} alt="Dog" style={styles.image} />
        </div>
        <p style={styles.url}>{dogImageUrl}</p> {/* Display dog image URL */}
        <button style={styles.button} onClick={handleFetchDogImage}>
          Fetch New Dog Image
        </button>
      </div>
      <div style={styles.racecardsContainer}>
        <h2>Horse Racing Cards</h2>
        {racecards.map((race, index) => (
          <div key={index} style={styles.racecard}>
            <p>Course: {race.course}</p>
            <p>Distance: {race.distance}</p>
            <p>Title: {race.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  dogsContainer: {
    marginBottom: 40,
    textAlign: "center",
  },
  heading: {
    marginBottom: 20,
    fontWeight: "bold",
    color: "pink",
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: "50%",
  },
  url: {
    marginBottom: 10,
    color: "blue",
    fontFamily: "Arial, sans-serif",
    fontSize: 14,
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontSize: 16,
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  racecardsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  racecard: {
    marginBottom: 20,
    padding: 10,
    border: "1px solid #ccc",
    borderRadius: 5,
    textAlign: "center",
    width: 350,
    height: 150,
  },
};

export default Dogs;
