import React, { useState } from "react";
import Linea from "./Linea.js";
import data from "./textos.json";
import Controls from "./Controls";

function App() {

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((currentIndex) => currentIndex - 1)
  const next = () =>setIndex((currentIndex) => currentIndex + 1)
  
  return (
    <>
      <Controls 
        currentIndex ={index}
        currentPrev={prev}
        currentNext={next}
        total={data.length}/> 

      <Linea currentSentence={data[index].texto}/>
    </>
  );
}
export default App;
