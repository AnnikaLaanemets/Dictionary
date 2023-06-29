import React from "react";
import "./Interpretation.css";
import Synonym from "./Synonym";

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
      <div className="row">
        <p className="col-3">
          {props.meaning.meanings[props.index].partOfSpeech}
        </p>
        <p className="col-9">
          {props.meaning.meanings[props.index].definitions[0].definition}
        </p>
      </div>
      <div>{Example()}</div>
      <div>
        <Synonym
          synonyms={props.meaning.meanings[props.index].synonyms}
          index={props.index}
        />
      </div>
    </div>
  );
}
