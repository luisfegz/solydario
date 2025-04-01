import { Button } from "../../components/ui/button";
import { LampComponent } from "../../components/global/lamp";
import { ContainerScroll } from "../../components/global/container-scroll-animation";
import Navbar from "../../components/global/Navbar";
import Featured from "../../components/global/Featured";
import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";
import NewProducts from '../../components/global/NewProducts';
import { useState } from 'react';

export default function Home({ product }) {
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
    <main className="flex bg-[#0a0a0a] items-center justify-center flex-col">
      <Navbar />
      {/* <------------------------------ First Section: Container Scroll --------------------------------> */} 
      <section 
          className="
            !overflow-visible w-full
            relative flex flex-col antialiased 
            inset-0 h-full items-center px-5 py-0 
          "
      >
        <div
          className="
            flex flex-col mt-[50px] md:mt-[-50px]
          "
        >
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                
                <h1 
                  className="
                    from-white to-neutral-600 font-medium text-xl 
                    md:text-4xl mb-2 lg:text-5xl md:mb-6 lg:mb-12 bg-clip-text text-transparent bg-gradient-to-b 
                  "
                >
                  Empieza a ahorrar!
                </h1>
                <span className="text-white text-3xl mb-[200px]">Calcula tu ahorro potencial y da el primer paso hacia la energía renovable.</span>
              </div>
            }
          />
        </div>
      </section>
      {/* <------------------------------ Calculadora de Ahorro --------------------------------> */}
      <section className="
            mt-5 mb-12  text-center text-white">
        <h2 className="text-2xl font-bold">Calculadora de Ahorro con Paneles Solares</h2>
        <p>Ingrese su consumo mensual de energía (Kw/h):</p>
        <input 
          type="number" 
          value={consumo} 
          onChange={(e) => setConsumo(e.target.value)} 
          placeholder="Ej. 280" 
          className="text-black p-2 rounded-md"
        />
        <button onClick={calcularAhorro} className="bg-blue-500 text-white p-2 rounded-md ml-2">Calcular</button>
        <h2 className="mt-4 text-xl">Resultados:</h2>
        <p>{resultados.inversion}</p>
        <p>{resultados.ahorro}</p>
        <p>{resultados.retorno}</p>
      </section>
      <section className="w-full p-5 bg-black">
          <h1 className="text-2xl text-white font-bold text-center">Precios de Sistemas Solares</h1>
          <div className="mt-5 text-white space-y-5">
              {systems.map((system, index) => (
                  <div key={index} className="bg-black p-5 rounded-lg shadow-md">
                      <h2 className="text-xl text-white font-semibold">{system.name} - {system.power}</h2>
                      <p className='text-white'><strong className='text-white'>Costo:</strong> {system.cost}</p>
                      <table className="w-full border-collapse border text-white border-gray-300 mt-3">
                          <thead>
                              <tr className="bg-gray-600">
                                  <th className="border border-gray-200 p-2">Incluye</th>
                              </tr>
                          </thead>
                          <tbody>
                              {system.items.map((item, i) => (
                                  <tr key={i}>
                                      <td className="border border-gray-200 p-2">{item}</td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                      <p><strong>Peso:</strong> {system.weight}</p>
                      <p><strong>Superficie:</strong> {system.area}</p>
                  </div>
              ))}
          </div>
      </section>
      {/* <------------------------------- Second Section: Lamp Component (Maybe in this home page it's better hide this ) --------------------------------> */} 
        <section className="w-full mt-0 inset-0 h-screen">
          <LampComponent/>
        </section>
      {/* <--------------------------------- Third Section: Experimental ---------------------------------> */}
        <section className="mt-10">
          <NewProducts />
        </section>
      
      
    </main>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '651116bbf46af542a25739c8';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}
