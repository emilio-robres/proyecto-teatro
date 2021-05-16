import React, {useState, useEffect} from "react";
import styled from "styled-components";
// import CounterApp from "./CounterApp.js"


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
        fetch ("./archivo.json")
        .then(response=> response.json())
        .then(data => setTexto(data))
        }
    , []);
    
    

    
    return (
    <div>
        
        
        <StyledDiv>
            
          {texto.map((item, id) => <div key={"id"}> {item.texto[0]}</div>)}
         
        </StyledDiv>
    </div>
    );
};
export default useListarTexto;