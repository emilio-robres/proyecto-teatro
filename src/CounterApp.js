import React,{useState} from "react"
import styled from "styled-components";


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
function CounterApp (){

    const [counter, setCounter]= useState(0);
    const incrementCounter = ()=>setCounter(counter+1);
    const decrementCounter= ()=> setCounter(counter-1);
    return(
        <div>
            <StyledButton onClick={decrementCounter}>Anterior</StyledButton>
            <StyledButton onClick={incrementCounter}>Siguiente</StyledButton>
           <h1>Counter {counter}</h1> 
        </div>
    )
}
export default CounterApp;