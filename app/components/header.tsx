import Switch_day from "./switch_day"
import { FaGithub } from "react-icons/fa"

const Header = ():React.JSX.Element =>{
    return(
        <header className={'font-poppins flex justify-evenly items-center py-6 sticky top-0'}>
            <img src="./logo.png" alt="" className="w-40 rounded-full" />
            <ul className="flex items-end">
                <li className="mx-3.5"><a href="#" className="font-bold text-2xl text-sky-700 dark:text-purple-800 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:scale-125 hover:decoration-violet-700 dark:hover:decoration-sky-500">Planetas</a></li>
                <li className="mx-3.5"><a href="#" className="font-bold text-2xl text-sky-700 dark:text-purple-800 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:scale-125 hover:decoration-violet-700 dark:hover:decoration-sky-500">Exoplanetas</a></li>
                <li className="mx-3.5"><a href="#" className="font-bold text-2xl text-sky-700 dark:text-purple-800 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:scale-125 hover:decoration-violet-700 dark:hover:decoration-sky-500">Estrellas</a></li>
                <li className="mx-3.5"><a href="#" className="font-bold text-2xl text-sky-700 dark:text-purple-800 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:scale-125 hover:decoration-violet-700 dark:hover:decoration-sky-500">Gráficos</a></li>
            </ul>
            <aside className="flex justify-around items-center">
                <Switch_day />
                <a href="https://github.com/DavidMojica/SkyHub" target="_BLANK" className="text-sky-700 dark:text-purple-800 ml-8"><FaGithub className="w-10 h-10 transition-all hover:scale-125" /></a>
            </aside>
        </header>
    )
}

export default Header