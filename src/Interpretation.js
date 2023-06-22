import React from "react";
import Meaning from "./Meaning";
import "./Interpretation.css";

export default function Interpretation(props) {
  console.log(props.interpretation);
  if (props.interpretation) {
    return (
      <div className="interpretations">
        <h2>{props.interpretation.word}</h2>
        <h3>/{props.interpretation.phonetic}/</h3>
        {props.interpretation.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={props.interpretation} index={index} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
