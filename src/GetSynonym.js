import React from "react";
import "./Interpretation.css";

export default function GetSynonym(props) {
  let synonyms = props.synonyms;
  if (synonyms) {
    return (
      <ul className="mt-3 fs-6">
        <span>Synonyms:&nbsp;</span>
        {synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
