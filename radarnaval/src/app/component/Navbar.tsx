'use client'


import Link from 'next/link';
import styles from '../style'
import navItems from '@/data/Navbar';
import { useState } from 'react';
import '../globals.css'
import Search from './Search';
import { allNavires } from 'contentlayer/generated';


const Navbar: React.FC = () => {
    const [userRole, setUserRole] = useState<'admin' | 'user' | null>(null);

    
  return (
    <nav className="flex items-center justify-between w-full px-10 py-8 bg-primary navbar">
  <Link href="/">
    <div className="text-white font-rubik text-[18px]">
      📡<span className='text-[24px]'>R</span>ADAR<span className='text-[24px]'>N</span>AVAL📡
    </div>
  </Link>

  <div className="justify-center hidden mx-16 sm:flex">
    <Search data={allNavires} />
  </div>

  <ul className="font-rubik list-none hidden sm:flex justify-end items-center space-x-[60px] flex-1 mr-10 text-white">
    {Object.entries(navItems).map(([path, { name }]) => {
      return (
        <Link key={path} href={path}>
          {name}
        </Link>
      );
    })}
  </ul>

 
</nav>

  );
};

export default Navbar;