import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';


export default function Header(){
    const [open,setOpen]=useState(false);
     return (
    <header className="fixed w-full z-40 bg-white/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">S</div>
          <span className="font-semibold">Sabikun Nahar Nova</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#about" className="hover:text-orange-500">About Me</a>
          <a href="#services" className="hover:text-orange-500">Services</a>
          <a href="#projects" className="hover:text-orange-500">Projects</a>
          <a href="#testimonials" className="hover:text-orange-500">Testimonials</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
          <a href="/resume.pdf" className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-md">Download CV</a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <FiX size={22}/> : <FiMenu size={22}/>}
        
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-6 py-6 flex flex-col gap-4">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a href="/resume.pdf" className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-md text-center">Download CV</a>
          </div>
        </div>
      )}
    </header>
  );
}




