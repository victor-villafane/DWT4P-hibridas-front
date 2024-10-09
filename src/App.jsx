
function App(){
  //--------
    // console.log("LLAME AL COMPONENTE")
  const nombre = "mi nombre!"
  const usuarios = [
    { id: 1, name: 'Ana García', email: 'ana@example.com' },
    { id: 2, name: 'Carlos López', email: 'carlos@example.com' },
    { id: 3, name: 'Elena Martínez', email: 'elena@example.com' },
    { id: 4, name: 'David Rodríguez', email: 'david@example.com' },    
  ]
  //--------
  return( 
    <div>
      <h1>hola! { nombre }</h1>
      <ul>
        {/* <li>usuario 1</li> */}
        {
          usuarios.map( usuario => (
            <li> 
              <strong>{usuario.name}</strong> - { usuario.email } 
            </li>
          ) )
        }
      </ul>
    </div>
  )
}

export default App
