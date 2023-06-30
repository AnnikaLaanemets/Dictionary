import React from "react";
import Synonym from "./Synonym";

export default function Meaning(props) {
  let definitions = props.meaning.definitions;

  function Example({ example }) {
    if (example) {
      return (
        <div className="mt-3 ms-3">
          Example: <em className=" fs-6 text-secondary">{example}</em>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="meanings">
      {definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <section key={index}>
              <div className="row">
                <p className="col-3 mt-4">{props.meaning.partOfSpeech}</p>
                <p className="col-9 mt-4">{definition.definition}</p>
                <div>
                  <Example example={definition.example} />
                </div>
                <div>
                  <Synonym synonyms={props.meaning.synonyms} />
                </div>
              </div>
            </section>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
