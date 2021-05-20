import React from "react";



// const StyledButton = styled.button`
//     width:50%;
//     height:50px;
//     font-size: 1.4rem;
//     background: #aaa;
//     border: 1px solid black;
//     :hover{
//     background: white;
//     }
// `

function Controls(props) {

    return (
        <>
            <button
                onClick={props.currentPrev}
                disabled={props.currentIndex === 0}
            >
                Anterior
            </button>
            <button 
                onClick={props.currentNext}
                disabled={props.currentIndex >= props.total}
            >
                Siguiente
            </button>
            index:{props.currentIndex},
            total:{props.total}
        </>

    )};
    export default Controls;