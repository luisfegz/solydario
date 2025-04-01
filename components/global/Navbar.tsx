"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';
import { buttonVariants } from '../ui/button';
import MaxWidthWrapper from './MaxWidthWrapper';
import CartShop from '../icons/CarShop';
import SearchIcon from '../icons/SearchIcon';


const Navbar = () => {
  return (
    <nav className='sticky h-[76px] inset-x-0 top-0 z-30 w-full border-b border-zinc-700 bg-black transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-[76px] items-center justify-between '>
          <Link href='/' className='flex items-center z-40 '>
            <Image
                src="/favicon.png"
                alt="Champion Store Logo"
                width={58}
                height={58}
                className="shadow-sm"
            />
            <span className='w-full font-semibold text-black-500'></span>
            
          </Link>
          <div className='hidden items-center space-x-4 sm:flex'>
            <ul
                className='
                    flex
                    md:flex-row
                    items-center
                    gap-4
                    list-none
                '
            >
                <li>
                    <Link
                        href='/proyecto'
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'sm',
                        })}
                    >
                      ¿Quiénes somos?
                    </Link>
                </li>
                <li>
                    <Link
                        href='/energia'
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'sm',
                        })}
                    >
                        Energía
                    </Link>
                </li>
                <li>
                    <Link
                        href='/innovacion'
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'sm',
                        })}
                    >
                        
                        Innovación
                    </Link>
                </li>
            </ul>
          </div>
          <aside
              className='
                  flex
                  items-center
                  gap-[8px]
              '
          >
            {/* Offer button (Link) */}    
            <Link 
              href='/contactanos' 
              className="
                inline-flex h-12 text-base md:text-xl animate-shimmer items-center justify-center z-40
                rounded-md border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] px-3.5 font-normal md:font-medium text-slate-100 transition-colors focus:outline-none 
                focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
              "
            >
              
              Contáctanos
            </Link>
           
            {/* End Offer button */}
            
          </aside>
          <MobileNav />
        </div>   
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;