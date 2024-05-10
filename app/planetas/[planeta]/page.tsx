'use client';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { useEffect } from "react";
import { SYSTEME_SOLAIRE_API } from "@/app/components/API/SYSTEME_SOLAIRE_API";
import { ENGLISH } from "@/app/components/utils/PLANETS_TO";
import PlanetDetailTable from "@/app/components/tables";
import { createRoot } from "react-dom/client";

const Detalles = ({ params, }: { params: {planeta:string}; }) : React.JSX.Element =>{
    const getPlanetInformation = async ():Promise<void> =>{
        const table_container = document.getElementById('table_container');
        try{
            const response = await fetch(`${SYSTEME_SOLAIRE_API.CORPUS}${ENGLISH[params.planeta]}`);
            const data = await response.json();

            
            const table_around = document.createElement('section');
            const table = <PlanetDetailTable planeta={params.planeta} afelio={data.aphelion} perihelio={data.perihelion} />
            const root = createRoot(table_around);
            root.render(table)
            table_container?.appendChild(table_around);
            
            console.log(data);
            
            
        } catch (error){
            console.log(error);
            
        }
    }
    useEffect(() =>{
        getPlanetInformation();
    }, []);
    return (
        <>
            <Header />
                <section className="flex justify-center">
                    <h2 className="font-poppins uppercase font-bold text-6xl lg:text-8xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-sky-500 dark:from-pink-500 to-purple-800 dark:to-purple-800 shadow-around">
                        {params.planeta}
                    </h2>

                </section>
                <main className="w-4/5 m-auto mt-5" id="table_container">
                    
                </main>
            <Footer />
        </>
    )
}

export default Detalles;
