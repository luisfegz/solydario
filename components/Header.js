import React, { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import AnnouncementBar from "../components/AnnouncementBar";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // 👈 nuevo estado
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => setMobileOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Fondo transparente solo en el top
      setIsTransparent(currentScrollY === 0);

      // Solo aplicar lógica en escritorio
      if (window.innerWidth > 768) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // scroll abajo → ocultar
        } else {
          setIsVisible(true);  // scroll arriba → mostrar
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: '#ahorrar', label: 'Empieza Ahorrar' },
    { href: '#calcular', label: 'Calcular Ahorro' },
    { href: '#system1', label: 'System 1' },
    { href: '#system2', label: 'System 2' },
    { href: '#compromiso', label: 'Compromiso' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-xs text-white transition-transform duration-300
        ${isTransparent ? 'bg-transparent' : 'bg-transparent'}
        ${!isVisible && 'transform -translate-y-full'}`
      }
    >
      <AnnouncementBar />
      <div className='flex items-center justify-between py-4 px-6 md:px-16'>
        <div className='w-[90px] font-bold'>Solydario</div>

        <nav className='hidden md:flex flex-1 justify-center gap-6 text-sm'>
          {navItems.map(item => (
            <a key={item.href} href={item.href} className='hover:underline'>
              {item.label}
            </a>
          ))}
        </nav>

        <div className='hidden md:flex gap-4 text-sm'>
          <a href='#shop' className='hover:underline'>Shop</a>
          <a href='#account' className='hover:underline'>Account</a>
          <button onClick={toggleMobileMenu} className='hover:underline'>Menu</button>
        </div>

        <button onClick={toggleMobileMenu} className='md:hidden text-white'>
          {mobileOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className='fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col p-6 md:hidden text-black'>
          <div className='flex justify-end'>
            <button onClick={toggleMobileMenu}>
              <HiOutlineX size={28} />
            </button>
          </div>
          <nav className='flex flex-col items-center gap-6 mt-4 text-lg'>
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={toggleMobileMenu}
                className='w-full text-center hover:underline'
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
