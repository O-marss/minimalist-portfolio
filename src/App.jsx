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
      {path:'minimalist-portfolio', element: <Home/>},
      {path:'minimalist-portfolio/about', element: <About/>},
      {path:'minimalist-portfolio/portfolio', element:<Portfolio/>},
      {path:'minimalist-portfolio/contact', element:<Contact/>},
      {path:'minimalist-portfolio/*', element:<NotFound/>},
    ]
  }])
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
