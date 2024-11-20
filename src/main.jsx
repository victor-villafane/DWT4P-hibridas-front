import { createContext, StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/layout.jsx';
import Home from './components/Hola.jsx';
// import Login from './components/login/Login.jsx';
// import Registro from './components/login/Registro.jsx';
// import ListadoLibros from './components/libros/ListadoLibros.jsx';
// import LibroDetalle from './components/libros/LibroDetalle.jsx';
import Logout from './components/login/Logout.jsx';
import ProtectedRoute from "./components/layout/ProtectedRoute.jsx"
import ImageUpload from './components/upload/ImageUpload.jsx';

const ListadoLibros = lazy( () => import("./components/libros/ListadoLibros.jsx") )
const LibroDetalle = lazy( () => import("./components/libros/LibroDetalle.jsx") )
const Login = lazy( () => import("./components/login/Login.jsx") )
const Registro = lazy( () => import("./components/login/Registro.jsx") )

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute><Home /></ProtectedRoute>
      },
      {
        path: "/login",
        element: <Suspense fallback={ <div>Cargando...</div> } ><Login /></Suspense>
      },
      {
        path: "/registro",
        element: <Suspense fallback={ <div>Cargando...</div> } ><Registro /></Suspense>
      },
      {
        path: "/libros",
        element:  <Suspense fallback={ <div>Cargando...</div> } >
                    <ListadoLibros />
                  </Suspense>
      },
      {
        path: "/libro/:id",
        element: <Suspense fallback={ <div>Cargando...</div> } ><LibroDetalle /></Suspense>
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/upload",
        element: <ImageUpload/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
