import Image from "next/image";
import Header from "./components/header";
export default function Home() {
  return (
    <>
      <Header />
      <section className="text-center">
        <span className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl mx-auto animate-gradient text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-800 shadow-around">
            SkyHub
        </span>
      </section>
    </>
  );
}
