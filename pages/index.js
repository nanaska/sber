import Head from "next/head";

import Hero from "../components/Hero";
import SecondPart from "../components/SecondPart";
import NavBar from "../components/NavBar";
import ThirdPart from "../components/ThirdPart";
import RealThird from "../components/RealThird";
import ChatBot from "../components/ChatBot";


export default function Home() {
  return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Яргу</title>
          <meta name="description" content="Ярославский государственный университет имени Павла Григорьевича Демидова. ЯрГУ классический университет, позволяющий получить классическое образование абитуриенту." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="relative" role={`main`}>
            <ChatBot/>
          <section  className="h-[100px] sticky z-50 bg-white top-0  shadow-xl">
            <NavBar />
          </section>
          <section id="" className="bg-lin  mt-2 mx-2 md:mx-6 h-[236px]   md:h-[80vh]" role="banner">
            <Hero />
          </section>
          <section id="faculty" className=" mx-2 md:mx-6  min-h-[70vh]" role="">
            <SecondPart />
          </section>
          <section id="activity" className=" mx-2 md:mx-6 flex items-center justify-center  mt-5" role="">
            <RealThird />
          </section>
          <section id="community" className=" mx-2 md:mx-6  mb-14" role="">
            <ThirdPart />
          </section>
        </main>

      </div>
  );
}
