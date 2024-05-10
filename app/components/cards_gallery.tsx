'use client';
import 'atropos/css';
import Atropos from 'atropos';
import { useEffect } from 'react';
import Link from 'next/link';

const GalleryCard = ({img_route,tipo, nombre, routeRef, idElement}: {img_route:string; tipo:string; nombre:string, routeRef:string, idElement:string}):React.JSX.Element => {
    useEffect(() =>{
        const cardElements = document.querySelectorAll('.a-card');
        Array.prototype.forEach.call(cardElements, (element: Element) => {
            if (element instanceof HTMLElement) {
                Atropos({
                    el: element,
                    activeOffset: 100,
                    shadow: false
                });
            }
        });
    }, []);

    return (
        <>
            <Link href={`/${routeRef}/${idElement}`}>
                <section className="a-card w-96 h-96  font-poppins hover:cursor-pointer ">
                    <article className='atropos-scale '>
                        <article className='atropos-rotate border-solid border-2 border-white rounded-3xl'>
                            <article className='atropos-inner relative'>
                                <article className="relative h-48 md:h-64 lg:h-72">
                                    <section>
                                        <section className='h-6 bg-white bg-opacity-65 py-6 relative z-50 flex items-center justify-center rounded-t-2xl'>
                                            <h2 className="text-2xl font-bold text-gray-800" data-atropos-offset="18">{tipo}</h2>
                                        </section>
                                        <img src={img_route} alt={nombre} className="absolute inset-0 w-full h-full object-cover rounded-t-3xl" data-atropos-offset="1" />
                                    </section>
                                    </article>
                                    <article className=" px-4 py-[18px] flex justify-around rounded-b-3xl bg-white dark:bg-slate-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                                        <section className="text-center grid place-items-center w-2/3 ">
                                            <strong className="text-gray-800 dark:text-white text-wrap uppercase tracking-wide " data-atropos-offset="14">
                                                {nombre}
                                            </strong>
                                        </section>
                                        <img src="./logo.png" alt="" className="rounded-full h-14 w-14" data-atropos-offset="14" />
                                    </article>
                            </article>
                        </article>
                    </article>
                </section>
            </Link>
        </>
    )
}

export default GalleryCard;