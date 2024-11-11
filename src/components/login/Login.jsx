import React from 'react'
import { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin, useSession } from '../contexts/session.context'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = useLogin()

  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const resp = await  fetch('http://localhost:2024/api/usuario/login', { 
      method: 'POST',
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        'Content-Type': 'application/json',
      }
     })
     
     if(resp.ok){
      const data = await resp.json()
      login(data.token)
     }

}

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <form 
      onSubmit={handleSubmit} 
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
          onChange={handlePassword}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
      <div className="text-center mt-3">
        <Link to="/registro" className="text-decoration-none text-secondary">Registro</Link>
      </div>
    </form>
  </div>

  )
}

export default Login