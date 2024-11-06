import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Registro = () => {
    const [nombre, setNombre] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const navigate = useNavigate()

    const handleNombre = (e) => {
        setNombre(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const resp = await fetch('http://localhost:2024/api/usuarios', {
            method: 'POST',
            body: JSON.stringify({ email: nombre, password: password }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (resp.ok) {
            navigate("/login")
        } else {
            const respuesta = await resp.json();
            setError(respuesta.mensaje)
        }

        //  const data = await resp.json()
        //  console.log(data.token);
        //    localStorage.setItem('token', data.token)
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">               
        <form onSubmit={handleSubmit}
          className="p-4 shadow-lg rounded" 
          style={{ width: '350px' }}
            >
                <h3 className="text-center mb-4 text-primary">Registrar Usuario</h3>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Ingresa tu correo"
                        onChange={handleNombre}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={handlePassword}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Registrar!</button>
                <div className="text-center mt-3">
                    <Link to="/login" className="text-decoration-none text-secondary">Ya tenes usuario?</Link>
                </div>
            </form>
        </div>

    )
}

export default Registro