'use client';

import { ReactNode } from 'react';

const Footer = () => {
  const lists: (string | ReactNode)[] = [
    'About',
    'Help',
    'Terms of Service',
    'Privacy Policy',
    'Cookie Policy',
    'Advertising',
    <>&copy; {new Date().getFullYear()} Wraglet</>
  ];
  return (
    <footer className=' bg-white w-full h-10 md:h-[50px] justify-center flex items-center z-10'>
      <ul className='flex items-center justify-center gap-x-[50px]  flex-wrap'>
        {lists.map((item, i) => (
          <li
            className='text-slate-500 text-[10px] md:text-xs font-normal'
            key={i}
          >
            {item}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
