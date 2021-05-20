import React, { useState } from "react";
// import styled from "styled-components";

// const StyledDiv = styled.div`
//     color: white;
//     font-size: 1.6rem;
//     background: #aaa;
//     border: 4px solid black;
//     margin: 2rem 20% 2rem 20%;
//     padding: 2rem 2rem 2rem 10%;
// `

function Linea(props) {

    return (
      <>
        {props.currentSentence}
      </>
    )
  // Pasar este jsx a un componente hijo que es linea.js
  //Props el index y linea.js importa textos.json
  //Props la linea de texto en string  - habría que modificar state de app para guardar la frase en lugar del index
  //Frase!!!
}

export default Linea;
