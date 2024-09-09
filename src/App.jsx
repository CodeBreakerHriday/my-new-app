import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Components/Header/Header'

import Blogs from './Components/Blog/Blogs'
import Displayblog from './Components/Displayblog/Displayblog'


function App() {

const [bookmark,setbookmark] = useState([]);

const handlebookmark = blog =>{
  console.log('bookmark is added');
  const newbookmarks = [...bookmark,blog];
  setbookmark(newbookmarks);
 
}

  return (
    <>
      <div className='pr-5 pl-4 md:px-20'>
    
        <Header></Header>
        <div className='flex flex-col md:flex-row gap-6'>
        <Blogs handlebookmark={handlebookmark}></Blogs>
        <Displayblog bookmark={bookmark} ></Displayblog>
        </div>
      
      </div>
    </>
  )
}

export default App
