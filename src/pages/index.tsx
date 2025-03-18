import { GetServerSideProps } from "next";
import { Button } from "../../components/ui/button";
import { LampComponent } from "../../components/global/lamp";
import { ContainerScroll } from "../../components/global/container-scroll-animation";
import Navbar from "../../components/global/Navbar";
import Featured from "../../components/global/Featured";
import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";
import NewProducts from '../../components/global/NewProducts';


interface HomeProps {
  product: typeof Product; // Define the correct type for the 'product' prop
}


export default function Home({ product }: HomeProps) {
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
                    Empieza a ahorrar hoy mismo. Calcula tu ahorro potencial y da el primer paso hacia la energía renovable.
                  </h1>
                </div>
              }
            />
          </div>
        </section>
      {/* <--------------------------------- Third Section: Experimental ---------------------------------> */}
        <section className="w-full mt-0 inset-0">
          <Featured product={product}/>
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


export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const featuredProductId = '651116bbf46af542a25739c8';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
};