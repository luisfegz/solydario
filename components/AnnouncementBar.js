import React from 'react';

function AnnouncementBar() {
  function goToWhatsapp() {
    const message = encodeURIComponent("Hola, me gustaría obtener más información sobre los planes que ofrecen de Solydario.");
    const whatsappURL = `https://wa.me/573134273781?text=${message}`;
    window.open(whatsappURL, '_blank');
  }

  return (
    <div className='text-black bg-gradient-to-r from-[#e4c678] via-[#f2e5c2] to-[#e8d199] text-center p-4 font-montserrat'>
      <h1>Contáctanos vía{" "}
        <button
          onClick={goToWhatsapp}
          className='w-24 text-[#ffffff] py-1 bg-black px rounded-sm text-xs font-montserrat'
        >
          WhatsApp
        </button>
      </h1>
    </div>
  );
}

export default AnnouncementBar;
