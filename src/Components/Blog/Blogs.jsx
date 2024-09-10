import React, { useEffect, useState } from 'react'

import Blog from './Blog';

const Blogs = ({handlebookmark,markasread}) => {
  const [blogs,setblog] = useState([]);
useEffect(()=>{
            const fetchiData= async() =>{
               const res = await fetch('Data.json');
               const data = await res.json();
               console.log(data);
               setblog(data);
            }  
            fetchiData();
},[])
  return (
 
      <div className=''>
      {blogs.map(blog=><Blog key={blog.id} 
      blog={blog}
      handlebookmark={handlebookmark} 
      markasread={markasread}
       />)}
    </div>
   
  
  )
}

export default Blogs
