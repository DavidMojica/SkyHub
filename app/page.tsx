import Image from "next/image";
import Header from "./components/header";
import {MoonlightScene, ForestScene} from "./components/parallax/parallax-scenarios";
export default function Home() {
  return (
    <>
      <Header />
      <section className="text-center mb-8 ">
          <span className="font-poppins font-bold text-6xl lg:text-8xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-sky-500 dark:from-pink-500 to-purple-800 dark:to-purple-800 shadow-around">
              SkyHub
          </span>

      </section>
          <MoonlightScene />
          <ForestScene />
    </>
  );
}
