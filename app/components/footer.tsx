import { DiGithubFull } from "react-icons/di";
const Footer = ():React.JSX.Element => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="fill-sky-500  dark:fill-purple-700" fillOpacity="1" d="M0,256L120,240C240,224,480,192,720,197.3C960,203,1200,245,1320,266.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <footer className=" py-8 bg-gradient-to-b from-sky-500 dark:from-purple-700 dark:to-purple-950 text-center flex justify-evenly">
                    <img src="./logo.png" alt="logo" className="w-40 rounded-full" />
                    <section>
                        <h4 className="text-2xl ">Explora nuestro sitio</h4>
                        <ul className="my-6 md:my-0 flex flex-col text-center">
                            <li className="mx-3.5"><a href="#" className="font-bold text-2xl text-sky-700 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:text-3xl hover:decoration-violet-700 dark:hover:decoration-sky-500">Planetas</a></li>
                            <li className="mx-3.5"><a href="#" className="font-bold text-2xl text-sky-700 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:text-3xl hover:decoration-violet-700 dark:hover:decoration-sky-500">Exoplanetas</a></li>
                            <li className="mx-3.5"><a href="#" className="font-bold text-2xl text-sky-700 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:text-3xl hover:decoration-violet-700 dark:hover:decoration-sky-500">Estrellas</a></li>
                            <li className="mx-3.5"><a href="#" className="font-bold text-2xl text-sky-700 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:text-3xl hover:decoration-violet-700 dark:hover:decoration-sky-500">Gráficos</a></li>
                        </ul>
                    </section>
                    <aside className="text-center justify-center flex flex-col">
                        <p>
                            <strong>Follow our project in:</strong>
                            <DiGithubFull className="w-12 h-12" />
                        </p>
                        <section>
                            {/* Fotos y pics */}
                        </section>
                    </aside>
            </footer>
        </>
    )
}

export default Footer;