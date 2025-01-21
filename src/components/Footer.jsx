import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 bg-gradient-to-b to-black via-black from-gray-800 px-2 py-4 text-white'>
        <h2>@ 2025 Sayyad Azeem</h2>
        <div className='flex justify-center items-center gap-5'>
            <a className='hover:underline cursor-pointer'>Privacy Policy</a>
            <a className='hover:underline cursor-pointer'>Terms & Conditions</a>
        </div>
    </div>
  )
}

export default Footer