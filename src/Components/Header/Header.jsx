import React from 'react'
import profile from '../../images/profile.png'
const Header = () => {
  return (
  <>
    <div className='header w-[360px] md:w-full  lg:w-full flex justify-center md:justify-between lg:gap-0 gap-10 items-center py-4 px-20 mb-[64px] mt-5 shadow-lg'>
      <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  </>
  )
}

export default Header
