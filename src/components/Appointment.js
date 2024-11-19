import React from 'react'
import location_logo from './Images/location_logo.jpg'
import Email_logo from './Images/email_logo.jpg'
import mobile_logo from './Images/mobile_logo.png'






const Appointment = () => {
  return (
    <div className='flex  justify-between p-40 m-15'>
      <div className='left-Section  '>
        <h4>Connect to Us</h4>
        <h2 className='text-2xl font-semibold'>KEEP IN TOUCH</h2>
        <p>Any Emergency contact us</p>
        <br />

        <div className='all-box'>
          
          <div className='box bg-red-50 p-9 rounded-sm flex'>
          <div className>
           <img src={location_logo} alt="location" className='h-12 w-12'/>
           </div>
           <div className='ml-3'> 
            <h3>Address</h3>
            
            <pre># KishanGarh Road Chandigarh
                 area pincode-160101
            </pre>
            </div>


          </div>
          <br />

          <div className='box bg-red-50 p-9 rounded-sm flex'>
          <div className>
           <img src={Email_logo} alt="email" className='h-12 w-12'/>
           </div>
           <div>
            <h3 className='ml-3'>Email Id</h3>
            <p className='text-red-500 hover:text-blue-800 ml-3'>mishra@gmail.com</p>
            </div>

          </div>
          <br />

          <div className='box bg-red-50 p-9 rounded-sm flex'>
          <div className>
           <img src={mobile_logo} alt="mobile" className='h-12 w-12'/>
           </div>
           <div>
            <h3 className='ml-3'>Phone</h3>
            <div className='flex'>
            <p className='text-red-500 hover:text-blue-800 ml-3'>+91 7710714806 </p>
            <p className='text-black ml-1'>(24*7)</p>
            </div>
            </div>

          </div>

        </div>


      </div >

      {/* // now from right part of application */}
      <div className='border  p-4 rounded-md shadow-lg'>

        <div className='text-center '>
          <h4>Get in Touch</h4>
          <h1 className='text-2xl'>Make An Appointment</h1>

        </div>
        <div>
          <h3 className='font-bold'>Your Details</h3>
          <p >Let know how to get back to you</p>
         
        </div>
        <br />

        <form action="" className=''>
          <div className='w-full'>
            
            <input type="text"
            required
            placeholder='Enter Your Name'
            className=' border rounded-md m-2 p-2 border-gray-300 bg-slate-50 shadow-sm '
            />

            <input type="number" 
            required
            placeholder='Mobile Number'
            className='border rounded-md ml-3 m-2 p-2 border-gray-300 bg-slate-50 shadow-sm'
            />
            </div>
            <br />


            <div>
              <input type="email"
              required
              placeholder='Email'
              className=' border border-gray-300 rounded-md m-2 p-2 w-full bg-slate-50 shadow-sm'
               />
            </div>
            <br />

            <textarea 
            className='w-full border border-gray-300 rounded-md m-2  p-2 bg-slate-50 shadow-sm' 
            placeholder='textArea'
            required
            rows={4}
            >
             
            </textarea>
            <br />
            <button type='submit' 
            className=' bg-orange-600 w-full rounded-md h-10 text-white text-2xl m-2'>
              Send
            </button>
           
          



        </form>

      </div>
      
      
    </div>
  )
}

export default Appointment

