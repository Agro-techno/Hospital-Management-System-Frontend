import React from 'react'
import img1 from './Images/Hospitals.jpg';
import ur from './Images/UROLOGY.png';
const Home = () => {
  return (
    <div >
        <img className='w-screen h-96 mt-2' src={img1} alt='Logo' ></img>

        <div className=' bg-slate-200 h-80  justify-items-center flex '>
          <div className='h-48 w-56 bg-slate-100 ml-80 '>
            <h1 className='mt-3'>Contact Us</h1>
             <p>mishra@gmail.comm</p>
             <p>9565666666</p>

          </div>
          <div className='h-48 w-56 bg-slate-100 mx-1 border-orange-600'>
            <h1 className='mt-3'>Opening Hours</h1>
             <p>Monday-Sunday</p>
             <p>24*7 Available</p>

          </div>
          <div className='h-48 w-56 bg-slate-100 '>
            <h1 className='mt-3'>Clinic Location</h1>
             <p>mishra@gmail.comm</p>
             <p>9565666666</p>

          </div>

        </div>
        <div className=' bg-slate-100 h-96 grid grid-cols-4'>
          <div className='bg-white h-40 w-48 rounded-sm shadow-lg'>
            <img src={ur} alt='urology' className='ml-16'></img>
            <h1 className='font-bold text-red-700 text-center mt-6'>UROLOGY</h1>
          </div>
          <div className='bg-white h-40 w-48 rounded-sm shadow-lg'>
            <img src={ur} alt='urology' className='ml-16'></img>
            <h1 className='font-bold text-red-700 text-center mt-6'>UROLOGY</h1>
          </div>
          <div className='bg-white h-40 w-48 rounded-sm shadow-lg'>
            <img src={ur} alt='urology' className='ml-16'></img>
            <h1 className='font-bold text-red-700 text-center mt-6'>UROLOGY</h1>
          </div>
          <div className='bg-white h-40 w-48 rounded-sm shadow-lg'>
            <img src={ur} alt='urology' className='ml-16'></img>
            <h1 className='font-bold text-red-700 text-center mt-6'>UROLOGY</h1>
          </div>
          <div className='bg-white h-40 w-48 rounded-sm shadow-lg'>
            <img src={ur} alt='urology' className='ml-16'></img>
            <h1 className='font-bold text-red-700 text-center mt-6'>UROLOGY</h1>
          </div>
          <div className='bg-white h-40 w-48 rounded-sm shadow-lg'>
            <img src={ur} alt='urology' className='ml-16'></img>
            <h1 className='font-bold text-red-700 text-center mt-6'>UROLOGY</h1>
          </div>
          <div className='bg-white h-40 w-48 rounded-sm shadow-lg'>
            <img src={ur} alt='urology' className='ml-16'></img>
            <h1 className='font-bold text-red-700 text-center mt-6'>UROLOGY</h1>
          </div>

          <div className='bg-white h-40 w-48 rounded-sm shadow-lg'>
            <img src={ur} alt='urology' className='ml-16'></img>
            <h1 className='font-bold text-red-700 text-center mt-6'>UROLOGY</h1>
          </div>


        </div>
    </div>
  )
}

export default Home
