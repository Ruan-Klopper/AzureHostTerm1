import React from "react";
import "./HeroImage.css";

export default function HeroImage() {
  return (
    <header className="hero-container">
      <div
        className="p-5 text-center bg-image hero-image-container"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2022/10/29/08/12/superhero-7554694_1280.jpg')",
        }}
      >
        <div className="overlay"></div>
        <div className="mask">
          <div className="hero-container">
            <div className="hero-text-container">
              <h1 className="mb-3">Welcome to the Marvel Comics Dashboard!</h1>
              <p className="mb-3">
                Explore the vast universe of Marvel Comics. Discover detailed
                information about your favorite heroes, villains, and events.
                Dive into the history of Marvel comics, compare different
                characters, and stay updated with the latest comic releases.
                Whether you're a die-hard fan or new to the Marvel Universe,
                there's something here for everyone. Start exploring now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
