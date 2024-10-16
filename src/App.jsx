import List from "./components/listar/List"
import Input from "./components/contador/Input"
import ListadoFetch from "./components/fetch/ListadoFetch"
function App(){
  //--------
    // console.log("LLAME AL COMPONENTE")
  const nombre = "mi nombre!"
  const listadoUsuarios = [
    { id: 1, name: 'Ana García', email: 'ana@example.com' },
    { id: 2, name: 'Carlos López', email: 'carlos@example.com' },
    { id: 3, name: 'Elena Martínez', email: 'elena@example.com' },
    { id: 4, name: 'David Rodríguez', email: 'david@example.com' },    
  ]
  //--------
  return( 
    <div>
      <h1>hola! { nombre }</h1>
      <List className="bg-danger" items={ listadoUsuarios } titulo={ "Mi Titulo" } />
      <Input></Input>
      <ListadoFetch />
    </div>
  )
}

export default App
