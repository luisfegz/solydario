import { useState } from 'react';
import Navbar from '../../components/global/Navbar';
import { LampComponentOfertas } from '../../components/global/lampOfertas';

export default function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    departamento: '',
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function goToWhatsapp(e) {
    e.preventDefault();
    const { name, email, streetAddress, city, postalCode, departamento } = formData;
    
    let message = `Hola, me gustaría solicitar información de los planes que maneja en Solydario. Mis datos son:%0A%0A`;
    message += `Nombre: ${name}%0A`;
    message += `Email: ${email}%0A`;
    message += `Dirección: ${streetAddress}%0A`;
    message += `Ciudad: ${city}%0A`;
    message += `Código Postal: ${postalCode}%0A`;
    message += `Departamento: ${departamento}%0A`;

    const whatsappURL = `https://wa.me/573023639624?text=${message}`;
    window.open(whatsappURL, '_blank');
  }

  return (
    <div className="flex flex-col items-center bg-black  min-h-screen p-4">
      <Navbar />
      <LampComponentOfertas />
      <div className="w-full max-w-lg bg-zinc-900 shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Formulario de Contacto</h2>
        <form onSubmit={goToWhatsapp} className="space-y-4">
          <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded bg-zinc-700" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded bg-zinc-700" />
          <input type="text" name="streetAddress" placeholder="Dirección" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded bg-zinc-500" />
          <input type="text" name="city" placeholder="Ciudad" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded bg-zinc-700" />
          <input type="text" name="postalCode" placeholder="Código Postal" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded bg-zinc-700" />
          <input type="text" name="departamento" placeholder="Departamento" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded bg-zinc-700" />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Enviar Mensaje por WhatsApp</button>
        </form>
      </div>
    </div>
  );
}