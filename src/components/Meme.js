import React from "react";
import memesdata from "../memesData.js";

let url;

function Meme() {
  const getMemeImage = () => {
    const memesArray = memesdata.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    console.log(url);
  };
  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" placeholder="top-text" />
        <input type="text" className="form-input" placeholder="bottom-text" />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme here!
        </button>
      </div>
    </main>
  );
}

export default Meme;
