import React from "react";
import "./Interpretation.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key="{index}">
                <a href={photo.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid mt-2"
                    alt={photo.photographer}
                    key={index}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
