import React, { useState } from 'react'
import bookmark from '../../images/bookmark.png'
const Blog = ({blog,handlebookmark}) => {
             
               const {cover_image,author_img,hashtag,title,author_name,posted_time,reading_time} = blog;
  let click = 0;
  const count = ()=>{
   click++;
    console.log(click);
  }
             
  return (
    <div className=''>
    <div className='mb-10 w-[380px] md:w-[750px] shadow-lg rounde-md p-6 '>
               
               <img className='w-[350px] md:w-[750px]   mb-8' src={cover_image} alt="" />
               <div className='flex justify-between w-[320px]  md:w-[700px]   mb-4'>
               <div className="image-author w-[250px] container flex  gap-6">
               <img className='w-[50px] h-[50px] rounded-full ' src={author_img} alt="" />
               <div>
               <h1 className='text-xl font-bold'>{author_name}</h1>   
               <p className='text-md text-gray-600 font-semibold'>{posted_time}</p>     
               </div>
               </div>
               <div className='flex justify-center  items-center'>
               <p  className='text-gray-500 w-[150px] text-center font-semibold text-xl'>{reading_time} min read</p>
               <button onClick={()=>handlebookmark(blog)}><img className='w-[30px]' src={bookmark} alt="" /></button>
               </div>
               </div>
               <h1 className='text-4xl font-bold mb-4'>{title}</h1>
               <ul className='mb-4'>
               {
               hashtag.map(hash=><span className=' text-md mr-1 text-gray-400 font-semibold'>{hash}</span>)
               }
               </ul>
               
               
      </div>
      
    </div>
  )
}

export default Blog
