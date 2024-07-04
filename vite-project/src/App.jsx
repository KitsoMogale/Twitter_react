import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { Layout } from './Components/Layout'
import { Home } from './Components/Home'
import { Replies } from './Components/Replies'
import { Profile } from './Components/Profile'

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/:id/replies' element={<Replies/>}/>
            <Route path='/:id/profile' element={<Profile/>}/>
          </Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
