import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import SecondPart from "../components/SecondPart";
import NavBar from "../components/NavBar";
import ThirdPart from "../components/ThirdPart";
import RealThird from "../components/RealThird";
const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="" role={`main`}>
          <section className="h-[100px] sticky z-50 bg-white top-0  shadow-xl">
            <NavBar />
          </section>
          <section className="bg-lin  mt-2 mx-2 md:mx-6 h-[236px]   md:h-[80vh]" role="banner">
            <Hero />
          </section>
          <section className=" mx-2 md:mx-6  min-h-[70vh]" role="">
            <SecondPart />
          </section>
          <section className=" mx-2 md:mx-6   min-h-[70vh]" role="">
            <RealThird slides={slides}/>
          </section>
          <section className=" mx-2 md:mx-6  min-h-[70vh]" role="">
            <ThirdPart />
          </section>
        </main>

        <footer></footer>
      </div>
  );
}
