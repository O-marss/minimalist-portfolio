import  React  from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'

function App() {

  let routers = createBrowserRouter([{
    path:'/', element: <Layout/>, children:[
      {index:true, element: <Home/>},
      {path:'about', element: <About/>},
      {path:'portfolio', element:<Portfolio/>},
      {path:'contact', element:<Contact/>},
      {path:'*', element:<NotFound/>},
    ]
  }])
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
