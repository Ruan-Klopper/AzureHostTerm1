import React from "react";
<<<<<<< HEAD
import "./Gallery.css"; // Ensure this CSS file is correctly imported
=======
import "./Gallery.css";
>>>>>>> ea5d899a4 (Your commit message)

const ImageGallery = ({ comics }) => {
  return (
    <div className="singleLineImageContainer">
      {comics.slice(0, 9).map((comic, index) => (
        <div key={index} className="image">
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
          <div className="image-overlay">{comic.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
