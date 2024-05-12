'use client';
import { RxGithubLogo } from "react-icons/rx";
import Link from "next/link";
const Footer = ():React.JSX.Element => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="fill-sky-500  dark:fill-purple-700" fillOpacity="1" d="M0,256L120,240C240,224,480,192,720,197.3C960,203,1200,245,1320,266.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <footer className="font-poppins py-8 bg-gradient-to-b from-sky-500 to-sky-800 dark:from-purple-700 dark:to-purple-950 text-center flex justify-evenly">
                <Link href={'/'}><img src="/logo.png" alt="logo" className="w-40 rounded-full" /></Link>
                <section className="my-6 md:my-0">
                    <h4 className="text-xl">Explora nuestro sitio</h4>
                    <ul className="">
                        <li className="mx-3.5"><Link href={'/planetas'} className="font-bold text-lg text-slate-200 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:decoration-violet-700 dark:hover:decoration-sky-500">Planetas</Link></li>
                        <li className="mx-3.5"><Link href={'/asteroides'} className="font-bold text-lg text-slate-200 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:decoration-violet-700 dark:hover:decoration-sky-500">Asteroides</Link></li>

                    </ul>
                </section>
                <section>
                    <h4 className="text-xl">Disponible sólo en desarrollo</h4>
                    <ul >
                        <li className="mx-3.5"><Link href={'/personas_espacio'} className="font-bold text-lg text-slate-200 transition-all hover:underline dark:hover:text-purple-600 hover:text-sky-500 hover:transform hover:decoration-violet-700 dark:hover:decoration-sky-500">Personas en el espacio</Link></li>

                    </ul>

                </section>
                <section >
                    <strong>Follow our project!</strong> 
                    <a href="https://github.com/DavidMojica/SkyHub" target="_BLANK"><RxGithubLogo className="w-12 h-12 m-auto dark:hover:text-purple-600 hover:text-sky-500 hover:cursor-pointer" /></a>
                    <article>
                        {/* Fotos y pics */}
                    </article>
                </section>
            </footer>
        </>
    )
}

export default Footer;