import React from 'react';
import { LampComponentJuguete } from '../../components/global/lampJuguete';
import Navbar from '../../components/global/Navbar';

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

const Page = () => {
    return (
        <>
            <main className="flex bg-[#0a0a0a] items-center justify-center flex-col">
                <Navbar />
                <section className="w-full mt-0 inset-0 h-screen">
                    <LampComponentJuguete />
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
            </main>
        </>
    );
};

export default Page;