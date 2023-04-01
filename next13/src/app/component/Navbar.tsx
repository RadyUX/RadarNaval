'use client'


import Link from 'next/link';
import { useState } from 'react';
import '../globals.css'

const Navbar: React.FC = () => {
    const [userRole, setUserRole] = useState<'admin' | 'user' | null>(null);

    
  return (
    <nav className="py-8 px-10 bg-primary w-full flex justify-between items-center navbar">
    
        <div className="text-white font-rubik text-[18px] ">📡<span className='text-[24px]'>R</span>ADAR<span className='text-[24px]'>N</span>AVAL📡</div>

      <ul className="font-rubik list-none hidden sm:flex justify-end items-center space-x-[60px] flex-1 mr-10 text-white ">
          <li className="cursor-pointer text-[18px]   ">
            <Link href="/porte-avions">
              Porte-avions
            </Link>
          </li>

          <li className="cursor-pointer  text-[18px] ">
            <Link href="/navires">
             Cuirassés
            </Link>
          </li>
         
          <li className="cursor-pointer  text-[18px]">
            <Link href="/croiseurs">
              Croiseurs
            </Link>
          </li>
          <li className="cursor-pointer  text-[18px]">
            <Link href="/destroyers">
           Destroyers
            </Link>
          </li>

          <li>
            <Link href="/login">
            Se connecter
            </Link>
         </li>

      <li>
        <Link href="/register">
         sinscrire
        </Link>
      </li>

        </ul>
     
    </nav>
  );
};

export default Navbar;