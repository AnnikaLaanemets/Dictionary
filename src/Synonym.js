import React from "react";
import "./Interpretation.css";

export default function Synonym(props) {
  let synonyms = props.synonyms;

  if (synonyms.length > 0) {
    return (
      <ul className="mt-3 fs-6">
        <span>Synonyms:&nbsp;</span>
        {synonyms.map(function (synonym, index) {
          if (index < 10) {
            return <li key={index}>{synonym}</li>;
          } else {
            return null;
          }
        })}
      </ul>
    );
  } else {
    return null;
  }
}
