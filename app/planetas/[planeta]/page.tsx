'use client';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { SYSTEME_SOLAIRE_API } from "@/app/components/API/SYSTEME_SOLAIRE_API";
import { ENGLISH } from "@/app/components/utils/PLANETS_TO";
import {PlanetDetailTable} from "@/app/components/tables";
import { fetchData } from "@/app/components/utils/DATA_FETCHER";
//--------Variables------//
const Detalles = async ({ params, }: { params: {planeta:string}; }) =>{
    const data = await fetchData(`${SYSTEME_SOLAIRE_API.CORPUS}${ENGLISH[params.planeta]}`);
    return (
        <>
            <Header />
                <section className="flex justify-center">
                    <h2 className="font-poppins uppercase font-bold text-6xl lg:text-8xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-sky-500 dark:from-pink-500 to-purple-800 dark:to-purple-800 shadow-around">
                        {params.planeta}
                    </h2>
                </section>
                <main className="w-4/5 m-auto mt-5" id="table_container">
                    { <PlanetDetailTable planeta={params.planeta} afelio={data.aphelion} perihelio={data.perihelion} gravedad={data.gravity} tiempo_orbita={data.sideralOrbit} tiempo_rotacion={data.sideralRotation} densidad={data.density} temperatura={data.avgTemp} escape={data.escape} radio_ecuatorial={data.equaRadius} radio_polar={data.polarRadius} radio_medio={data.meanRadius} masa={data.mass} descubierto_fecha={data.discoveryDate} descubierto_por={data.discoveredBy} lunas={data.moons} />}
                </main>
            <Footer />
        </>
    )
}

export default Detalles;
