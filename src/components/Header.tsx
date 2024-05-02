'use client';
// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between px-10 py-2">
      <div className="">qas</div>
      <div className="flex gap-5">
        <div>Policy</div>
        <div>About</div>
        <div>Cart</div>
        <div>Login/SignUp</div>
      </div>
    </nav>
  );
}
