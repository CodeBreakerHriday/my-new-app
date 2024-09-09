import React, { useEffect, useState } from 'react'

const Displayblog = ({bookmark}) => {
const [readingcount,setcount] = useState(0);
               let sum = 0;
     
               bookmark.map(b=>{
                              sum = sum + b.reading_time;
                              
                              
                          });
      
    
  return (
               
  <div>
  <h1 className='bg-gray-[#6047EC1A] mb-6 w-[380px] md:w-[411px] border-blue-400 text-[#6047EC] font-bold text-xl border-2 p-8 rounded-lg max-w-[411px] '>Spent time on read : {sum} min</h1>
  <div className='bg-gray-100 p-8 rounded-lg w-[380px] md:w-[411px] '>     
   <h1 className='text-xl font-bold mb-4'>Bookmarked Blogs : {bookmark.length}</h1>
    <div className='text-center'>
      {bookmark.map(book=><h1 className='bg-white rounded-lg p-5 mb-4 font-semibold text-lg'>{book.title}</h1>)}
    </div>
    </div>
  </div>
  )
}

export default Displayblog
