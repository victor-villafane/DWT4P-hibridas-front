import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/layout.jsx';
import Home from './components/Hola.jsx';
import Login from './components/login/Login.jsx';
import Registro from './components/login/Registro.jsx';
import ListadoLibros from './components/libros/ListadoLibros.jsx';
import LibroDetalle from './components/libros/LibroDetalle.jsx';
import Logout from './components/login/Logout.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registro",
        element: <Registro />
      },
      {
        path: "/libros",
        element: <ListadoLibros />
      },
      {
        path: "/libro/:id",
        element: <LibroDetalle />
      },
      {
        path: "/logout",
        element: <Logout />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
