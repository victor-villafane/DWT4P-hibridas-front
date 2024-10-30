import React, { useState } from 'react'

const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:2024/api/usuario/login", {
            method: 'POST',
            body: JSON.stringify({ email: email, password: pass }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data.token)
        localStorage.setItem('token', data.token)
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <form onSubmit={handleSubmit}
                    className="p-4 shadow-lg rounded" 
                    style={{ width: '350px', backgroundColor: '#f9f9f9' }}
            >
                <h3 className="text-center mb-4 text-primary">Iniciar Sesión</h3>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Ingresa tu correo"
                    onChange={handleEmail}
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
                    onChange={handlePass}
                    required
                    />
                </div>
                <button className='btn btn-primary w-100' type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login