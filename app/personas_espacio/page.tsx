'use client';
//----------------Imports---------------//
import Header from "../components/header";
import Footer from "../components/footer";
import { PEOPLE_IN_THE_SPACE } from "../components/API/PEOPLE_IN_SPACE";
import { PeopleInTheSpaceTable } from "../components/tables";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
//----------------Construcción página exoplanetas------------------//
let personasRenderizadas = new Set();

const PeopleInTheSpacePage = ():React.JSX.Element =>{
    const getPeopleInSpace = async ():Promise<void> =>{
        const table_container = document.getElementById('table_container');
        try{
            //API CALL
            const response = await fetch(PEOPLE_IN_THE_SPACE.QUERY)
            const data = await response.json();

            if (!personasRenderizadas.has(data.people)){
                const tableSubContainer = document.createElement('section');
                const table = <PeopleInTheSpaceTable people={data.people} />

                const root = createRoot(tableSubContainer)
                root.render(table);
                table_container?.appendChild(tableSubContainer);
                personasRenderizadas.add(data.people);
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    //------Hooks: Efectos secundarios en componentes funcionales-------//
    useEffect(()=>{
        getPeopleInSpace();
    }, [])

    return (
        //-------Tags html van aquí:---------//
        <>
            <Header />
            <main className="flex justify-center">
                <h2 className="font-poppins font-bold text-6xl lg:text-8xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-sky-500 dark:from-pink-500 to-purple-800 dark:to-purple-800 shadow-around">
                    Exoplanetas
                </h2>

            </main>
            <section id="table_container" className="w-4/5 m-auto">

            </section>
            <Footer />
        </>
    )
} 

export default PeopleInTheSpacePage;