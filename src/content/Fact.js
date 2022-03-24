import React from "react";
import styled from "styled-components";

const StyleDetailed = styled.div`
 display: flex;
 justify-content: center;
 width: 80%;
 padding: 2% 10%;
 border: 1px solid red;
 h2 {
   font-size: 2rem;
   padding: 1%;
 }
 p {
   font-size: 1.3rem;
   line-height: 1.7rem;
   padding: 2%;
 }
`



const Fact = () => {
  
  return (
    <StyleDetailed>
    <div>
      <h2>Space Fact Of The Day</h2>
      <p>
        Emerged into consciousness another world consciousness gathered by
        gravity Orion's sword of brilliant syntheses? Tunguska event brain is
        the seed of intelligence great turbulent clouds Tunguska event star
        stuff harvesting star light Tunguska event. Invent the universe kindling
        the energy hidden in matter extraordinary claims require extraordinary
        evidence kindling the energy hidden in matter citizens of distant epochs
        two ghostly white figures in coveralls and helmets are softly dancing
        and billions upon billions upon billions upon billions upon billions
        upon billions upon billions.
      </p>
    </div>
    </StyleDetailed>
  )
};

export default Fact;