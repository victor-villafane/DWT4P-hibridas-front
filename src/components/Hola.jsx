import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProductos } from '../services/productos.service'
import Chat from './chat/Chat'

const Home = () => {

    const navigate = useNavigate()
  
    useEffect(  () => {
        getProductos()
            .then( datos => {
                console.log(datos)
            } )
            .catch( (err) => navigate("/login") )
    } )

    return (
    <div>
        <Chat></Chat>
    </div>
  )
}

export default Home