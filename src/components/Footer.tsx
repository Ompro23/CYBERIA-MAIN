"use client"
import { message } from 'antd';
import React from 'react'
import { toast } from 'sonner';


const Footer = () => {

  const handleClick = () => {
    message.success('Thank you for Response')
    const emailInput = document.getElementById('email') as HTMLInputElement;
    if (emailInput) {
      emailInput.value = '';
    }
  }
  return (
    <>
    
    <div className='bg-black bg-blend-multiply text-blue-300 flex w-full flex-col'>
      <div className="h-[50vh] flex sm:flex-col md:flex-col sm:px-5  justify-around px-20 ">
        <div className="flex sm:w-full md:w-full w-1/2 sm:h-1/2 flex-col">
          <div className="flex-col h-full flex  gap-0 sm:gap-1 justify-center items-start ">
          <h1 className='text-5xl font-light font-SpaceAge text-white  sm:text-3xl'>CYBERIA</h1>
          <p className='text-wrap sm:w-2/3  text-gray-300  text-end w-1/2 text-xs sm:text-xs font-light'>Unleash the Geek Within</p>
         <div className="flex  flex-col gap-0 mt-5 sm:gap-0 ">
          <p className='ms-3 text-white'>Need Help?</p>
         <div className='flex flex-row gap-3 mt-2 sm:gap-0 '>
         <input type="text" placeholder='Your Email' id='email' className="flex-col border-2 text-white border-white placeholder:bg-transparent bg-black rounded-full py-2 sm:px-5 px-10 flex gap-3 "/>
          <button type='submit' onClick={handleClick} className='bg-black border-2 border-white px-10 sm:px-5 rounded-full  text-white py-0 font-semibold  text-md'>Submit</button>
         </div>
         </div>
          </div>          
        </div>
      
      <div className="w-1/2 justify-center   sm:w-full md:w-full flex items-center mb-0 sm:mb-10">
      <table className="table text-white bg-dark my-cushrefm-table w-full table-borderless">
  <thead>
    <tr>
      <th scope="col" className='text-lg font-normal text-blue-200'>Quick as</th>
      <th scope="col" className='text-lg font-normal text-blue-200'>Supporters</th>
      <th scope="col" className='text-lg font-normal text-blue-200'>Contact Us</th>      
    </tr>
  </thead>
  <tbody className='font-normal cursor-pointer'>
    <tr >
      <th className="font-light"><a href="/">Home</a></th>
      <th className="font-light"><a href="https://befriendsapp.in/" target='_blank'>Befriends</a></th >
      <th  className="hover:text-pink-700 hover:font-semibold font-light"><a href="https://www.instagram.com/cyberia_msub/" target="_blank" rel="noopener noreferrer">Instagram</a></th >
      
    </tr>
    <tr>
      <th className="font-light" ><a href="/about">About</a></th >
      <th className="font-light" ><a href="https://www.linkedin.com/company/mlsa-msu/" target="_blank" rel="noopener noreferrer">Microsoft Learn</a></th >
      <th  className='hover:text-blue-700 hover:font-semibold font-light'><a href="https://www.facebook.com/people/Cyberia-Msu/pfbid02f9Pp4cdkMzUH9BFduRcAeEDvg6YHu4Uad9F5vtmMGvL3RZVAZR9WAAJsvLHwZP2Ll/" target="_blank" rel="noopener noreferrer">Facebook</a></th >
      
    </tr>
    <tr>
      <th className="font-light" ><a href="/events">Events</a></th >
      <th ><a href="/kid"></a></th >
      <th  className='hover:text-blue-400 hover:font-semibold font-light'><a href="https://x.com/Cyberia_2023" target="_blank" rel="noopener noreferrer">Twitter</a></th >
      
    </tr>
    <tr>
      <th className="font-light" ><a href="/team"></a></th >
      <th ><a href="/latest"></a></th >
      <th  className='hover:text-red-600 hover:font-semibold font-light'><a href="https://www.youtube.com/@Cyberia_msu" target="_blank" rel="noopener noreferrer">Youtube</a></th >
      
    </tr>
    <tr>
      <th className="font-light" ><a href="/team"></a></th >
      <th ><a href="/latest"></a></th >
      <th  className='hover:text-red-600 hover:font-semibold font-light'><a href="https://www.linkedin.com/in/cyberiamsu/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Linkedin</a></th >
      
    </tr>
  </tbody>
</table>
      </div>
      </div>
      <div className="h-2/5  w-full  sm:text-lg sm:py-4 py-3  bg-black flex flex-row justify-around items-center">
        <div className="flex w-1/2 sm:justify-center text-sm sm:items-center">
        <h1 className=' sm:ps-0 sm:text-sm text-nowrap text-white'>@2024 Cyberia</h1>
        </div>
        <div className="flex w-1/3 text-sm font-thin  sm:hidden text-nowrap gap-4">
        <h1  className=' text-white'>Terms & Conditions</h1>
        <h1 className=' text-white'>Privacy Policy</h1>
        {/* <h1 className=' text-white'>Cookie Policy</h1> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
