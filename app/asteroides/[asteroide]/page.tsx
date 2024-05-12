'use client';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { SYSTEME_SOLAIRE_API } from "@/app/components/API/SYSTEME_SOLAIRE_API";
import Utils from "@/app/components/utils";
import {PlanetDetailTable} from "@/app/components/tables";
import RainbowTitle from "@/app/components/rainbow_title";
const Detalles = async ({ params, }: { params: {asteroide:string}; }) =>{
    const data = await Utils.DataFetcher(`${SYSTEME_SOLAIRE_API.CORPUS}${params.asteroide}`);
    return (
        <>
            <Header />
                <section className="flex justify-center">
                <RainbowTitle text={params.asteroide} />
                </section>
                <main className="w-4/5 m-auto mt-5" id="table_container">
                    { <PlanetDetailTable planeta={params.asteroide} afelio={data.aphelion} perihelio={data.perihelion} gravedad={data.gravity} tiempo_orbita={data.sideralOrbit} tiempo_rotacion={data.sideralRotation} densidad={data.density} temperatura={data.avgTemp} escape={data.escape} radio_ecuatorial={data.equaRadius} radio_polar={data.polarRadius} radio_medio={data.meanRadius} masa={data.mass} descubierto_fecha={data.discoveryDate} descubierto_por={data.discoveredBy} lunas={data.moons} />}
                </main>
            <Footer />
        </>
    )
}

export default Detalles;