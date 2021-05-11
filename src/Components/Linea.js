import React, {useState, useEffect} from "react";
import styled from "styled-components";

const StyledDiv = styled.div` 
    color: white;
    font-size: 1.6rem;
    background: #aaa;
    border: 4px solid black;
    margin: 2rem 20% 2rem 20%;
    padding: 2rem 2rem 2rem 10%;
`





function useListarTexto() {
    const [texto, setTexto] = useState ([]);

    useEffect (()=> {
        fetch ("./texto.json")
        .then(response=> response.json())
        .then(data => setTexto(data))
        }
    , []);
    


    
    return (
      <StyledDiv>
          {texto.map(item => <div key={item.id}>{item.texto}</div>)}
      </StyledDiv>
    );
};
export default useListarTexto;