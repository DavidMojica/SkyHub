import Switch_day from "./switch_day";
import { FaGithub } from "react-icons/fa";
import { Redirect } from "next";
import Link from "next/link";

const Header = ():React.JSX.Element =>{
    return(
        <header className={'font-poppins flex flex-col sm:flex-row sm:justify-evenly py-2 items-center '}>
            <section className="flex items-center">
                <img src="./logo.png" alt="" className="w-40 rounded-full" />
                <aside className="flex flex-col sm:hidden ml-6 items-center">
                    <a href="https://github.com/DavidMojica/SkyHub" target="_BLANK" className="mb-4 text-sky-700 dark:text-purple-800 ml-2"><FaGithub className="w-10 h-10 transition-all scale-125 hover:scale-150" /></a>
                    <Switch_day />
                </aside>
            </section>
            <ul className="my-6 md:my-0 flex flex-col lg:flex-row text-center">
                <li className="mx-3.5"><a href="#" className="font-bold text-2xl text-sky-700 dark:text-purple-800 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:text-3xl hover:decoration-violet-700 dark:hover:decoration-sky-500">Planetas</a></li>
                <Link href={'./pages/exoplanetas'}><li className="mx-3.5"><p className="font-bold text-2xl text-sky-700 dark:text-purple-800 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:text-3xl hover:decoration-violet-700 dark:hover:decoration-sky-500">Exoplanetas</p></li></Link>
                <li className="mx-3.5"><a href="#" className="font-bold text-2xl text-sky-700 dark:text-purple-800 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:text-3xl hover:decoration-violet-700 dark:hover:decoration-sky-500">Estrellas</a></li>
                <li className="mx-3.5"><a href="#" className="font-bold text-2xl text-sky-700 dark:text-purple-800 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:text-3xl hover:decoration-violet-700 dark:hover:decoration-sky-500">Gráficos</a></li>
            </ul>
            <aside className="hidden sm:flex justify-around items-center">
                <Switch_day />
                <a href="https://github.com/DavidMojica/SkyHub" target="_BLANK" className="text-sky-700 dark:text-purple-800 ml-8"><FaGithub className="w-10 h-10 transition-all hover:scale-125" /></a>
            </aside>
        </header>
    )
}

export default Header