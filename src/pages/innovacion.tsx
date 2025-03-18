import React from 'react'
import { LampComponentBienestar } from '../../components/global/lampBienestar'
import Navbar from '../../components/global/Navbar'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <main className="flex bg-[#0a0a0a] items-center justify-center flex-col">
        <Navbar />
        <section className="w-full mt-0 inset-0 h-screen">
          <LampComponentBienestar />
        </section>
      </main>
    </>
  )
}

export default page