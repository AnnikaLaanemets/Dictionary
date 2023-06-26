import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Interpretation from "./Interpretation";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [interpretation, setInterpretation] = useState(null);

  function handleResponse(response) {
    setInterpretation(response.data);
  }

  function search(event) {
    let apiKey = "baf15f814713odta8a4baa99ed0733e5";
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    event.preventDefault();
    axios.get(url).then(handleResponse);
  }
  function handleSubmit(event) {
    setKeyword(event.target.value);
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
