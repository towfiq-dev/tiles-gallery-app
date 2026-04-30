'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveNav = ({ children, href, icon: Icon, className }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <li className='list-none'>
      <Link
        href={href}
        className={`group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
        ${isActive 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
          : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
        } ${className}`}
      >
        {Icon && (
          <Icon 
            size={18} 
            className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'}`} 
          />
        )}
        <span>{children}</span>
      </Link>
    </li>
  );
};

export default ActiveNav;