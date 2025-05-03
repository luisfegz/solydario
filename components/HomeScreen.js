import React, { useState } from 'react'

function HomeScreen() {
  const systems = [
    {
        name: "Sistema #1",
        power: "4000W",
        cost: "12.000.000",
        items: [
            "8 x Panel Solar 500W Deep Blue 3.0 JA Solar",
            "1 x Estructura Cubierta Metálica 8 Paneles KH918",
            "1 x Inversor On Grid Growatt MIN 3000TL-X",
            "1 x Vatímetro Smart Meter SDM630 Modbus V3 100A EASTRON",
            "1 x Monitorización Growatt Shine Wifi-X",
            "22 x Cable Unifilar de 6 mm2 SOLAR PV 1,5kV Rojo",
            "22 x Cable Unifilar de 6 mm2 SOLAR PV 1,5kV Negro",
            "22 x Cable AWG 10 Verde",
            "2 x Conector Retie MC4",
            "1 x Kits Protecciones On Grid 220VAC MPPT 20A"
        ],
        weight: "208 kg",
        area: "19 m2"
    },
    {
        name: "Sistema #2",
        power: "7000W",
        cost: "20.000.000",
        items: [
            "14 x Panel Solar 500W Deep Blue 3.0 JA Solar",
            "1 x Estructura Cubierta Metálica 14 Panel KH915",
            "1 x Inversor On Grid Growatt MIN 6000TL-X2",
            "1 x Vatímetro Smart Meter SDM630 Modbus V3 100A EASTRON",
            "1 x Monitorización Growatt Shine Wifi-X",
            "46 x Cable Unifilar de 6 mm2 SOLAR PV 1,5kV Rojo",
            "46 x Cable Unifilar de 6 mm2 SOLAR PV 1,5kV Negro",
            "25 x Cable AWG 10 Verde",
            "2 x Conector Retie MC4",
            "1 x Kit Protecciones On Grid 220VAC MPPT 50A"
        ],
        weight: "364 kg",
        area: "33 m2"
    }
];

  const [consumo, setConsumo] = useState("");
  const [resultados, setResultados] = useState({ inversion: "", ahorro: "", retorno: "" });
  const system = systems[0];
  const system1 = systems[1]
  function calcularAhorro() {
    if (!consumo) {
      alert("Ingrese un valor válido");
      return;
    }
    let inversion = 12000000;
    let ahorroMensual = consumo * 870 * 0.6;
    let retornoInversion = inversion / ahorroMensual;
    setResultados({
      inversion: `Costo estimado de inversión: $${inversion.toLocaleString()}`,
      ahorro: `Ahorro mensual estimado: $${ahorroMensual.toLocaleString()}`,
      retorno: `Meses para recuperar la inversión: ${retornoInversion.toFixed(1)}`
    });
  }
  return (
    <div className='h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
      <div
        style={{backgroundImage: 'url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop")'
        }}
        className='flex flex-col h-screen justify-between bg-center bg-cover snap-start snap-always'
        id='ahorrar'
        >
          <div className='flex flex-col items-center justify-between h-full font-montserrat'>
            <div className='pt-48 text-center text-white'>
              <h1 className='text-4xl'>Empieza Ahorrar</h1>
              <p className='text-sm'>
              Calcula tu ahorro potencial y da el primer paso hacia la{" "} 
                <span className='underline'>energía renovable.</span>
              </p>
            </div>
            
            {/* Button div */}
            <div className='flex text-center mb-24 gap-8'>
              <button className='bg-[#0a5ae4] w-48 text-white py-2 rounded-sm text-xs'>Custom order</button>
              <button className='w-48 text-[#393c41] py-2 bg-white px-4 rounded-sm text-xs'>Learn More</button>
            </div>

            <div className='absolute bottom-4 animate-bounce'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
        
        {/* calcular */}
        <div
        style={{backgroundImage: 'url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarRoof-Desktop-US.png")'
        }}
        className='flex flex-col h-screen justify-between bg-center bg-cover snap-start snap-always '
        id='calcular'
        >
          <div className='flex flex-col items-center justify-between h-full font-montserrat'>
            
            <div className=" text-white py-16 pt-48 px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Calcula tu Ahorro con Energía Solar</h2>
                <p className="text-lg mb-8 text-gray-200">Ingresa tu consumo mensual (kWh) y descubre cuánto puedes ahorrar.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <input
                    type="number"
                    value={consumo}
                    onChange={(e) => setConsumo(e.target.value)}
                    placeholder="Ej. 280"
                    className="p-3 rounded-lg text-black w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={calcularAhorro}
                    className="bg-[#0a5ae4] w-48 text-white py-2 rounded-sm  hover:bg-gray-300 transition"
                  >
                    Calcular
                  </button>
                </div>

                {resultados.inversion && (
                  <div className="bg-gray-400 p-6 rounded-xl shadow-lg space-y-2">
                    <p className="text-lg">{resultados.inversion}</p>
                    <p className="text-lg">{resultados.ahorro}</p>
                    <p className="text-lg font-semibold">{resultados.retorno}</p>
                  </div>
                )}
              </div>
            </div>
            {/* Button div */}
            <div className='flex text-center mb-24 gap-8'>
              <button className='w-48 text-[#393c41] py-2 bg-white px-4 rounded-sm text-xs'>Learn More</button>
              
            </div>
          </div>
        </div>
        
        {/* System 1 */}
        <div
        style={{backgroundImage: 'url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Hero-US-Desktop-v4.jpg")'
        }}
        className='flex flex-col h-screen justify-between bg-center bg-cover snap-start snap-always '
        id='system1'
        >
          <div className='flex flex-col items-center justify-between h-full font-montserrat'>
            <div className="mt-6 text-sm pt-36 text-white">
              <div className="w-full  bg-gray-800 border border-neutral-600 rounded-lg overflow-hidden">
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{system.name} – {system.power}</h2>
                  <p className="font-semibold mt-1">Costo: <span className="font-normal">{system.cost}</span></p>
                </div>

                <table className="w-full text-left border-t border-neutral-600">
                  <thead>
                    <tr className="bg-neutral-600 text-white">
                      <th className="px-4 py-2 font-semibold">Incluye</th>
                    </tr>
                  </thead>
                  <tbody>
                    {system.items.map((item, i) => (
                      <tr key={i} className="border-t border-neutral-700">
                        <td className="px-4 py-2">{item}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="p-4 border-t border-neutral-600">
                  <p className="font-semibold">Peso: <span className="font-normal">{system.weight}</span></p>
                  <p className="font-semibold">Superficie: <span className="font-normal">{system.area}</span></p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* System 2 */}
        <div
        style={{backgroundImage: 'url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Desktop-US.png")'
        }}
        className='flex flex-col h-screen justify-between bg-center bg-cover snap-start snap-always '
        id='system2'
        >
          <div className='flex flex-col items-center justify-between h-full font-montserrat'>
            <div className="mt-6 text-sm pt-36 text-black">
              <div className="w-full  bg-white border border-neutral-600 rounded-lg overflow-hidden">
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{system1.name} – {system1.power}</h2>
                  <p className="font-semibold mt-1">Costo: <span className="font-normal">{system1.cost}</span></p>
                </div>

                <table className="w-full text-left border-t border-neutral-600">
                  <thead>
                    <tr className="bg-neutral-300 text-black">
                      <th className="px-4 py-2 font-semibold">Incluye</th>
                    </tr>
                  </thead>
                  <tbody>
                    {system1.items.map((item, i) => (
                      <tr key={i} className="border-t border-neutral-700">
                        <td className="px-4 py-2">{item}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="p-4 border-t border-neutral-600">
                  <p className="font-semibold">Peso: <span className="font-normal">{system1.weight}</span></p>
                  <p className="font-semibold">Superficie: <span className="font-normal">{system1.area}</span></p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Compromiso */}
        <div
        style={{backgroundImage: 'url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-US.png")'
        }}
        className='flex flex-col h-screen justify-between bg-center bg-cover snap-start snap-always '
        id='compromiso'
        >
          <div className='flex flex-col items-center justify-between h-full font-montserrat'>
            <div className='pt-48 text-center'>
              <h1 className='text-4xl'>Compromiso con el medio ambiente</h1>
              <p>
                Al elegir energía solar, no solo reduces costos, sino que también contribuyes a un planeta más limpio. ¡Hagamos juntos el cambio hacia un{" "}
                <span className='underline'>futuro sostenible!</span>
              </p>
            </div>
            
            {/* Button div */}
            <div className='flex text-center mb-24 gap-8'>
              <button className='bg-[#0a5ae4] w-48 text-white py-2 rounded-sm text-xs'>Custom order</button>
              <button className='w-48 text-[#393c41] py-2 bg-white px-4 rounded-sm text-xs'>Learn More</button>
              
            </div>
          </div>
        </div>

    </div>
  )
}

export default HomeScreen;
