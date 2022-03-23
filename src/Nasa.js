import React from "react";

const NasaPhoto = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <img alt={props.title}src={props.hdurl} />
            <p>{props.explanation}</p>
        </div>
    )
}

export default NasaPhoto