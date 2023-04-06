import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { avatar } from '@/data/assets';

const Footer = () => {
  return (
    <footer className="flex-col items-center py-4 bg-primary">
      <div className="container px-4 mx-auto">
        <p className="text-center text-white">
          © 2023 RadarNaval - Tous droits réservés
        </p>
        <div className="flex flex-col items-center gap-2 my-9 ">
        <Image
          alt="radyUX"
          className="rounded-full "
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
       
        <h1 className="pl-5 text-lg font-semibold text-white">RadyUX on Github</h1>
        <FaGithub className='text-4xl text-white '/> 
 
      </div>
      </div>
    </footer>
  );
};

export default Footer;
