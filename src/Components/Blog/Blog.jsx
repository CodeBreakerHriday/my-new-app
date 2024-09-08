import React, { useEffect, useState } from 'react'
import bookmark from '../../images/bookmark.png'
const Blog = () => {
const [blogs,setblog] = useState([]);
const [titles,setTitle] = useState('');
const date = new Date();
console.log(date.getMinutes());

const displayText=(title)=>{
  console.log(title);
  setTitle(title);
 
}
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
  <div className='flex gap-6'>
      <div>
      {blogs.map(blog=><div className='mb-10  w-[320px] md:w-[750px] lg:w-[750px]  shadow-lg rounde-md p-4 w-[850px]'>
               
               <img className=' md:w-[750px] lg:w-[750px] w-[360px] p-4   mb-8' src={blog.cover_image} alt="" />
               <div className='flex justify-between   w-[360px] md:w-[700px] lg:w-[700px] mb-4'>
               <div className="image-author w-[200px] container flex  gap-6">
               <img className='w-[50px] h[50px] rounded-full ' src={blog.author_img} alt="" />
               <div>
               <h1 className='text-xl font-bold'>{blog.author_name}</h1>   
               <p className='text-md text-gray-600 font-semibold'>{blog.posted_time}</p>     
               </div>
               </div>
               <div className='flex justify-center  items-center'>
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
               <button><u onClick={(()=>displayText(blog.title))} className='text-[#6047EC] font-bold'>Mark as read</u></button>
               
      </div>)}
    </div>
    <div className='spent time '>
               <h1 className='text-[#6047EC] w-[410px] border-2 border-blue-500 px-12 mb-6 py-5 rounded-lg bg-[#6047EC1A]  text-[24px] text-center text-semibold'>Spent time on read :</h1>
              <div className='w-[410px] p-4 rounded-lg bg-gray-100 px-8'>
                <h1 className='text-[24px] font-semibold'>Bookmarked blogs:</h1>
              <div className=' p-5  rounded-lg bg-white rounded-md'>
                    
               <h1 className=' text-[24px] text-center text-semibold'>{titles}</h1>
              </div>
              </div>
    </div>
  </div>
  )
}

export default Blog
