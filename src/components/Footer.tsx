"use client"
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';


const Footer = () => {

  const router = useRouter()
  const handleClick = () => {
    message.success('Thank you for Response')
    const emailInput = document.getElementById('email') as HTMLInputElement;
    if (emailInput) {
      emailInput.value = '';
    }
  }
  return (
    <>
    
    <div className='bg-[#08090a]  border-white  bg-blend-multiply  flex w-full flex-col'>
      <div className="h-[50vh] flex sm:flex-col md:flex-col sm:px-5  justify-around px-20 ">
        <div className="flex sm:w-full md:w-full w-1/2 sm:h-1/2 flex-col">
          <div className="flex-col h-full flex  gap-0 sm:gap-1 justify-center sm:items-center items-start ">
          <h1 className='text-5xl  py-2 font-thin font-SpaceAge text-white  sm:text-3xl'>CYBERIA</h1>
          <p className='text-wrap sm:w-2/3  text-gray-300  text-end w-1/2   sm:text-sm     text-sm    hover:text-white   cursor-pointer  font-thin'>Unleash the Geek Within</p>
         <div className="flex py-10 gap-5 w-full text-xl justify-start sm:justify-center items-center flex-row  mt-5 sm:gap-5 ">
          <a href="https://www.instagram.com/cyberia_msub/">
          <FaInstagram />
          </a>
          <a href="https://www.facebook.com/people/Cyberia-Msu/pfbid02fC2MPRBTGnwaoSj2SUPxVRG2nc4iM1B6qENq23NBPQHrksJqWN9YkurSn1DRt5YTl/">
          <FaFacebook/>
          </a>
          <a href="https://x.com/Cyberia_2023">
          <FaTwitter/>
          </a>
          <a href="https://www.youtube.com/@Cyberia_msu">
          <FaYoutube/>
          </a>
          <a href="https://www.linkedin.com/in/cyberiamsu/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin/>
          </a>
          

         </div>
          </div>          
        </div>
      
      <div className="w-1/2 justify-center sm:ms-5 sm:w-full md:w-full flex items-center mb-0 sm:mb-10">
      <table className="table text-white  bg-dark my-cushrefm-table w-full ">
  <thead>
    <tr>
      <th scope="col" className='text-sm text-wrap  w-[3vw]  text-start font-thin text-[#d0d6e0]'>Quick as</th>
      <th scope="col" className='text-sm text-wrap w-[3vw]  text-start font-thin text-[#d0d6e0]'>Supporters</th>
      <th scope="col" className='text-sm text-wrap  w-[3vw]  text-start font-thin text-[#d0d6e0]'>Contact Us</th>      
    </tr>
  </thead>
  <tbody className='font-thin'>
    <tr className='py-5 ' >
      <th className="text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin"><a href="/">Home</a></th>
      <th className="text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin"><a href="https://befriendsapp.in/" target='_blank'>Befriends</a></th >
      <th  className=" hover:font-semibold text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin"><a href="https://www.instagram.com/cyberia_msub/" target="_blank" rel="noopener noreferrer">Instagram</a></th >
      
    </tr>
    <tr className='py-5'>
      <th className="text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin" ><a href="/about">About Us</a></th >
      <th className="text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin" ><a href="https://www.linkedin.com/company/mlsa-msu/" target="_blank" rel="noopener noreferrer">Microsoft Learn</a></th >
      <th  className=' hover:font-semibold text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin'><a href="https://www.facebook.com/people/Cyberia-Msu/pfbid02f9Pp4cdkMzUH9BFduRcAeEDvg6YHu4Uad9F5vtmMGvL3RZVAZR9WAAJsvLHwZP2Ll/" target="_blank" rel="noopener noreferrer">Facebook</a></th >
      
    </tr>
    <tr className='py-5'>
      <th className="text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin" ><a href="/events">Events</a></th >
      <th className="text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin" ><a href="https://fiscalox.com/">Fiscal Ox</a></th >
      <th  className=' hover:font-semibold text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin'><a href="https://x.com/Cyberia_2023" target="_blank" rel="noopener noreferrer">Twitter</a></th >
      
    </tr>
    <tr className='py-5'>
      <th className="text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin" >Privacy & Policy</th >
      <th ><a href="/latest"></a></th >
      <th  className=' hover:font-semibold text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin'><a href="https://www.youtube.com/@Cyberia_msu" target="_blank" rel="noopener noreferrer">Youtube</a></th >
      
    </tr>
    <tr className='py-5'>
      <th className="text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin" >Terms & Conditions</th >
      <th><a href="/latest"></a></th >
      <th  className=' hover:font-semibold text-sm text-wrap  text-[#9c9da1] hover:text-white w-[3vw]  text-start cursor-pointer py-2 font-thin'><a href="https://www.linkedin.com/in/cyberiamsu/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Linkedin</a></th >      
    </tr>
  </tbody>
</table>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default Footer

// <div className="h-2/5  w-full  sm:text-sm text-wrap  sm:py-4 py-3  bg-[#08090a] flex flex-wrap sm:flex-col justify-around items-center">
//         <div className="flex w-1/2 sm:justify-center text-sm text-wrap  sm:items-center">
//         <h1 className=' sm:ps-0 sm:text-sm text-wrap  text-nowrap text-white'>@2024 Cyberia</h1>
//         </div>
//         <div className="flex w-1/3 sm:w-full text-start text-sm text-wrap  font-thin  flex-nowrap text-nowrap gap-4">
//         <h1 className='text-white cursor-pointer' onClick={() => window.open('/terms-condition', '_self')}>Terms & Condition</h1>
//         <h1 className='text-white cursor-pointer' onClick={() => window.open('/privacy-policy', '_self')}>Privacy Policy</h1>
//         {/* <h1 className=' text-white'>Cookie Policy</h1> */}
//         </div>
//       </div>