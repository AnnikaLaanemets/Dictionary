import React from "react";
import Meaning from "./Meaning";
import "./App.css";
import "./Interpretation.css";

export default function Interpretation(props) {
  if (props.interpretation) {
    return (
      <div className="interpretations">
        <section>
          <h2 className="mb-4">{props.interpretation.word}</h2>
          <h3 className="text-secondary mb-3">
            /{props.interpretation.phonetic}/
          </h3>
        </section>
        {props.interpretation.meanings.map(function (meaning, index) {
          return (
            <section>
              <div key={index}>
                <Meaning meaning={props.interpretation} index={index} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
