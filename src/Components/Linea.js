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
const StyledButton = styled.button`
    width:50%;
    height:50px;
    font-size: 1.4rem;
    background: #aaa;
    border: 1px solid black;
    :hover{
    background: white;
    }

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
    <div>
        <StyledButton>Anterior</StyledButton>
        <StyledButton>Siguiente</StyledButton>

        <StyledDiv>
          {texto.map((item , index) => <div key={index}>{item.texto} - {index}</div>)}
        </StyledDiv>
    </div>
    );
};
export default useListarTexto;