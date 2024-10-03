import React, { useEffect, useState } from "react";
import SidebarStats from "../components/SidebarStats/SidebarStats";
import axios from "axios";
import md5 from "md5";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  BarController,
  DoughnutController,
  PolarAreaController,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, PolarArea, Doughnut } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  BarController,
  DoughnutController,
  PolarAreaController,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const ComparePage = () => {
  const [selectedCharacter1, setSelectedCharacter1] = useState("");
  const [selectedCharacter2, setSelectedCharacter2] = useState("");
  const [characters, setCharacters] = useState([]);
  const [showData1, setShowData1] = useState([]);
  const [showData2, setShowData2] = useState([]);

  const publicKey = "10c22a7e7f2700afba4320c4894b0c68";
  const privateKey = "5061d7f027acda026ae7dd67568a0a5710b0815a";

  useEffect(() => {
    const fetchCharacters = async () => {
      const ts = new Date().getTime();
      const hash = md5(ts + privateKey + publicKey);
      const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

      try {
        const response = await axios.get(url);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  const handleSelectCharacter1 = (event) => {
    const selected = characters.find(
      (character) => character.id == event.target.getAttribute("data-value")
    );
    setSelectedCharacter1(event.target.getAttribute("data-value"));
    setShowData1(selected ? [selected] : []);
  };

  const handleSelectCharacter2 = (event) => {
    const selected = characters.find(
      (character) => character.id == event.target.getAttribute("data-value")
    );
    setSelectedCharacter2(event.target.getAttribute("data-value"));
    setShowData2(selected ? [selected] : []);
  };

  const getChartData = (data1, data2) => {
    const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];
    const labels = ["Comics", "Series", "Stories", "Events"];

    return {
      labels,
      datasets: [
        {
          label: data1.name,
          data: [
            data1.comics.available,
            data1.series.available,
            data1.stories.available,
            data1.events.available,
          ],
          backgroundColor: colors,
          borderColor: colors.map((color) => color.replace("0.2", "1")),
          borderWidth: 1,
        },
        {
          label: data2.name,
          data: [
            data2.comics.available,
            data2.series.available,
            data2.stories.available,
            data2.events.available,
          ],
          backgroundColor: colors.map((color) => color.replace("FF", "80")),
          borderColor: colors.map((color) => color.replace("0.2", "1")),
          borderWidth: 1,
        },
      ],
    };
  };

  const getDoughnutData = (character) => {
    const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];
    const labels = ["Comics", "Series", "Stories", "Events"];

    return {
      labels,
      datasets: [
        {
          data: [
            character.comics.available,
            character.series.available,
            character.stories.available,
            character.events.available,
          ],
          backgroundColor: colors,
          hoverBackgroundColor: colors,
        },
      ],
    };
  };

  return (
    <div className="wrap">
      <section className="page-content">
        <main className="main" style={{ width: "1030px" }}>
          <div className="main-header">
            <div className="main-header__heading">
              <h6>COMPARISON</h6>
            </div>
            <div className="main-header__updates">
              <h2>Select Characters to Compare</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>
                <strong>Select Your Character 1:</strong>
              </h5>
              <div className="dropdown">
                <button className="dropbtn">
                  Select Your Character 1 <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  {characters.map((character) => (
                    <a
                      key={character.id}
                      data-value={character.id}
                      onClick={handleSelectCharacter1}
                    >
                      {character.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col">
              <h5>
                <strong>Select Your Character 2:</strong>
              </h5>
              <div className="dropdown">
                <button className="dropbtn">
                  Select Your Character 2 <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  {characters.map((character) => (
                    <a
                      key={character.id}
                      data-value={character.id}
                      onClick={handleSelectCharacter2}
                    >
                      {character.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="main-overview">
              {[selectedCharacter1, selectedCharacter2].map(
                (characterId, index) => {
                  const character = characters.find(
                    (char) => char.id == characterId
                  );
                  return character ? (
                    <div key={index} className="overviewcard">
                      <img
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt={character.name}
                        style={{
                          borderRadius: "20px",
                          width: "150px",
                          height: "150px",
                        }}
                      />
                      <div className="overview-info">
                        <div className="row">
                          <h7 className="col">Name: {character.name}</h7>
                        </div>
                        <div className="row">
                          <h7 className="col">
                            Comics: {character.comics.available}
                          </h7>
                        </div>
                        <div className="row">
                          <h7 className="col">
                            Series: {character.series.available}
                          </h7>
                        </div>
                        <div className="row">
                          <h7 className="col">
                            Stories: {character.stories.available}
                          </h7>
                        </div>
                        <div className="row">
                          <h7 className="col">
                            Events: {character.events.available}
                          </h7>
                        </div>
                      </div>
                      <div
                        className="chart-container"
                        style={{ width: "150px", height: "150px" }}
                      >
                        <Doughnut
                          data={getDoughnutData(character)}
                          options={{ responsive: true }}
                        />
                      </div>
                    </div>
                  ) : null;
                }
              )}
            </div>
            {showData1.length > 0 && showData2.length > 0 && (
              <>
                <div className="compare-main-cards">
                  <div className="compare-card-wrapper">
                    <h6>Character Comparison:</h6>
                    <div className="compare-card">
                      <div
                        className="chart-container"
                        style={{ height: "700px" }}
                      >
                        <Bar
                          data={getChartData(showData1[0], showData2[0])}
                          options={{ responsive: true }}
                        />
                      </div>
                    </div>
                    <div className="compare-card">
                      <div
                        className="chart-container"
                        style={{ height: "700px" }}
                      >
                        <Bar
                          data={getChartData(showData2[0], showData1[0])}
                          options={{ responsive: true }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="compare-card-wrapper">
                    <h6>Character Comparison:</h6>
                    <div className="compare-card">
                      <div
                        className="chart-container"
                        style={{ height: "700px" }}
                      >
                        <PolarArea
                          data={getChartData(showData1[0], showData2[0])}
                          options={{ responsive: true }}
                        />
                      </div>
                    </div>
                    <div className="compare-card">
                      <div
                        className="chart-container"
                        style={{ height: "700px" }}
                      >
                        <PolarArea
                          data={getChartData(showData2[0], showData1[0])}
                          options={{ responsive: true }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </section>
      <div id="sidebar-right">
        <SidebarStats />
      </div>
    </div>
  );
};

export default ComparePage;
