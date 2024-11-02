"use client";

import React from 'react';
import img1 from "../assets/Logo.png";
import { FaBars } from "react-icons/fa";
import { Dropdown, Image, message, Space } from 'antd';
import logo from '../assets/MSULogo.png';
import naac from "../assets/naac.png";

interface MenuItem {
  label: string;
  key: string;
}

const onClick = ({ key }: { key: string }) => {
  if (key === "1") {
    // Add your login logic here
  }
  message.info(`Click on item ${key}`);
};

const MobileNav: React.FC = () => {
  
  
  const items: MenuItem[] = [
    {
      label: 'Login',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  return (
    <div>
      <div className="flex mb-10 justify-between px-10  absolute backdrop-blur-sm flex-row bg-[#00000054] w-full h-[10vh]">
        <div className="flex gap-0 w-1/3 justify-start items-center">
          <div className='flex gap-5'>
            <a href="/">
              <img src="/Logo/msu.png" className='h-[20vh]  border-white w-[16vw]  object-contain' alt="Logo" />
            </a>            
            <a href="/">
              <img src="/Logo/75.png" className='h-[20vh]  w-[16vw]   object-contain' alt="Logo" />
            </a>
          </div>
        </div>
        <div className='flex md:hidden w-1/3 gap-10 items-center justify-center flex-row'>
          <div className="flex flex-row w-full gap-6 justify-evenly font-mono items-center">
            <button >
              <h1 className='text-white hover:cursor-pointer border-purple-600 text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08] p-2 hover:transition-all'>Events</h1>
            </button>
            <a href="/about">
              <h1 className='text-white hover:cursor-pointer border-purple-600 text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08] p-2 hover:transition-all'>About</h1>
            </a>
            <a href="/team">
              <h1 className='text-white hover:cursor-pointer border-purple-600 text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08] p-2 hover:transition-all'>Team</h1>
            </a>
          </div>
        </div>
        <div className='flex md:hidden w-1/4 gap-10 items-center justify-end flex-row'>
          <div className='flex gap-3'>
            <Image src="/Logo/msu.png" className='h-[15vh] sm:h-[13vh] pr-4 object-contain' alt="NAAC" />
          </div>
          <div className='flex gap-3'>
            <Image src="/Logo/msu.png" className='h-[15vh] sm:h-[15vh] pr-4 object-contain' alt="NAAC" />
          </div>
        </div>
        {/* For Responsive Devices */}
        <div className='flex md:flex lg:hidden 2xl:hidden gap-10 items-center justify-center flex-row'>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <FaBars className='text-white' />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
