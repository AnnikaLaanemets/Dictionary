import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Interpretation.css";

export default function Interpretation(props) {
  if (props.interpretation) {
    return (
      <div className="interpretations">
        <section>
          <h2 className="mb-4">{props.interpretation.word}</h2>
          <h3 className="text-secondary mb-3">
            {props.interpretation.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetics={phonetic} />
                </div>
              );
            })}
          </h3>
        </section>
        {props.interpretation.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
