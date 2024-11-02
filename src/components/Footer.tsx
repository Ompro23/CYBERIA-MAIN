import React from 'react'


const Footer = () => {
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
         <input type="text" placeholder='Your Email' className="flex-col border-2 text-white border-white placeholder:bg-transparent bg-black rounded-full py-2 sm:px-5 px-10 flex gap-3 "/>
          <button className='bg-black border-2 border-white px-10 sm:px-5 rounded-full  text-white py-0 font-semibold  text-md'>Submit</button>
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
      <th className="font-light">Befriends</th >
      <th  className="font-light">Instagram</th >
      
    </tr>
    <tr>
      <th className="font-light" ><a href="/event">Events</a></th >
      <th className="font-light" >Microsoft Learn</th >
      <th  className='hover:text-blue-700 hover:font-semibold font-light'>Facebook</th >
      
    </tr>
    <tr>
      <th className="font-light" ><a href="/about">About</a></th >
      <th ><a href="/kid"></a></th >
      <th  className='hover:text-blue-400 hover:font-semibold font-light'>Twitter</th >
      
    </tr>
    <tr>
      <th className="font-light" ><a href="/team">Team</a></th >
      <th ><a href="/latest"></a></th >
      <th  className='hover:text-red-600 hover:font-semibold font-light'>Youtube</th >
      
    </tr>
  </tbody>
</table>
      </div>
      </div>
      <div className="h-2/5  w-full  sm:text-lg sm:py-4 py-3  bg-black flex flex-row justify-around items-center">
        <div className="flex w-1/2 sm:justify-center text-sm sm:items-center">
        <h1 className=' sm:ps-0 sm:text-sm text-nowrap text-white'>@2024 Cyberia Production</h1>
        </div>
        <div className="flex w-1/3 text-sm font-thin  sm:hidden text-nowrap gap-4">
        <h1 className=' text-white'>Terms & Conditions</h1>
        <h1 className=' text-white'>Privacy Policy</h1>
        <h1 className=' text-white'>Cookie Policy</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
