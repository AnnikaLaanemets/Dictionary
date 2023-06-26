import React from "react";
import "./Interpretation.css";
import GetSynonym from "./GetSynonym";

export default function Meaning(props) {
  function Example() {
    let example = props.meaning.meanings[props.index].example;
    if (example) {
      return (
        <p className="text-secondary mt-3 fs-6">
          Example:&nbsp;<em>{example}</em>
        </p>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="meanings">
      <div class="row">
        <p class="col-3">{props.meaning.meanings[props.index].partOfSpeech}</p>
        <p class="col-9">{props.meaning.meanings[props.index].definition}</p>
      </div>
      <div>{Example()}</div>
      <div>
        <GetSynonym
          synonyms={props.meaning.meanings[props.index].synonyms}
          index={props.index}
        />
      </div>
    </div>
  );
}
