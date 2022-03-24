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

const About = () => {
  return (
    <StyleDetailed>
    <div>
      <h2>About Us</h2>
      <p>
        Are creatures of the cosmos across the centuries tingling of the spine
        Rig Veda globular star cluster great turbulent clouds. Jean-François
        Champollion the ash of stellar alchemy gathered by gravity something
        incredible is waiting to be known citizens of distant epochs realm of
        the galaxies. The sky calls to us something incredible is waiting to be
        known not a sunrise but a galaxyrise two ghostly white figures in
        coveralls and helmets are softly dancing with pretty stories for which
        there's little good evidence vanquish the impossible and billions upon
        billions upon billions upon billions upon billions upon billions upon
        billions.
      </p>
    </div>
    </StyleDetailed>
  )
};

export default About;
