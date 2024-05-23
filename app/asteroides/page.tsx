'use client';
import Header from "../components/header";
import Footer from "../components/footer";
import RainbowTitle from "../components/rainbow_title";
import { NASA_API, IMAGENES_NASA_ASTEROIDES } from "../components/API/NASA_API";
import { useEffect } from "react";
import Utils from "../components/utils";
import GalleryCard from "../components/cards_gallery";
import { createRoot } from "react-dom/client";

let asteroidesRenderizados = new Set();

const Asteroides = () => {
    const getAsteroids = async ():Promise<void> => {
        const asteroid_cards_container = document.getElementById('asteroid_cards_container');
        for (const [asteroide, imagen] of Object.entries(IMAGENES_NASA_ASTEROIDES)){
            const data = await Utils.DataFetcher(`${NASA_API.MEDIA_LIBRARY}${imagen}`);
            const href = data.collection.items[0].links[0].href;   
            if (!asteroidesRenderizados.has(asteroide)){
                const galleryCardElement = <GalleryCard img_route={href} nombre={asteroide} tipo={asteroide} routeRef="asteroides" idElement={asteroide} />
                const cardContainer = document.createElement('section');
                cardContainer.classList.add('gallery-card-container');
                const root = createRoot(cardContainer);
                root.render(galleryCardElement);
                asteroid_cards_container?.appendChild(cardContainer);
                asteroidesRenderizados.add(asteroide);
            }         
        }
    }
    useEffect(() =>{
        getAsteroids();
    },[])
    return (
        <>
            <Header />
                <section className="flex flex-col justify-center">
                    <RainbowTitle text="Asteroides" />
                    <h4 className="font-poppins w-1/3 text-center mx-auto text-3xl text-gray-901 dark:text-white">
                        Puedes dar click en algún asteroide para observar sus detalles y características.
                    </h4>
                </section>
                <main>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 65">
                        <path className="fill-blue-500  dark:fill-purple-800 opacity-1 dark:opacity-30" d="M0.00,49.98 C152.64,-5.41 358.07,72.55 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
                    </svg>
                    <section className="py-8 bg-blue-500 dark:bg-purple-800 bg-opacity-1 dark:bg-opacity-30">
                        <article className="m-auto grid gap-y-12 place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-4/5" id="asteroid_cards_container">

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

export default Asteroides;
