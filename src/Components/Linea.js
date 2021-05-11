import React, {useState, useEffect} from "react";

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
          {texto.map(item => <div key={item.id}>{item.texto}</div>)}
      </div>
    );
};
export default useListarTexto;