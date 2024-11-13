import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registro } from '../../services/auth.service'

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
        try {
            await registro(nombre, password)
            navigate("/")
        } catch (error) {
            setError(error.mensaje)
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
                {
                    error && <p className='text-danger' >{error}</p>
                }
            </form>
        </div>

    )
}

export default Registro