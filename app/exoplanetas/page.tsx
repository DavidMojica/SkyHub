//----------------Imports---------------//
import Header from "../components/header";
import Footer from "../components/footer";
import { Metadata } from "next";

//----------Metadata: establecer el título de la página y más (a futuro)------------//
export const metadata:Metadata = {
    title: "Exoplanetas"
}

//-------Nasa API fetch: Exoplanetas--------//



//----------------Construcción página exoplanetas------------------//
const Exoplanetas = ():React.JSX.Element =>{
     /**
     * Construcción de la página de exoplanetas
     * Devuelve: La página de exoplanetas como componente react
     */
    //------Hooks: Efectos secundarios en componentes funcionales-------//


    return (
        //-------Tags html van aquí:---------//
        <>
            <Header />
            <main className="flex justify-center">
                <h2 className="font-poppins font-bold text-6xl lg:text-8xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-sky-500 dark:from-pink-500 to-purple-800 dark:to-purple-800 shadow-around">
                    Exoplanetas
                </h2>


            </main>
            <Footer />
        </>
    )
} 

export default Exoplanetas;