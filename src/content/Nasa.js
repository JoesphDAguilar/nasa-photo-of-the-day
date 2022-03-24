import React from "react";
import styled from "styled-components";

const StyleDetailed = styled.div`
 display: flex;
 justify-content: center;
 width: 80%;
 padding: 2% 10%;
 border: 1px solid red;
 h1 {
     font-size: 3.3rem;
 }
 h3 {
     font-size: 2rem;
 }
 p {
     font-size: 1.2rem;
     line-height: 1.7rem;
 }
`

const NasaPhoto = (props) => {
    return (
        <StyleDetailed>
        <div>
            <h1>NASA's Photo of The Day: </h1>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img className="nasaImg" alt={props.photo.title}src={props.photo.hdurl} />
         
            <p>{props.photo.explanation}</p>
        </div>
        </StyleDetailed>
    )
}

export default NasaPhoto