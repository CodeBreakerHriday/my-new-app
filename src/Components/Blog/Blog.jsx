import React, { useEffect, useState } from 'react'
import bookmark from '../../images/bookmark.png'
const Blog = () => {
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
    <div>
      {blogs.map(blog=><div className='mb-10 shadow-lg rounde-md p-4 w-[850px]'>
               
               <img className='w-[800px] p-4   mb-8' src={blog.cover_image} alt="" />
               <div className='flex justify-center w-[800px] mb-4'>
               <div className="image-author container flex gap-6">
               <img className='w-[50px] h[50px] rounded-full ' src={blog.author_img} alt="" />
               <div>
               <h1 className='text-xl font-bold'>{blog.author_name}</h1>   
               <p className='text-md text-gray-600 font-semibold'>{blog.posted_time}</p>     
               </div>
               </div>
               <div className='flex justify-center items-center'>
               <p  className='text-gray-500 w-[150px] text-center font-semibold text-xl'>{blog.reading_time}</p>
               <img className='w-[30px]' src={bookmark} alt="" />
               </div>
               </div>
               <h1 className='text-4xl font-bold mb-4'>{blog.title}</h1>
               <ul className='mb-4'>
               {
               blog.hashtag.map(hash=><span className='text-md mr-4 text-gray-400 font-semibold'>{hash}</span>)
               }
               </ul>
               <u className='text-[#6047EC] font-bold'>Mark as read</u>
               
      </div>)}
    </div>
  )
}

export default Blog
