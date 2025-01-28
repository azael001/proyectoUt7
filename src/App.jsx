import 'regenerator-runtime/runtime';
import React from 'react'
import Historia from './components/Historia'
import Home from './components/Home'
import Pista from './components/Pista'
import Explicacion from './components/explicacion';



//import Pruebas from './components/Pruebas'
//importamos la función createBrowserRouter y el componente RouterProvider
//de la librería react-router-dom
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    children: [
    
      {
        index: true,
        element: <Home />
      },
      {
        path: '/historia',
        element: <Historia/>
      },
      {
        path: '/pista',
        element: <Pista/>
      },
      {
        path: '/explicacion',
        element: <Explicacion/>
      },

      
    ]
  }
])

function App() {
  return (
       
    <RouterProvider router={router} />
  );
}

export default App;
