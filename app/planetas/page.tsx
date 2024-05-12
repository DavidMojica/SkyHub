'use client';
import Header from "../components/header"
import Footer from "../components/footer"
import GalleryCard from "../components/cards_gallery"
import { NASA_API, IMAGENES_NASA_PLANETAS } from "../components/API/NASA_API";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import RainbowTitle from "../components/rainbow_title";
//--------Variables------//
const imgs_planetas_seleccionadas: { [key: string]: string } = {};
let planetasRenderizados = new Set();

const Planetas = ():React.JSX.Element =>{
    const getNasaPlanets = async ():Promise<void>  =>{
        for (const planeta of Object.keys(IMAGENES_NASA_PLANETAS)) {
            const imagenes = IMAGENES_NASA_PLANETAS[planeta];
            const imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
            imgs_planetas_seleccionadas[planeta] = imagenAleatoria;
        }
        const planet_cards_container = document.getElementById('planet_cards_container');
        for (const [planeta, img_nasa_id] of Object.entries(imgs_planetas_seleccionadas)) {
            try {
                const response = await fetch(`${NASA_API.MEDIA_LIBRARY}${img_nasa_id}`);
                const data = await response.json();
                const href = data.collection.items[0].links[0].href;            
                if(!planetasRenderizados.has(planeta)){
                    const galleryCardElement = <GalleryCard img_route={href} nombre={planeta} tipo={planeta} routeRef="planetas" idElement={planeta} />;
                    const cardContainer = document.createElement('section');
                    cardContainer.classList.add('gallery-card-container');
                    const root = createRoot(cardContainer);
                    root.render(galleryCardElement);
                    planet_cards_container?.appendChild(cardContainer);
                    planetasRenderizados.add(planeta);
                }
            } catch (error) {
                console.error(`Error al obtener datos para ${img_nasa_id}:`, error);
            }
        }
    }
    useEffect(()=>{
        getNasaPlanets();
    }, [])
    return (
        <>
            <Header />
            <section className="flex flex-col justify-center">
                <RainbowTitle text="Planetas" />
                <h4 className="font-poppins w-1/3 text-center mx-auto text-3xl text-gray-900 dark:text-white">Puedes dar click en algún planeta para observar sus detalles y características.</h4>
            </section>
            <main>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 65">
                    <path className="fill-blue-500  dark:fill-purple-800 opacity-1 dark:opacity-30" d="M0.00,49.98 C152.64,-5.41 358.07,72.55 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
                </svg>
                <section className="py-8 bg-blue-500 dark:bg-purple-800 bg-opacity-1 dark:bg-opacity-30">
                    <article className="m-auto grid gap-y-12 place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-4/5" id="planet_cards_container">

                    </article>
                </section>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 85">
                    <path className="fill-blue-500  dark:fill-purple-800 opacity-1 dark:opacity-30" d="M0.00,49.98 C143.62,116.95 285.83,18.27 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"></path>
                </svg>
            </main>
            <Footer />
        </>
    )
}

export default Planetas;