import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { avatar } from '@/data/assets';

const Footer = () => {
  return (
    <footer className="py-4 bg-primary">
      <div className="container flex-col px-4 mx-auto">
        <p className="text-center text-white">
          © 2023 RadarNaval - Tous droits réservés
        </p>
        <div className="flex flex-col items-start my-8 md:items-center md:flex-row">
        <Image
          alt="radyUX"
          className="rounded-full "
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
       <div className="flex items-center ml-4 space-x-5">
        <h1 className="text-lg font-semibold text-white">RadyUX on Github</h1>
    
      <FaGithub className='text-4xl text-white '/> 
  </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
