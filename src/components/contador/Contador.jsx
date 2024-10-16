import React, { useState } from "react";

const Contador = () => {
  const [ contador, setContador ] = useState(0)
  const [ color, setColor ] = useState(false)
//   let contador = 0;
  const cambiarValor = () => {
    setContador( contador + 1 )
    setColor( !color )
  }
  return (
    <>
      <button className={ color ? "btn btn-primary" : "btn btn-danger" } onClick={ cambiarValor }>
        Sumar
      </button>
      {contador}
    </>
  );
};

export default Contador;
