import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()
  
    useEffect(  () => {
        const resp =  fetch('http://localhost:2024/api/productos',{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("token")
            }
        })
        .then( async(resp) => {
                const datos = await resp.json()
                console.log(datos)
        } )
        .catch( (err) => navigate("/login") )
      
    } )

    return (
    <div>Home</div>
  )
}

export default Home