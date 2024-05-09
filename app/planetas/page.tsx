import Header from "../components/header"
import Footer from "../components/footer"
import GalleryCard from "../components/cards_gallery"

const Planetas = ():React.JSX.Element =>{
    return (
        <>
            <Header />
            <section className="flex justify-center">
                <h2 className="font-poppins font-bold text-6xl lg:text-8xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-sky-500 dark:from-pink-500 to-purple-800 dark:to-purple-800 shadow-around">Planetas</h2>
            </section>
            <main>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 65">
                    <path className="fill-blue-500  dark:fill-purple-800 opacity-1 dark:opacity-30" d="M0.00,49.98 C152.64,-5.41 358.07,72.55 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
                </svg>
                <section className="py-8 bg-blue-500 dark:bg-purple-800 bg-opacity-1 dark:bg-opacity-30">
                    <article className="m-auto grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-4/5">
                        <GalleryCard img_route="https://s1.significados.com/foto/earth-11015-1920.jpg?class=article" tipo="Planeta" nombre="tierra" />
                        <GalleryCard img_route="https://s1.significados.com/foto/earth-11015-1920.jpg?class=article" tipo="Planeta" nombre="tierra" />
                        <GalleryCard img_route="https://s1.significados.com/foto/earth-11015-1920.jpg?class=article" tipo="Planeta" nombre="tierra" />
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Planetas;