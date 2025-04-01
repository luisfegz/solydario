'use client'

import { ArrowRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggleOpen = () => setOpen((prev) => !prev)

  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [pathname])

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
    }
  }

  return (
    <div className='sm:hidden'>
      <Menu
        onClick={toggleOpen}
        className='relative z-50 h-8 w-8 text-zinc-700'
      />

      {isOpen ? (
        <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
          <ul className='absolute border-b border-zinc-700 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8 bg-black'>
              <>
                <li>
                  <Link
                    onClick={() =>
                      closeOnCurrent('/proyecto')
                    }
                    className='flex items-center w-full font-medium text-xl text-white'
                    href='/proyecto'>
                   ¿Quiénes somos?
                  </Link>
                </li>
                <li className='my-3 h-px w-full bg-zinc-700' />
                <li>
                  <Link
                    onClick={() =>
                      closeOnCurrent('/energia')
                    }
                    className='flex items-center w-full font-medium text-xl text-white'
                    href='/energia'>
                    Energía
                  </Link>
                </li>
                <li className='my-3 h-px w-full bg-zinc-700' />
                <li>
                  <Link
                    onClick={() =>
                      closeOnCurrent('/innovacion')
                    }
                    className='flex items-center w-full font-medium text-xl text-white'
                    href='/innovacion'>
                    Innovación
                  </Link>
                </li>
              </>
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default MobileNav
