import React, { useEffect, useState } from "react";
import axios from "axios";
import md5 from "md5";
import "./SidebarStats.css";

const SidebarStats = () => {
  const [characters, setCharacters] = useState([]);

  const publicKey = "10c22a7e7f2700afba4320c4894b0c68";
  const privateKey = "5061d7f027acda026ae7dd67568a0a5710b0815a";

  useEffect(() => {
    const fetchCharacters = async () => {
      const ts = new Date().getTime();
      const hash = md5(ts + privateKey + publicKey);
      const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

      try {
        const response = await axios.get(url);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="sidebar" style={{ width: "85%" }}>
      <div className="user-profile">
        <a className="nav-link" href="#/admin/user">
          <img
            src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
            className="user-image"
          />
          <p>John Doe</p>
        </a>
      </div>
      <hr className="divider" />
      <h3 className="lime-h3">Marvel Characters</h3>
      <table className="racing-results-table">
        <tbody>
          {characters.map((character, index) => (
            <tr key={character.id}>
              <td>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                  className="character-image"
                  style={{
                    width: "65px",
                    height: "60px",
                    borderRadius: "20px",
                  }}
                />
              </td>
              <td>{character.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SidebarStats;
