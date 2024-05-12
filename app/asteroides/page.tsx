import Header from "../components/header";
import Footer from "../components/footer";
import RainbowTitle from "../components/rainbow_title";

const Asteroides = () => {
    

  return (
    <>
        <Header />
            <section className="flex flex-col justify-center">
                <RainbowTitle text="Asteroides" />
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

export default Asteroides;
