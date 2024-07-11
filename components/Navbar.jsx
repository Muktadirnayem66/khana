import Image from 'next/image';
import React from 'react';
import Logo from '@/public/assets/logo.png';
import Link from 'next/link';
import SignInOut from './auth/SignInOut';
const Navbar = () => {
  return (
    <nav>
    <div className="container flex justify-between py-6">
      <Link href="/">
        <Image src={Logo} width={100} height={100} alt="" className="object-cover h-[40px]" />
      </Link>

      <ul className="flex gap-4 text-sm text-gray-500">
        <li className="py-2 active">
          <Link href={"/"}>Home</Link>
        </li>

        <li className="py-2">
          <Link href={"/recipe"}>Recipe</Link>
        </li>

        <li className="py-2">
          <Link href={"/about"}>About us</Link>
        </li>

        <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
          <SignInOut/>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;