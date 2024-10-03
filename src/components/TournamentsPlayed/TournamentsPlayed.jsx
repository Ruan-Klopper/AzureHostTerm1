import React, { useEffect, useState } from "react";
import axios from "axios";
import md5 from "md5";
import "./TournamentsPlayed.css";

const TournamentsPlayed = () => {
  const [comics, setComics] = useState([]);

  const publicKey = "10c22a7e7f2700afba4320c4894b0c68";
  const privateKey = "5061d7f027acda026ae7dd67568a0a5710b0815a";

  useEffect(() => {
    const fetchComics = async () => {
      const ts = new Date().getTime();
      const hash = md5(ts + privateKey + publicKey);
      const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

      try {
        const response = await axios.get(url);
        setComics(response.data.data.results);
      } catch (error) {
        console.error("Error fetching comics:", error);
      }
    };

    fetchComics();
  }, []);

  return (
    <div>
      <h3 className="lime-h3">Marvel Comics</h3>
      <table className="racing-results-table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Issue Number</th>
            <th>Page Count</th>
            <th>On Sale Date</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {comics.map((comic, index) => (
            <tr key={comic.id}>
              <td>
                <div className="icon-placeholder">
                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </td>
              <td>{comic.title}</td>
              <td>{comic.issueNumber}</td>
              <td>{comic.pageCount}</td>
              <td>
                {
                  comic.dates
                    .find((date) => date.type === "onsaleDate")
                    ?.date.split("T")[0]
                }
              </td>
              <td>{comic.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TournamentsPlayed;
