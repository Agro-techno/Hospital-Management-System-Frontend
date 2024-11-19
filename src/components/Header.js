import React from 'react'

const Header = () => {
  return (
    <div className=' bg-slate-300 w-screen flex'>
    <div className='text-center ml-80 mt-2'>
    <ul className='flex'>
      <li className='m-3'>Home</li>
      <li className='m-3'>About</li>
      <li className='m-3'>Services</li>
      <li className='m-3'>Facilities</li>
      <li className='m-3'>Doctor</li>
      <li className='m-3'>Department</li>
      <li className='m-3'>Packages</li>
      <li className='m-3'>Gallery</li>
      <li className='m-3'>Contact Us</li>
    </ul>
    </div>
    <div className=''>
    <button className=' transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-700 duration-300 m-3 ml-4 p-2 rounded-md w-48'>Book Appoinment</button>
    </div>
     
    </div>
  )
}

export default Header