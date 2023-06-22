import React from "react";
import "./Interpretation.css";

export default function Meaning(props) {
  if (props.index < 5) {
    return (
      <div className="meanings">
        <div>
          <p>{props.meaning.meanings[props.index].partOfSpeech}</p>
        </div>
        <div>
          <p>{props.meaning.meanings[props.index].definition}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
