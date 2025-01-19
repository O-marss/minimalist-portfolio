import  React  from 'react'
import './App.css'
import { createBrowserRouter, HashRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'

function App() {

  // let routers = createBrowserRouter([{
  //     path:'/minimalist-portfolio/', element: <Layout/>, children:[
  //     {index:true, element: <Home/>},
  //     {path:'about', element: <About/>},
  //     {path:'portfolio', element:<Portfolio/>},
  //     {path:'contact', element:<Contact/>},
  //     {path:'*', element:<NotFound/>},
  //   ]
  // }])
  
  return (
    <>
        <HashRouter>
      <Layout>
        <Routes>
          <Route path="/minimalist-portfolio/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="portfolio" element={<Portfolio/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Layout>
    </HashRouter>
    </>
  )
}

export default App
