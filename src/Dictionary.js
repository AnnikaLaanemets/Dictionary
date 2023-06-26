import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Interpretation from "./Interpretation";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [interpretation, setInterpretation] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleSubmit(event) {
    setKeyword(event.target.value);
  }
  function handleImages(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setInterpretation(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "baf15f814713odta8a4baa99ed0733e5";
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
    let picturesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(picturesUrl).then(handleImages);
  }

  if (interpretation) {
    return (
      <div className="dictionary">
        <section>
          <form onSubmit={search}>
            <input
              type="text"
              placeholder="🔍 Search word"
              autoComplete="off"
              autoFocus="on"
              onChange={handleSubmit}
            ></input>
          </form>
        </section>
        <div>
          <Interpretation interpretation={interpretation} />
        </div>
        <div>
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={search}>
            <input
              type="text"
              placeholder="🔍 Search word"
              autoComplete="off"
              autoFocus="on"
              onChange={handleSubmit}
            ></input>
          </form>
          <p className="mt-4 fs-5 text-muted">
            i.e. celestial, contemporary, silhouette, verdant
          </p>
        </section>
      </div>
    );
  }
}
