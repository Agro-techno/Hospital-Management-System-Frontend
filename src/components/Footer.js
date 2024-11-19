import React from 'react'
import hospital_logo from './Images/hospital_logo.jpg'
import facebook_logo from './Images/facebook_logo.jpg'
import instragram_logo from './Images/instragram_logo.jpg'
import linkedin_logo from './Images/linkedin_logo.jpg'

const Footer = () => {
  return (
    <div className='flex  justify-between p-40 m-15'>
      <div>
        <div>
            <a href="https://vedantahospitals.in/"><img src={hospital_logo} alt="hospital_logo"  /></a>
        </div>
        <br />
        <div>
            
            <p>
            KishanGarh Road Chandigarh
            area pincode-160101
            </p>
        </div>
        <br />
        <div className='text-red-600'>
            <h4>Email</h4>
            <a href="https://vedantahospitals.in/info@vedantahospital.com">vedantahospital.in</a>
        </div>
        <br />
        <div>
            <p>Get in touch with us</p>
           <a href="" className='text-red-500'>+917710714806</a>
        </div>
        <br />
        <div className='flex'>
            <a href="https://www.facebook.com/"  ><img src={facebook_logo} alt="facebookLogo" className='h-5 w-6 ml-4' /></a>
            <a href="https://www.instragram.com/"><img src={instragram_logo} alt="instragramLogo" className='h-5 w-6 ml-4'/></a>
            <a href="https://linkedin.com/"><img src= {linkedin_logo} alt="linkedInLogo" className='h-5 w-6 ml-4'/></a>
        </div>
      </div>

      <div >
        <div >
            <h3>Quick Link</h3>
        </div>
        <div className='flex flex-col '>
            <a href=""><div className='hover:text-red-600'>Home</div></a>
            <a href=""><div className='hover:text-red-600'>About Us</div></a>
            <a href=""><div className='hover:text-red-600'>Services</div></a>
            <a href=""><div className='hover:text-red-600'>Facilities</div></a>
            <a href=""><div className='hover:text-red-600'>Departments</div></a>
            <a href=""><div className='hover:text-red-600'>Packages</div></a>
        </div>
      </div>

      <div>
        <div className='flex flex-col'>
            <a href=""><div className='hover:text-red-600'>Doctors</div></a>
            <a href=""><div className='hover:text-red-600'>Gallery</div></a>
            <a href=""><div className='hover:text-red-600'>News</div></a>
            <a href=""><div className='hover:text-red-600'>Tesimonials</div></a>
            <a href=""><div className='hover:text-red-600'>Blog</div></a>
            <a href=""><div className='hover:text-red-600'>Contact Us</div> </a>
        </div>
      </div>

      <div>
        <div>
            <h2>Policy</h2>
        </div>
        <div className='flex flex-col'>
            <a href=""><div className='hover:text-red-600'>Terms and conditions</div>  </a>
            <a href=""><div className='hover:text-red-600'>Privacy policy</div> </a>
            <a href=""><div className='hover:text-red-600'>Cancellation and refund</div>  </a>
            <a href=""><div className='hover:text-red-600'>policy</div></a>
        </div>
      </div>
      
      <div>
        <div>
            <h2>Locate us</h2>
        </div>
        <div></div>
      </div>

    </div>
  )
}

export default Footer
