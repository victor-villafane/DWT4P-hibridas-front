import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProductos } from '../services/productos.service'

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
    <div>Home</div>
  )
}

export default Home