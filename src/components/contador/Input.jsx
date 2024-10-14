import React, { useState } from 'react'
const Input = () => {
  
  const [ texto, setTexto ] = useState("")
  
  const cambiarValor = (event) => {
    setTexto(event.target.value)
  }

  return (
    <div>
        <input onChange={ cambiarValor } type="text" name="nombre" id="nombre" />
        <p> Valor Input: {texto} </p>
    </div>
  )
}

export default Input