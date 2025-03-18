import React from 'react';
import Center from './Center';
import Wrapper from './Featured/Wrapper';
import CartIcon from '../icons/CartIcon';
import Link from 'next/link';
import Image from 'next/image';

function Featured({product}) {
  return (
    <div className='bg-black'>
      <Center>
        <Wrapper>
          <div className='flex items-center'>
            <div>
              <h1 className='font-bold md:font-black mb-2 text-lg md:text-xl lg:text-2xl text-white'>
                ¿Quiénes somos?
              </h1>
              <p className='text-[.6rem] text-white md:text-[1.1rem] lg:text-[1.3rem]'>
              Somos una empresa comprometida con la sostenibilidad y la independencia energética. Ayudamos a hogares y negocios a reducir su factura eléctrica mediante soluciones fotovoltaicas eficientes y accesibles.
              </p>
              <br />
              <h1 className='font-bold md:font-black mb-2 text-lg md:text-xl lg:text-2xl text-white'>
                ¿Qué aportamos?
              </h1>
              <p className='text-[.6rem] text-white md:text-[1.1rem] lg:text-[1.3rem]'>
                Ofrecemos sistemas de energía solar de alta calidad, asesoría personalizada y acompañamiento en todo el proceso, desde la instalación hasta la optimización de beneficios fiscales.
              </p>
              <br />
              <h1 className='font-bold md:font-black mb-2 text-lg md:text-xl lg:text-2xl text-white'>
                Nuestro diferenciador
              </h1>
              <p className='text-[.6rem] text-white md:text-[1.1rem] lg:text-[1.3rem]'>
              Más que vender paneles solares, brindamos una solución integral: desde el financiamiento y los incentivos tributarios hasta el mantenimiento, garantizando la máxima rentabilidad para nuestros clientes.
              </p>
            </div>
          </div>
          <div>
            <Image width={400} height={400} className='max-w-[100%] object-cover border-zinc-800 border-4 rounded-2xl' src="FISTER.jpg" alt="Image" />
          </div>
        </Wrapper>
      </Center>
    </div>
  );
}

export default Featured;
