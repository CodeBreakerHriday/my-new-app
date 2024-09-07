import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import newimage from '../src/images/profile.png'
import Header from './Components/Header/Header'
import Blog from './Components/Blog/Blog'

function App() {


  return (
    <>
      <div className='px-20'>
    
        <Header></Header>
        <Blog></Blog>
      
      </div>
    </>
  )
}

export default App
