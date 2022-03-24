import React from "react";

const NasaPhoto = (props) => {
    return (
        <div>
            <h1>NASA's Photo of The Day: </h1>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img alt={props.photo.title}src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto