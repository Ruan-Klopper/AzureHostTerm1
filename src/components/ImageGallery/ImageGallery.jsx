import React from "react";
import "./Gallery.css";

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
