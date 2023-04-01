import React from 'react';
import Link from 'next/link';
import styles from '../style'
import logo from "../../../public/logo.png"
import '../globals.css'
const Navbar: React.FC = () => {
    
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
            <Link href="/cuirasses">
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
        </ul>
     
    </nav>
  );
};

export default Navbar;